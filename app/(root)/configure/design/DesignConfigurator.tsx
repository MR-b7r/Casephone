"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface DesignConfiguratorProps {
  configId: string;
  imageUrl: string;
  imageDimensions: {
    width: number;
    height: number;
  };
}
const DesignConfigurator = (
  configId,
  imageUrl,
  imageDimensions: DesignConfiguratorProps
) => {
  const router = useRouter();

  return <div>DesignConfigurator</div>;
};

export default DesignConfigurator;
