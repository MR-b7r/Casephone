import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const LoginModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogContent className="absolute z-[999]">
          <div className="relative mx-auto w-24 h-24 mb-2">
            <Image
              src="/wave-1.png"
              alt="wave image"
              className="object-contain"
              fill
            />
          </div>
          <DialogHeader>
            <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
              Log in to continue
            </DialogTitle>
            <DialogDescription className="text-base text-center py-2">
              <span className="font-medium text-zinc-900">
                Your configuration was saved!
              </span>{" "}
              Please login or create an account to complete your purchase.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
            <Link
              href="/sign-in"
              className={buttonVariants({ variant: "outline" })}
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className={buttonVariants({ variant: "default" })}
            >
              Sign up
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginModal;
