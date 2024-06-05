import { FieldError } from "react-hook-form";
import { TextInputProps, TextStyle } from "react-native";

export interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  labelStyle?: TextStyle;
  error?: FieldError | undefined;
}
