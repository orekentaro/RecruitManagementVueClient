<template>
  <div>進行中求職者</div>
</template>
<script setup lang="ts">
import axios from "axios";
import Cookies from "js-cookie";
import { store } from "../store";
const click = () => {
  console.log(Cookies.get("login"));
  axios.get("/api").then((data) => console.log(data));
};
</script>
