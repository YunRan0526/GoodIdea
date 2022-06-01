<template>
  <NormalBtn
    :type="type"
    :size="size"
    :icon="icon"
    :circle="circle"
    v-if="!circle"
  >
    <slot></slot>
  </NormalBtn>
  <CircleBtn
    :type="type"
    :size="size"
    :icon="true"
    :circle="circle"
    v-else
  ></CircleBtn>
</template>

<script setup lang="ts">
import CircleBtn from "./circleBtn.vue";
import NormalBtn from "./normalBtn.vue";
const attrs = useAttrs();
type patchMap = {
  [key: string]: string;
};
const typeMap: patchMap = reactive({
  primary: "#FFFFFF",
  error: "#FFFFFF",
  dark: "#FFFFFF",
  info: "#283c5f",
});
const sizeMap: patchMap = reactive({
  mini: "",
  normal: "",
  large: "",
});
// primay error info
const type = computed((): string => {
  const str = (attrs.type || "") as string;
  const keyList: Array<String> = Object.keys(typeMap);
  const state = keyList.includes(str);
  return state ? str : "primary";
});
// mini normal large
const size = computed((): string => {
  const str = (attrs.size || "") as string;
  const keyList: Array<String> = Object.keys(sizeMap);
  const state = keyList.includes(str);
  return state ? str : "normal";
});
const icon = computed((): boolean => {
  const state = attrs.hasOwnProperty("icon") ? true : false;
  return state;
});
const circle = computed((): boolean => {
  const state = attrs.hasOwnProperty("circle") ? true : false;
  return state;
});
</script>

<style lang="scss" scoped></style>
