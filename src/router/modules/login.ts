const LoginRoute: Object = {
  path: "/login",
  name: "Login",
  component: () => import("/src/pages/Login/index.vue"),
};
export default LoginRoute;
