const homeRoute: Object = {
  path: "/home",
  name: "Home",
  component: () => import("/src/layout/HomeLayout.vue"),
  children: [
    {
      path: "/home/main",
      meta: {
        title: "我的作品",
      },
      component: () => import("/src/pages/home/index.vue"),
    },
  ],
};
export default homeRoute;
