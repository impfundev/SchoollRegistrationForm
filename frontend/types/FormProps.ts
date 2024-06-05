import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { FormRegister } from "@/types/FormRegister";

export type FormProps = {
  setValue: UseFormSetValue<FormRegister>;
  getValues: UseFormGetValues<FormRegister>;
};
