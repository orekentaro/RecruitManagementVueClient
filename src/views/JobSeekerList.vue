<template>
  <h2>求職者一覧</h2>

  <el-card class="box-card">
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="名前" prop="name" />
      <el-table-column label="フェーズ" prop="phase" />
      <el-table-column label="対応状況" prop="result" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import axios from "axios";
import showMassage from "../utils/message";

interface JobSeekerList {
  gender: String;
  job_ads: String;
  job_id: String;
  name: String;
  phase: String;
  result: String;
  title: String;
}
const search = ref("");
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
const handleEdit = (index: number, row: JobSeekerList) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: JobSeekerList) => {
  console.log(index, row);
};

let tableData: JobSeekerList[] = [];
console.log("hello");
axios
  .get("/api/job_seeker_list", { withCredentials: true })
  .then((response) => {
    let res = response.data;
    if (res["result"] == "success") {
      console.log(res["data"]);
      tableData = res["data"];
      showMassage("求職者情報の取得に成功しました", "success");
    } else {
      showMassage("求職者情報の取得に失敗しました", "error");
      return false;
    }
  })
  .catch((e) => {
    showMassage(`求職者情報の取得に失敗しました:${e}`, "error");
  });
</script>
