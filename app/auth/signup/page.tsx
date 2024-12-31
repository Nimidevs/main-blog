"use client";

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signUserUp } from "../form-actions";
import { ChangeEvent, useActionState, useEffect, useState } from "react";
import { formatError } from "../format-errors";
import {
  firstnameSchema,
  lastnameSchema,
  passwordSchema,
  usernameSchema,
} from "../form-input-schema";
import { ActionResult } from "../types";

const Signup = () => {
  const [formState, formAction, isPending] = useActionState(signUserUp, {});

  const [errorState, setErrorState] = useState(formState);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  useEffect(() => {
    setErrorState(formState);
  }, [formState]);

  const validatefirstname = (e: ChangeEvent<HTMLInputElement>) => {
    const newFirstname = e.target.value;
    setFirstname(newFirstname);
    const firstnameData = {
      firstname: newFirstname,
    };
    const result = firstnameSchema.safeParse(firstnameData);
    let error = {};
    if (!result.success) {
      error = {
        errors: formatError(result.error),
      };
    }
    setErrorState(error);
  };
  const validateLastname = (e: ChangeEvent<HTMLInputElement>) => {
    const newLastname = e.target.value;
    setLastname(newLastname);
    const lastnameData = {
      lastname: newLastname,
    };
    const result = lastnameSchema.safeParse(lastnameData);
    let error = {};
    if (!result.success) {
      error = {
        errors: formatError(result.error),
      };
    }
    setErrorState(error);
  };

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

  const validateConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    const result: ActionResult = {}; // Initialize ActionResult object

    // Check if passwords match
    if (confirmPassword !== password) {
      // Initialize errors object if it doesn't exist
      result.errors = result.errors || {};

      // Add the error message for the 'confirmPassword' field
      result.errors.fieldErrors = result.errors.fieldErrors || {};
      result.errors.fieldErrors["confirmPassword"] = "Passwords do not match";
    }
    setErrorState(result);
  };
  return (
    <div className="flex justify-center items-center flex-col min-h-full">
      <div>
        <h1 className="mb-10 text-2xl font-semibold">Create Your Account 🚀</h1>
        <span className="text-red-500 font-normal text-xs">
          {errorState?.errors?.formErrors?.map((error, index) => (
            <div key={`form-error-${index}`}>{error}</div>
          ))}
        </span>
      </div>
      <form action={formAction} className="flex flex-col gap-3 w-[60%]">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <label className="flex flex-col gap-2">
              Firstname
              <input
                type="text"
                name="firstname"
                placeholder="Enter your firstname"
                value={firstname}
                onChange={(e) => validatefirstname(e)}
                className="border border-[#929292] text-[#272626] outline-none rounded-[12px] px-2 py-2 text-base"
              />
              <span className="text-red-500 font-normal text-xs">
                {errorState?.errors?.fieldErrors?.firstname}
              </span>
            </label>
            <label className="flex flex-col gap-2">
              Lastname
              <input
                type="text"
                name="lastname"
                placeholder="Enter your lastname"
                value={lastname}
                onChange={(e) => validateLastname(e)}
                className="border border-[#929292] text-[#272626] outline-none rounded-[12px] px-2 py-2 text-base"
              />
              <span className="text-red-500 font-normal text-xs">
                {errorState?.errors?.fieldErrors?.lastname}
              </span>
            </label>
          </div>
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
          <div className="flex justify-between">
            <label htmlFor="" className="flex flex-col gap-2">
              Password
              <input
                type="password"
                id="password"
                name="password"
                placeholder="*********"
                value={password}
                onChange={(e) => validatePassword(e)}
                className="border border-[#929292] text-[#272626] outline-none rounded-[12px] px-2 py-2 text-base"
              />
              <span className="text-red-500 font-normal text-xs">
                {errorState?.errors?.fieldErrors?.password}
              </span>
            </label>
            <label htmlFor="" className="flex flex-col gap-2">
              Confirm Password
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => validateConfirmPassword(e)}
                className="border border-[#929292] text-[#272626] outline-none rounded-[12px] px-2 py-2 text-base"
              />
              <span className="text-red-500 font-normal text-xs">
                {errorState?.errors?.fieldErrors?.confirmPassword}
              </span>
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button
            className="bg-thickgreen text-white rounded-xl py-4"
            type="submit"
          >
            {isPending ? "Loading..." : "Sign Up"}
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
          Already have an account?
          <Link href="/auth/login" className="text-thickgreen ml-1">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
