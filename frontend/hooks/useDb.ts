import { FormRegister } from "@/types/FormRegister";
import { create } from "zustand";

type Store = {
  loading: boolean;
  storeToDatabase: (data: FormRegister) => void;
};

export const useDb = create<Store>()((set) => ({
  loading: false,
  storeToDatabase: async (data: FormRegister) => {
    set({ loading: true });
    // const apiUrl = "http://localhost:5000/api/v1/register";
    // const options = {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // };

    try {
      // const res = await fetch(apiUrl, options);
      // const data = await res.json();
      set({ loading: false });

      return data;
    } catch (error) {
      console.error(error);
      // return {
      //   message: "Store data to database failed, try again latter",
      // };
    }
  },
}));
