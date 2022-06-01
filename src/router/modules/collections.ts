const CollectionsRoute: Object = {
  path: "/collections",
  name: "Collections",
  component: () => import("/src/components/CollectionLayout.vue"),
  redirect: "/collections/my",
  children: [
    {
      path: "/collections/my",
      meta: {
        title: "我的作品",
      },
      component: () => import("/src/pages/Collection/index.vue"),
    },
  ],
};
export default CollectionsRoute;
