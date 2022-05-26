const CollectionsRoute: Object = {
  path: "/collections",
  name: "Collections",
  component: () => import("/src/components/CollectionLayout.vue"),
  children: [
    {
      path: "/collections/my",
      meta: {
        title: "我的作品",
      },
      component: () => import("/src/pages/Collection/index.vue"),
    },
  ],
  redirect: "/collections/my",
};
export default CollectionsRoute;
