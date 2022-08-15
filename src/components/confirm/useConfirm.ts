import Confirm from "./index.vue";
import { render, createVNode } from "vue";
type CallBackObj = {
  resolve: Function;
  reject: Function;
};
let callBackObj: CallBackObj | null;

export const useConfirm = (str: string) => {
  const wraper = document.createElement("div");
  const props = {
    onCancel: () => {
      callBackObj = null;
      render(null, wraper);
    },
    onConfirm: () => {
      (callBackObj as CallBackObj).resolve();
      render(null, wraper);
    },
    content: str,
  };
  //createVNode 即 h() 将参数渲染成Vnode
  const vm = createVNode(Confirm, props);
  //将vnode挂载到wraper
  render(vm, wraper);
  document.body.appendChild(wraper.firstElementChild as HTMLDivElement);
  return new Promise((resolve, reject) => {
    callBackObj = { resolve, reject };
  });
};
