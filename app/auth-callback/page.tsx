"use client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getAuthStatus } from "./action";
import { Loader2 } from "lucide-react";

const Callback = () => {
  const [configId, setConfigId] = useState<null | string>(null);
  const router = useRouter();

  useEffect(() => {
    const storedConfigId = localStorage.getItem("configurationId");
    if (storedConfigId) setConfigId(storedConfigId);
  });
  const { data } = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => await getAuthStatus(),
    retry: true,
    retryDelay: 500,
  });
  if (data?.success) {
    if (configId) {
      localStorage.removeItem("configurationId");
      router.push(`/configure/preview?id=${configId}`);
    } else router.push("/");
  }

  return (
    <div className="flex w-full mt-24 justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="w-8 h-8 animate-spin text-zinc-500" />
        <h3 className="font-semibold text-xl">Logging you in...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default Callback;
