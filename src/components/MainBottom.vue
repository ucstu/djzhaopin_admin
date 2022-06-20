<template>
  <div class="contain">
    <div class="bottom">
      <el-button type="primary" :loading="false" @click="refresh"
        >刷新</el-button
      >
      <div>
        <el-pagination
          :currentPage="pageNum"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
const pageSize = $ref(10);
const reload = inject("reload") as () => void;
const refresh = () => {
  reload();
};

const props = defineProps({
  value: {
    type: Boolean,
    default: true,
  },
  total: {
    type: Number,
    default: 0,
  },
  pageNum: {
    type: Number,
    default: 1,
  },
});
const emit = defineEmits(["current-change", "size-change"]);
const loading = $ref(true);
const handleCurrentChange = (currentPage: number) => {
  emit("current-change", currentPage);
};
const handleSizeChange = (val: number) => {
  emit("size-change", val);
};
</script>

<style lang="scss" scoped>
.contain {
  position: fixed;
  bottom: 15px;
  right: -95px;
  width: 100%;
  line-height: var(--footer-height);
  display: flex;
  justify-content: center;
  .bottom {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
}
</style>
