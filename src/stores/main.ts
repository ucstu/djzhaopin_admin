import type {
  AccountInformation, DirectionTags, PositionTypes
} from "@/services/types";
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    jsonWebToken: null as unknown as string,
    accountInformation: null as unknown as AccountInformation,
    positionTypes: null as unknown as PositionTypes,
    directionTags: null as unknown as DirectionTags,
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        key: "pinia-main",
      },
    ],
  },
});
