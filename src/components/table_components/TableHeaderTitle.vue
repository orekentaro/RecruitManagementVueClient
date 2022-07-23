<template>
  <div>
    <h1 class="font-mono p-4">{{ title }}</h1>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  title: string;
}
withDefaults(defineProps<Props>(), {
  title: "",
});
</script>
