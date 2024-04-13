import { FieldValues } from "react-hook-form";

export interface SignUpFormData extends FieldValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  error: string;
}
