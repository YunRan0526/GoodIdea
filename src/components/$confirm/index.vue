<template>
  <div class="yb-confirm-overlay" @click="layClick()">
    <transition name="yb-confirm-fade" @after-leave="cancel">
      <div class="yb-confirm" @click.stop="contentClick" v-show="visible">
        <div
          class="header"
          :style="{
            height: `${open ? 70 : 200}px`,
          }"
        ></div>
        <div
          class="content"
          :style="{
            height: `${open ? 300 : 3}px`,
          }"
        >
          <template v-show="open">
            {{ content }}
          </template>
        </div>
        <div class="footer"></div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { onMounted, ref, onUnmounted } from "vue";
const props = defineProps({
  content: {
    default: () => {
      return "";
    },
  },
});
const emits = defineEmits(["cancel", "confirm"]);
let visible = ref(false);
const open = ref(false);
const cancel = () => {
  emits("cancel");
};
const confirm = () => {
  emits("confirm");
};
const layClick = () => {
  visible.value = false;
};
onMounted(() => {
  visible.value = true;
});
onUnmounted(() => {});
</script>
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
.yb-confirm-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .yb-confirm {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 500px;
    margin-top: -30vh;
    border-radius: 4px;
    transition: 0.3s ease-out;
    background-color: #fff;
    box-shadow: 10px 10px 30px #ccc;
    .header {
      width: 100%;
      height: 70px;
    }
    .content {
      background-color: #eeeeee;
    }
    .footer {
      width: 100%;
      height: 70px;
    }
  }
  .yb-confirm-fade-enter-from,
  .yb-confirm-fade-leave-to {
    opacity: 0;
    transform: translate(0, 50%);
  }
}
</style>
