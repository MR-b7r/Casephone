import { db } from "@/app/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignPreview from "./DesignPreview";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
const page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;
  if (!id || typeof id !== "string") {
    notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  return <DesignPreview configuration={configuration} />;
};

export default page;
