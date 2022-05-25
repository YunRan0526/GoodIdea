const CollectionsRoute: Object = {
  path: "/collections",
  name: "Collections",
  component: () => import("/src/pages/collections/collections.vue"),
  meta: {
    title: "我的作品",
  },
};
export default CollectionsRoute;
