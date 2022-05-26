const AdminRoute: Object = {
  path: "/admin",
  name: "Admin",
  component: () => import("/src/components/AdminLayout.vue"),
  children: [
    {
      path: "/admin/my",
      meta: {
        title: "我的后台",
      },
      component: () => import("/src/pages/Admin/index.vue"),
    },
  ],
  redirect: "/admin/my",
};
export default AdminRoute;
