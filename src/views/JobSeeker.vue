<template>
  <h2>進行中求職者</h2>

  <el-card class="box-card">
    <el-table :data="filterTableData" style="width: 100%">
      <el-table-column label="名前" prop="name" />
      <el-table-column label="フェーズ" prop="phase" />
      <el-table-column label="現状ステータス" prop="result" />
      <el-table-column label="結果" prop="result" />
      <el-table-column label="担当者" prop="corr_person" />
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
import { computed, ref, reactive } from "vue";
import axios from "axios";
import showMassage from "../utils/message";
import { JobSeeker } from "../type";
const search = ref("");
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
const handleEdit = (index: number, row: JobSeeker) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: JobSeeker) => {
  console.log(index, row);
};

let tableData: JobSeeker[] = [];

axios
  .get("/api/job_seeker?active_flag=0", { withCredentials: true })
  .then((response) => {
    let res = response.data;
    if (res["result"] == "success") {
      tableData = res["data"];
      showMassage("進行中求職者の取得に成功しました", "success");
    } else {
      showMassage("進行中求職者の取得に失敗しました", "error");
      return false;
    }
  })
  .catch((e) => {
    showMassage(`進行中求職者の取得に失敗しました:${e}`, "error");
  });
</script>
