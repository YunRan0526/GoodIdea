<template>
  <div>
    <div>
      <YbButton @click="useConfirm">测试</YbButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import YbButton from "/src/components/button/index.vue";
import useConfirm from "/src/components/confirm/useConfirm.ts";
</script>

<style lang="scss"></style>
