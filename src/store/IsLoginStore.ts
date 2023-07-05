import { create } from "zustand";
import { createJSONStorage, persist, devtools } from "zustand/middleware";

interface IsLoginStore {
  isLogin: boolean;
  setIsLogin: (val: boolean) => void;
}
export const useIsLoginStore = create<IsLoginStore>()(
  persist(
    devtools((set) => ({
      isLogin: false,
      setIsLogin: (val) => set(() => ({ isLogin: val })),
    })),
    {
      name: "isLogin",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
