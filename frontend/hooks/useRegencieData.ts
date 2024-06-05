import { regencies } from "@/constants";
import { create } from "zustand";

type Regencies = {
  type: string;
  regency: string;
  province_code: number;
  code: number;
}[];

type Store = {
  regencies: Regencies;
  setRegenciesData: (regencies: Regencies) => void;
};

export const useRegencieData = create<Store>()((set) => ({
  regencies: regencies,
  setRegenciesData: (regencies: Regencies) => set(() => ({ regencies })),
}));
