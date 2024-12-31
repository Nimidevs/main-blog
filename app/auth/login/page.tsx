"use client";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import { usernameSchema, passwordSchema } from "../form-input-schema";
import { formatError } from "../format-errors";
import { logUserIn } from "../form-actions";

const Login = () => {
  const router = useRouter()
  const [formState, formAction, isPending] = useActionState(logUserIn, {});

  const [errorState, setErrorState] = useState(formState);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setErrorState(formState);
    if (formState.success) {
      localStorage.setItem("user", JSON.stringify(formState.user));
      localStorage.setItem("token", JSON.stringify(formState.token));
      router.push("/")
    }
  }, [formState]);

  const validateUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    const usernameData = {
      username: newUsername,
    };
    const result = usernameSchema.safeParse(usernameData);
    let error = {};
    if (!result.success) {
      error = {
        errors: formatError(result.error),
      };
    }
    setErrorState(error);
  };

  const validatePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const passwordData = {
      password: newPassword,
    };
    const result = passwordSchema.safeParse(passwordData);
    let error = {};
    if (!result.success) {
      error = {
        errors: formatError(result.error),
      };
    }
    setErrorState(error);
  };
  return (
    <div className="flex justify-center items-center flex-col min-h-full">
      <div>
        <h1 className="text-2xl font-semibold">Hi There 👋</h1>
        <span className="text-red-500 font-normal text-xs">
          {errorState?.errors?.formErrors?.map((error, index) => (
            <div key={`form-error-${index}`}>{error}</div>
          ))}
        </span>
      </div>
      <form action={formAction} className="flex flex-col gap-4 w-[60%]">
        <div className="flex flex-col">
          <label htmlFor="" className="flex flex-col gap-2">
            Username
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => validateUsername(e)}
              className="border border-[#929292] text-[#272626] outline-none rounded-[12px] px-8 py-2 text-base"
            />
            <span className="text-red-500 font-normal text-xs">
              {errorState?.errors?.fieldErrors?.username}
            </span>
          </label>
          <label htmlFor="" className="flex flex-col gap-2">
            Password
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*********"
              value={password}
              onChange={(e) => validatePassword(e)}
              className="border border-[#929292] text-[#272626] outline-none rounded-[12px] px-8 py-2 text-base"
            />
            <span className="text-red-500 font-normal text-xs">
              {errorState?.errors?.fieldErrors?.password}
            </span>
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <button
            className="bg-thickgreen text-white rounded-xl py-4"
            type="submit"
          >
            {isPending ? "Loading..." : "Login"}
          </button>

          <button
            className="flex items-center gap-1 border-[#929292] border justify-center rounded-xl py-3"
            type="button"
          >
            <FcGoogle className="" />
            Google
          </button>
        </div>

        <div className="flex items-center justify-center">
          Dont have an account?{" "}
          <Link href="/auth/signup" className="text-thickgreen">
            {" "}
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
