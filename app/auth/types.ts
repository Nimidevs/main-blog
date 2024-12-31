import { User } from "@/types/user.type";

export type ActionResult = {
  success?: boolean;
  user?: User;
  errors?: ActionErrors;
  token?: string;
};

export type ActionErrors = {
  fieldErrors?: FieldErrors;
  formErrors?: string[];
};

export type FieldErrors = {
  [x: string]: string | undefined;
  [x: number]: string | undefined;
  [x: symbol]: string | undefined;
};
