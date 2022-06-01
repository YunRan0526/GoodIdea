<template>
  <div class="yb-button"></div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$primary: #00aca5;
$error: #c45c66;
$dark: #283c5f;
$info: #faf7d9;
.yb-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-position: center;
  background-size: auto 50%;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.4s ease 0s;
  &:hover {
    transform: scale(1.15);
  }
}
.yb-button[size="mini"] {
  width: 55px;
  height: 55px;
}
.yb-button[size="normal"] {
  width: 65px;
  height: 65px;
}
.yb-button[size="large"] {
  width: 75px;
  height: 75px;
}
.yb-button[type="primary"] {
  background-color: $primary;
  color: #ffffff;
  box-shadow: 0 0 10px $primary;
  background-image: url("/src/assets/confirm/cancel.svg");
  &:hover {
    box-shadow: 0 0 40px $primary;
  }
}
.yb-button[type="error"] {
  background-color: $error;
  color: #ffffff;
  box-shadow: 0 0 10px $error;
  background-size: auto 42%;
  background-image: url("/src/assets/confirm/ok.svg");
  &:hover {
    box-shadow: 0 0 40px $error;
  }
}
.yb-button[type="dark"] {
  background-color: $dark;
  color: #ffffff;
  box-shadow: 0 0 10px $dark;
  &:hover {
    box-shadow: 0 0 40px $dark;
  }
}
.yb-button[type="info"] {
  background-color: $info;
  color: $dark;
  box-shadow: 0 0 10px $info;
  &:hover {
    box-shadow: 0 0 40px $info;
  }
}
</style>
