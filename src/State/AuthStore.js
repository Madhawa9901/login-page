import {create} from "zustand";

export const useAuthStore = create((set) => ({
  flowState: {
    status: "idle", // idle, sending, success, or failure
    credentials: null,
    token: null,
    message: "",
  },
  setFlowState: (newState) => set((state) => ({ flowState: { ...state.flowState, ...newState } })),
}));
