<template>
  <div class="yb-confirm-overlay" @click="layClick()">
    <transition name="yb-confirm-fade" @after-leave="cancel">
      <div class="yb-confirm" v-show="visible">
        <div
          class="header"
          :class="{
            'scale-header': !showCloseBtn,
          }"
        >
          <div
            class="message"
            :class="{
              fadeout: !showCloseBtn,
            }"
          >
            您收到了一条信息。
          </div>
        </div>
        <div
          class="content"
          :class="{
            'open-message': !showCloseBtn,
          }"
        >
          <article>
            <h4>用户须知</h4>
            <p>你好</p>
            <p>这是我的个人博客</p>
            <p>目前正在开发中</p>
            <p>请稍等</p>
          </article>
        </div>
        <div class="footer">
          <YbButton
            :class="{
              btn: true,
              'to-right': !showCloseBtn,
              ok: true,
            }"
            circle
            @click="okFun"
          ></YbButton>
          <YbButton
            :class="{
              'hidden-button': !showCloseBtn,
              btn: true,
              cancel: true,
            }"
            type="error"
            circle
            @click="closeFun"
          ></YbButton>
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
const showCloseBtn = ref(true);
const cancel = () => {
  emits("cancel");
};
const confirm = () => {
  emits("confirm");
};
const okFun = () => {
  if (open.value) {
    visible.value = false;
    return;
  }
  open.value = true;
  setTimeout(() => {
    showCloseBtn.value = false;
  }, 300);
};
const closeFun = () => {
  visible.value = false;
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
@keyframes hidden-button {
  from {
    transform: translateX(15px) translateY(-50%) scale(1);
  }
  to {
    transform: translateX(15px) translateY(-50%) scale(0);
  }
}
@keyframes to-right {
  from {
    transform: translateX(calc(-100% - 15px)) translateY(-50%);
  }
  to {
    transform: translateX(calc(-50%)) translateY(-50%);
  }
}
@keyframes open-message {
  from {
    height: 3px;
  }
  to {
    height: 300px;
  }
}
@keyframes scale-header {
  from {
    height: 200px;
  }
  to {
    height: 70px;
  }
}
@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.hidden-button {
  animation: hidden-button 0.5s cubic-bezier(0.76, 0.02, 0.25, 1) 0.2s forwards;
}
.to-right {
  animation: to-right 0.5s cubic-bezier(0.76, 0.02, 0.25, 1) 0.2s forwards;
}
.open-message {
  animation: open-message 0.4s ease-out 0s forwards;
}
.scale-header {
  animation: scale-header 0.4s ease-out 0s forwards;
}
.fadeout {
  animation: fadeout 0.3s ease 0s forwards;
}
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
    // box-shadow: 10px 10px 30px #ccc;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .header {
      width: 100%;
      height: 200px;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      .message {
        width: 280px;
        font-weight: 700;
        position: relative;
        height: 40px;
        border-radius: 2px;
        line-height: 40px;
        font-size: 20px;
        color: #444;
        text-align: center;
        background-color: #eee;
        margin: 0;
        padding: 5px 20px;
        &::after {
          position: absolute;
          left: 50%;
          bottom: -15px;
          -webkit-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          transform: translateX(-50%);
          content: "";
          display: block;
          width: 0;
          height: 0;
          border-top: solid 15px #eee;
          border-left: solid 15px transparent;
          border-right: solid 15px transparent;
        }
      }
    }
    .content {
      background-color: #eeeeee;
      height: 3px;
      overflow: hidden;
      article {
        width: 100%;
        padding-top: 40px;
        padding-bottom: 60px;
        h4 {
          font-size: 20px;
          text-align: center;
          margin: 0;
          margin-bottom: 10px;
        }
        p {
          font-size: 14px;
          text-align: center;
          line-height: 40px;
          letter-spacing: 5px;
          margin: 0;
        }
      }
    }
    .footer {
      transition: 0.3s ease;
      position: relative;
      width: 100%;
      height: 70px;
      .btn {
        position: absolute;
        top: 0;
        left: 50%;
      }
      .ok {
        transform: translateX(calc(-100% - 15px)) translateY(-50%);
        &:active {
          box-shadow: 0 0 50px #00aca5;
        }
      }
      .cancel {
        transform: translateX(15px) translateY(-50%);
        &:active {
          box-shadow: 0 0 50px #c45c66;
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
