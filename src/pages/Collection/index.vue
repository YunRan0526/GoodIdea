<template>
  <div>
    <h1>collections</h1>
    <div style="">
      <YbButton circle @click="confirm"> click</YbButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import useConfirm from "/src/components/confirm/useConfirm.js";
import YbButton from "/src/components/button/index.vue";
const confirm = () => {
  useConfirm("xxxxxxxxx");
};
</script>

<style lang="scss"></style>
