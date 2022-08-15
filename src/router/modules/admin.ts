const AdminRoute: Object = {
  path: "/admin",
  name: "Admin",
  component: () => import("/src/layout/AdminLayout.vue"),
  children: [
    {
      path: "/admin/my",
      meta: {
        title: "我的后台",
      },
      component: () => import("/src/pages/Admin/index.vue"),
    },
  ],
};
export default AdminRoute;
