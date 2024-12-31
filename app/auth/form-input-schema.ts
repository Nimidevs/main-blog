import { z as zod } from "zod";

// Define reusable username and password rules
const usernameValidation = zod
  .string({ required_error: "Username is required" })
  .min(4, "Username must be at least 4 characters")
  .max(20, "Username must be no more than 20 characters");

const passwordValidation = zod
  .string({ required_error: "Password is required" })
  .min(8, "Password must be at least 8 characters")
  .max(20, "Password must be no more than 20 characters")
  .regex(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
    "Password should contain one uppercase, one lowercase, one special char, and one digit"
  );

const firstnameValidation = zod
  .string({ required_error: "Firstname is required" })
  .min(4, "Firstname must be at least 4 characters")
  .max(50, "Lirstname must be no more than 50 characters");

const lastnameValidation = zod
  .string({ required_error: "Lastname is required" })
  .min(4, "Lastname must be at least 4 characters")
  .max(50, "Lastname must be no more than 50 characters");

// Use the validation rules in your schemas
const logInSchema = zod.object({
  username: usernameValidation,
  password: passwordValidation,
});

export const signUpSchema = zod
  .object({
    firstname: firstnameValidation,
    lastname: lastnameValidation,
    username: usernameValidation,
    password: passwordValidation,
    confirmPassword: zod.string({
      required_error: "Confirm password is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Error targets confirmPassword field
  });

export const firstnameSchema = zod.object({
  firstname: firstnameValidation,
});
export const lastnameSchema = zod.object({
  lastname: lastnameValidation,
});
export const usernameSchema = zod.object({
  username: usernameValidation,
});

export const passwordSchema = zod.object({
  password: passwordValidation,
});

export default logInSchema;
