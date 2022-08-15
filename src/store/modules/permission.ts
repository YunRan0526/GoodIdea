import { defineStore } from "pinia";
import { whiteList } from "@/router/whiteList";
export const usePermissionStore = defineStore({
  id: "permission", // id必填，且需要唯一
  state: () => {
    return {
      whiteList: [...whiteList] as Array<string>,
    };
  },
  getters: {
    getWhiteList(): Array<string> {
      return this.whiteList;
    },
  },
  actions: {
    updateWhiteList(list: Array<string>) {
      this.whiteList = [...list];
    },
  },
});
