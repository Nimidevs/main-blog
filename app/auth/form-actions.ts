"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import logInSchema, { signUpSchema } from "./form-input-schema";
import { formatError, getErrorsForForm } from "./format-errors";
import { ActionResult } from "./types";
import { redirect } from "next/navigation";

export async function signUserUp(
  prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const data = Object.fromEntries(formData.entries()) as Record<string, string>;

  const formDataValidationresult = await signUpSchema.safeParseAsync(data);

  if (!formDataValidationresult.success) {
    return {
      errors: formatError(formDataValidationresult.error),
    };
  }

  const { firstname, lastname, username, password } = data;
  const body = {
    firstname,
    lastname,
    username,
    password,
  };
  console.log(body);
  let signUpResponse;
  try {
    const response = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(body),
    });
    signUpResponse = await response.json();
    if (!signUpResponse.success) {
      return {
        errors: getErrorsForForm("Sign Up Failed, Try again later"),
      };
    }
  } catch (error) {
    console.log(error);
    return {
      errors: getErrorsForForm("An error ocured"),
    };
  }

  const path = "/auth/login";
  revalidatePath(path);
  redirect(path);
}

export async function logUserIn(
  prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const data = Object.fromEntries(formData.entries()) as Record<string, string>;

  const formDataValidationresult = await logInSchema.safeParseAsync(data);

  if (!formDataValidationresult.success) {
    return {
      errors: formatError(formDataValidationresult.error),
    };
  }

  const { username, password } = data;

  const body = {
    username,
    password,
  };

  let logInResponse;
  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(body),
    });
    console.log(response.headers)
    logInResponse = await response.json();
    if (!logInResponse.success) {
      return {
        errors: getErrorsForForm("Sign Up Failed, Try again later"),
      };
    }
    if(logInResponse.token){
      const cookieStore = await cookies()
      cookieStore.set({
        name: 'token',
        value: logInResponse.token.split(' ')[1],
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
      })
    }
    return {
      success: true,
      user: logInResponse.user,
      token: logInResponse.token,
    };
  } catch (error) {
    console.log(error);
    return {
      errors: getErrorsForForm("An error ocured"),
    };
  }
}
