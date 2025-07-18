import React from "react";
import AuthForm from "@/components/AuthForm";

const SignUp = () => {
  return (
    <section className="flex-center size-full max-sm:px-6 w-full">
      <AuthForm type={"sign-up"} />
    </section>
  );
};

export default SignUp;
