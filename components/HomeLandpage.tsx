"use client";
import React from "react";
import Image from "next/image";
import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import { motion } from "motion/react";

const HomeLandpage = () => {
  return (
    <>
      <motion.div
        className="col-span-2 px-6 lg:px-0 lg:pt-4"
        animate={{ scale: 1, x: 0, transition: { duration: 0.6 } }}
        // Fade in when the element enters the viewport:
        whileInView={{ opacity: 1 }}
        layout
        initial={{ opacity: 0.6, x: -120, scale: 0.9 }}
      >
        <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="absolute w-28 left-0 -top-20 hidden lg:block">
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
            <Image
              src="/wave-1.png"
              alt="wave"
              width={100}
              height={100}
              className="w-full"
            />
          </div>
          <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
            Your Image on a{" "}
            <span className="bg-violet-600 px-2 text-white">Custom</span> Phone
            Case
          </h1>
          <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
            Capture your favorite memories with your own,{" "}
            <span className="font-semibold">one-of-one</span> phone case.
            CasePhone allows you to protect your memories, not just your phone
            case.
          </p>
          <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
            <div className="space-y-2">
              <li className="flex items-center gap-1.5 text-left">
                <Check className="h-5 w-5 shrink-0 text-violet-600" />
                High-quality, durable material
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-violet-600" />2 year
                print guarantee
              </li>
              <li className="flex gap-1.5 items-center text-left">
                <Check className="h-5 w-5 shrink-0 text-violet-600" />
                Modern iPhone models supported
              </li>
            </div>
          </ul>

          <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {" "}
            <div className="flex -space-x-4">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                src="/users/user-1.png"
                alt="user image"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                src="/users/user-2.png"
                alt="user image"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                src="/users/user-3.png"
                alt="user image"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                src="/users/user-4.jpg"
                alt="user image"
              />
              <img
                className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                src="/users/user-5.jpg"
                alt="user image"
              />
            </div>
            <div className="flex flex-col justify-between items-center sm:items-start">
              <div className="flex gap-0.5">
                <Star className="h-4 w-4 text-violet-600 fill-violet-600" />
                <Star className="h-4 w-4 text-violet-600 fill-violet-600" />
                <Star className="h-4 w-4 text-violet-600 fill-violet-600" />
                <Star className="h-4 w-4 text-violet-600 fill-violet-600" />
                <Star className="h-4 w-4 text-violet-600 fill-violet-600" />
              </div>

              <p>
                <span className="font-semibold">1.250</span> happy customers
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit"
        className="box"
        // Animate when this value changes:
        animate={{ scale: 1, x: 0, transition: { duration: 0.6 } }}
        // Fade in when the element enters the viewport:
        whileInView={{ opacity: 1 }}
        layout
        initial={{ opacity: 0.6, x: 120, scale: 0.9 }}
      >
        <div className="relative md:max-w-xl">
          {/* <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              /> */}
          <img
            src="/line.png"
            className="absolute w-20 -left-6 -bottom-6 select-none"
          />
          <Phone className="w-64" imgSrc="/testimonials/mountain.png" />
        </div>
      </motion.div>
    </>
  );
};

export default HomeLandpage;
