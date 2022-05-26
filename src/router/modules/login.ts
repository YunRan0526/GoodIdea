const LoginRoute: Object = {
  path: "/login",
  name: "Login",
  component: () => import("/src/components/Loginlayout.vue"),
  children: [
    {
      path: "/login/my",
      meta: {
        title: "登录",
      },
      component: () => import("/src/pages/Login/index.vue"),
    },
  ],
  redirect: "/Login/my",
};
export default LoginRoute;
