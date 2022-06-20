<template>
  <div class="avatar">
    <div @click="uploadgogo">
      <input
        ref="uploadInput"
        type="file"
        style="display: none"
        name="icon"
        @change="dealfilechange"
      />
      <img
        v-if="logoUrl"
        :src="VITE_CDN_URL + logoUrl"
        class="avatar"
        style="width: 80px; height: 80px"
        alt=""
      />
      <el-icon v-else class="avatar-uploader-icon" :size="30">
        <Plus />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { postAvatars } from "@/services/services";
import { failResponseHandler } from "@/utils/handler";
import useAvatarUpload from "@/utils/useAvatarUpload";
import { ref } from "vue";
const props = defineProps({
  logoUrl: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["change-img"]);
let logo = props.logoUrl;
const VITE_CDN_URL = import.meta.env.VITE_CDN_URL;
//上传头像
const uploadInput = ref<HTMLElement | null>(null);
const dealfilechange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  let files = input.files;
  if (files) {
    if (useAvatarUpload(files[files.length - 1])) {
      postAvatars({ avatar: files[0] })
        .then((res) => {
          logo = res.data.body;
          emit("change-img", logo);
        })
        .catch(failResponseHandler);
    }
  }
};
const uploadgogo = () => {
  let oBtn = uploadInput.value as HTMLInputElement;
  oBtn.click();
};
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  flex-wrap: nowrap;

  .avatar-uploader-icon {
    padding: 20px;
    border: solid 1px #dcdfe6;
  }
}
</style>
