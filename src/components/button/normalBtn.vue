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
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 1.5;
}
.yb-button[size="small"] {
  letter-spacing: 5px;
  border-radius: 5px;
  min-width: 60px;
  padding: 2px 0;
}
.yb-button[size="normal"] {
  letter-spacing: 5px;
  border-radius: 5px;
  min-width: 75px;
  padding: 5px 0;
}
.yb-button[size="large"] {
  letter-spacing: 7px;
  border-radius: 10px;
  line-height: 1.6;
  width: 90px;
  padding: 7px 0;
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
