import { db } from "@/app/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignConfigurator from "./DesignConfigurator";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
const page = async ({ searchParams }: PageProps) => {
  const { id } = await searchParams;
  if (!id || typeof id !== "string") {
    notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  const { imageUrl, width, height } = configuration;
  return (
    <div>
      <DesignConfigurator
        configId={configuration.id}
        imageDimensions={{ width, height }}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default page;
