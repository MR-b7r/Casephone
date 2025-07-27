import React, { Suspense } from "react";
import ThankYou from "./ThankYou";
import { LoaderIcon } from "lucide-react";

const page = () => {
  return (
    <Suspense fallback={<LoaderIcon />}>
      <ThankYou />
    </Suspense>
  );
};

export default page;
