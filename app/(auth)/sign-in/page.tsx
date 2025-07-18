import React from "react";
import AuthForm from "@/components/AuthForm";

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6 w-full">
      <AuthForm type={"sign-in"} />
    </section>
  );
};

export default SignIn;
