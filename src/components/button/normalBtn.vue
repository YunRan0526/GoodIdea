<template>
  <div class="yb-button">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$primary: #00aca5;
$error: #c45c66;
$dark: #283c5f;
$info: #faf7d9;
.yb-button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.yb-button[size="mini"] {
  border-radius: 5px;
  width: 100px;
  height: 30px;
}
.yb-button[size="normal"] {
  border-radius: 10px;
  width: 140px;
  height: 40px;
}
.yb-button[size="large"] {
  border-radius: 15px;
  width: 170px;
  height: 50px;
}
.yb-button[type="primary"] {
  background-color: $primary;
  color: #ffffff;
}
.yb-button[type="error"] {
  background-color: $error;
  color: #ffffff;
}
.yb-button[type="dark"] {
  background-color: $dark;
  color: #ffffff;
}
.yb-button[type="info"] {
  background-color: $info;
  color: $dark;
}
</style>
