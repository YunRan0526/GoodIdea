<script setup lang="ts">
const router = useRouter();
const routes = router.options.routes.splice(1, 4);
</script>

<template>
  <div class="ybw">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
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
}
</style>
