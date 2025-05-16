"use client";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { Mail } from "lucide-react";
import React from "react";

const GoogleAuth = () => {
  return (
    <LoginLink
      authUrlParams={{
        connection_id: process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
      }}
      className="flex items-center justify-center gap-1.5 text-sm w-full shadow-sm py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-slate-800 bg-gray-200 hover:bg-gray-100 transition  focus:outline-none"
    >
      <span className=" text-slate-800">
        <Mail className="" />
      </span>
      Continue with Google
    </LoginLink>
  );
};

export default GoogleAuth;
