import { Configuration } from "@/lib/generated/prisma";
import React from "react";

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
    >
      DesignPreview
    </div>
  );
};

export default DesignPreview;
