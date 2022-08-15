<script setup lang="ts">
const router = useRouter();
const routes = router.options.routes.splice(1, 4);
</script>

<template>
  <div class="ybw">
    <router-view></router-view>
    <span id="beian">鄂ICP备2021000948号-2</span>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  user-select: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ybw {
  width: 100%;
  height: 100vh;
  contain: paint;
}
#beian {
  font-size: 12px;
  position: absolute;
  color: white;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
