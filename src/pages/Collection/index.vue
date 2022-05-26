<template>
  <div>
    <h1>collections</h1>
    <div>
      <span @click="confirm"> click</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import $confirm from "/src/components/$confirm/$confirm.js";
const confirm = () => {
  $confirm("xxxxxxxxx");
};
</script>

<style lang="scss"></style>
