import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import { usePermissionStore } from "@/store/modules/permission";
// import.meta.globEager 是vite提供的函数可以引入指定目录里面的所有指定类型文件返回数组
const modules = import.meta.globEager("./modules/**/*.ts");
const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});
routeModuleList.forEach((item) => {
  if (item.children && item.children.length) {
    item.redirect = item.children[0].path;
  }
});
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Base",
    redirect: "/home",
  },
  ...routeModuleList,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const permissionStore = usePermissionStore();
  const validation =
    to.path === "/" ||
    permissionStore.whiteList.some((path) => {
      return to.path.startsWith(path);
    });
  if (validation) {
    next();
  }
});
export default router;
