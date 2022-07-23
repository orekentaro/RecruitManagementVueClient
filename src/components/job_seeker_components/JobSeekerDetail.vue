<template #defalt="props">
  <div>名前</div>
  <div>{{ data?.name }}</div>
</template>

<script lang="ts" setup>
import { JobSeeker } from "../../type";

interface Props {
  data: JobSeeker | undefined;
}

const props = defineProps<Props>();
</script>
