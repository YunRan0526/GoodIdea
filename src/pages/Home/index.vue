<template>
  <div class="star">
    <MoveStar></MoveStar>
  </div>
</template>

<script setup lang="ts">
import { useConfirm } from "@/components/confirm/useConfirm";
import MoveStar from "/src/components/MoveStar.vue";
onMounted(() => {
  useConfirm("123");
});
</script>

<style lang="scss" scoped>
.star {
  background-color: #364253;
}
</style>
