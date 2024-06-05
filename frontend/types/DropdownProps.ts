import { FieldError, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { FormRegister } from "@/types/FormRegister";
import { PressableProps, TextStyle } from "react-native";

export interface DropdownProps extends PressableProps {
  name:
    | "tipe"
    | "nama"
    | "alamat"
    | "kode_pos"
    | "provinsi"
    | "kota"
    | "telepon"
    | "email"
    | "facebook"
    | "jumlah_siswa";
  label?: string;
  labelStyle?: TextStyle;
  error?: FieldError | undefined;
  data: {
    value: string;
    additionalValue?: any;
  }[];
  placeholder?: string;
  setValue: UseFormSetValue<FormRegister>;
  getValues: UseFormGetValues<FormRegister>;
}
