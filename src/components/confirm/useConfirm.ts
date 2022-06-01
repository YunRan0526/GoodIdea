import Confirm from "./index.vue"
import { render, createVNode } from "vue";
let callBackObj

const $confirm = (str) => {
    const wraper = document.createElement('div');
    const props = {
        onCancel: () => {
            callBackObj = null
            render(null, wraper)
        },
        onConfirm: () => {
            callBackObj.resolve()
            render(null, wraper)
        },
        content: str
    }
    //createVNode 即 h() 将参数渲染成Vnode
    const vm = createVNode(Confirm, props);
    //将vnode挂载到wraper
    render(vm, wraper);
    document.body.appendChild(wraper.firstElementChild);
    return new Promise((resolve, reject) => {
        callBackObj = { resolve, reject }
    })
}

export default $confirm