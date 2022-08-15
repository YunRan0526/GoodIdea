const CollectionsRoute: Object = {
  path: "/collection",
  name: "Collection",
  component: () => import("/src/layout/CollectionLayout.vue"),
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
