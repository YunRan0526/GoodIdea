const AdminRoute: Object = {
  path: "/admin",
  name: "Admin",
  component: () => import("/src/components/AdminLayout.vue"),
  redirect: "/admin/my",
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
