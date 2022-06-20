<template>
  <div class="map">
    <div id="container"></div>
    <el-scrollbar>
      <ul style="margin-left: 40px">
        <li
          v-for="address in aboutAddress"
          :key="address.id"
          @click="handleArea(address)"
        >
          {{ address.name }}
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, shallowRef } from "vue";
const props = defineProps({
  formCompany: {
    type: Object,
    default: () => ({}),
  },
});
interface Address {
  address: string;
  location: {
    longitude: number;
    latitude: number;
  };
}
const ActuAddress = $ref<Address>({});
const emit = defineEmits(["handlePlace"]);
const map = shallowRef<AMap.Map>();
const placeSearch = shallowRef();
const marker = shallowRef();
const aboutAddress = ref<any>([]);
const handleArea = (address: any) => {
  ActuAddress.address = address.name;
  let lnglat = {
    longitude: address.location.lng,
    latitude: address.location.lat,
  };
  ActuAddress.location = lnglat;
  let markerLnglat = [address.location.lng, address.location.lat] as [
    number,
    number
  ];
  if (!map.value) {
    return;
  }
  if (!marker.value) {
    marker.value = new AMap.Marker({
      map: map.value,
      position: markerLnglat,
    });
    map.value?.add(marker.value);
  }
  marker.value.setPosition(markerLnglat);
  map.value.setCenter(markerLnglat);
  emit("handlePlace", ActuAddress);
};
onMounted(() => {
  map.value = new AMap.Map("container", {
    zoom: 13,
  });
  if (props.formCompany.latitude !== null) {
    marker.value = new AMap.Marker({
      map: map.value,
      position: [props.formCompany.longitude, props.formCompany.latitude],
    });
    map.value?.add(marker.value);
    map.value?.setCenter([
      props.formCompany.longitude,
      props.formCompany.latitude,
    ]);
  }
  AMap.plugin(
    [
      "AMap.Geolocation",
      "AMap.CitySearch",
      "AMap.AutoComplete",
      "AMap.PlaceSearch",
      "AMap.Geocoder",
    ],
    function () {
      let citySearch = new AMap.CitySearch();
      citySearch.getLocalCity(function (status, result) {
        if (typeof result != "string") {
          if (status === "complete") {
            // @ts-ignore
            let autocomplete = new AMap.AutoComplete({
              city: result.city,
              input: "input",
            });
            placeSearch.value = new AMap.PlaceSearch({
              city: result.city,
            });
            autocomplete.on("select", (e: { poi: { name: any } }) => {
              placeSearch.value.search(
                e.poi.name,
                (status: any, result: any) => {
                  if (status === "complete") {
                    aboutAddress.value = result.poiList.pois;
                  }
                }
              );
            });
          }
        }
      });
      map.value?.on("click", (e: any) => {
        if (!marker.value) {
          marker.value = new AMap.Marker({
            map: map.value,
            position: e.lnglat,
          });
          map.value?.add(marker.value);
        }
        map.value?.setCenter(e.lnglat);
        ActuAddress.location = {
          longitude: e.lnglat.lng,
          latitude: e.lnglat.lat,
        };
        emit("handlePlace", ActuAddress);
        regeoCode(e.lnglat);
      });
      let geocoder = new AMap.Geocoder();
      const regeoCode = (lnglat: any) => {
        if (!marker.value) {
          marker.value = new AMap.Marker({
            map: map.value,
            position: lnglat,
          });
          map.value?.add(marker.value);
        }
        marker.value.setPosition(lnglat); //设置标记的位置
        geocoder.getAddress(lnglat, function (status, result: any) {
          if (status === "complete" && result.regeocode) {
            var address = result.regeocode.formattedAddress;
            ActuAddress.address = address;
          }
        });
        // marker.value.setMap(map.value!); //在地图上显示一个标记
      };
    }
  );
});
</script>

<style lang="scss" scoped>
.map {
  display: flex;
  justify-content: space-between;
  width: 1600px;
  height: 180px;

  #container {
    width: 380px;
    height: 180px;
    border-radius: 5px;
  }

  .el-scrollbar {
    width: 240px;

    ul {
      margin-top: -8px;
      margin-left: -10px;
      list-style-type: none;

      li {
        word-break: keep-all;
        white-space: nowrap;
        cursor: pointer;
      }
    }
  }
}
</style>
