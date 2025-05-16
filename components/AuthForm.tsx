"use client";
import React from "react";
import { Eye, Mail, User } from "lucide-react";
import Link from "next/link";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
const AuthForm = ({ type }: { type: string }) => {
  return (
    <div className="min-h-screen flex fle-col items-center justify-center">
      <div className="py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full">
          <div className="border border-slate-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-6">
              <div className="mb-12">
                <h3 className="text-slate-900 text-3xl font-semibold">
                  {type == "sign-in" ? "Sign in" : "Create an account"}
                </h3>
              </div>

              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="Email"
                    type="text"
                    required
                    className="w-full text-sm text-slate-800 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-violet-600"
                    placeholder="Enter you email"
                  />
                  <User className="w-[18px] h-[18px] absolute right-4" />
                </div>
              </div>
              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-sm text-slate-800 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-violet-600"
                    placeholder="Enter password"
                  />
                  <Eye className="w-[18px] h-[18px] absolute right-4 cursor-pointer" />
                </div>
              </div>

              {type == "sign-in" && (
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="text-sm">
                    <a
                      href="jajvascript:void(0);"
                      className="text-violet-600 hover:underline font-medium"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
              )}

              <div className="!mt-4">
                <button
                  type="button"
                  className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-violet-600 hover:bg-violet-700 focus:outline-none"
                >
                  {type == "sign-in" ? "Sign-in" : "Create an account"}
                </button>
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                  <p className="mx-4 mb-0 text-center font-semibold text-slate-600 dark:text-neutral-200">
                    OR
                  </p>
                </div>
                <LoginLink
                  authUrlParams={{
                    connection_id:
                      process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
                  }}
                  className="flex items-center justify-center gap-1.5 text-sm w-full shadow-sm py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-slate-800 bg-gray-200 hover:bg-gray-100 transition  focus:outline-none"
                >
                  <span className=" text-slate-800">
                    <Mail className="" />
                  </span>
                  Continue with Google
                </LoginLink>
                <p className="text-sm !mt-6 text-center text-slate-500">
                  {type == "sign-in"
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  {type == "sign-in" ? (
                    <Link
                      href="/sign-up"
                      className="text-violet-600 font-medium hover:underline ml-1 whitespace-nowrap"
                    >
                      Register here
                    </Link>
                  ) : (
                    <Link
                      href="/sign-in"
                      className="text-violet-600 font-medium hover:underline ml-1 whitespace-nowrap"
                    >
                      Sign in
                    </Link>
                  )}
                </p>
              </div>
            </form>
          </div>

          <div className="max-md:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full aspect-[71/50] max-md:w-4/5 mx-auto block object-cover"
              alt="login img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
