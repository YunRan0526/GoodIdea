/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "loadsh/isEqual" {
  const content: any;
  export default content;
}

declare module "loadsh/shuffle" {
  const content: any;
  export default content;
}
declare module "*.ts" {
  const content: any;
  export default content;
}
