<template>
  <div>求職者一覧</div>
  <el-button type="primary" @click="test()">Primary</el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import axios from "axios";

const test = () => {
  axios.get("/api/");
};
</script>
