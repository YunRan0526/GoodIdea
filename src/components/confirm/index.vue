<template>
  <div class="yb-confirm-overlay" @click="layClick()">
    <transition name="yb-confirm-fade" @after-leave="cancel">
      <div class="yb-confirm" v-show="visible">
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
        <div class="footer">
          <div class="btnContainer">
            <YbButton circle class="btn cancel"></YbButton>
            <YbButton type="error" circle class="btn ok"></YbButton>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import YbButton from "/src/components/button/index.vue";
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
  // visible.value = false;
};
onMounted(() => {
  visible.value = true;
});
onUnmounted(() => {});
</script>
<style lang="scss" scoped>
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
      position: relative;
      width: 100%;
      height: 70px;
      .btnContainer {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: row;
        .btn {
          margin: 0 30px;
        }
      }
    }
  }
  .yb-confirm-fade-enter-from,
  .yb-confirm-fade-leave-to {
    opacity: 0;
    transform: translate(0, 50%);
  }
}
</style>
