"use client";
import React, { useEffect } from "react";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import { motion, useAnimate, useAnimation, useInView } from "motion/react";

const customerReviews = [
  {
    text: "The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and",
    highlightedText: "the image is super clear",
    continuationText:
      "on the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it.",
    user: {
      name: "Jonathan",
      avatar: "/users/user-1.png",
    },
  },
  {
    text: "I was skeptical at first because of the price, but this case really exceeded my expectations. After using it for over a month,",
    highlightedText: "it still looks brand new",
    continuationText:
      "and I’ve dropped my phone a few times already. Definitely worth the investment.",
    user: {
      name: "Samantha",
      avatar: "/users/user-2.png",
    },
  },
  // {
  //   text: "Great fit and amazing quality. I've used other brands before, but none of them lasted as long. With this one,",
  //   highlightedText: "the edges are well reinforced",
  //   continuationText:
  //     "which gives me peace of mind knowing my phone is protected from minor drops.",
  //   user: {
  //     name: "Michael",
  //     avatar: "/users/user-3.png",
  //   },
  // },
];
const CstReviews = () => {
  const [scope] = useAnimate();
  const controls = useAnimation();
  const isInView = useInView(scope, {
    once: true,
    amount: 0.4,
    margin: "100px 0px 0px 0px",
  });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        margin: "0px",
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [isInView]);
  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0.5, margin: "100px 0px 0px 0px" }}
      animate={controls}
      className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16 "
    >
      {customerReviews.map((review, index) => (
        <div
          key={index}
          className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 "
        >
          <div className="flex gap-0.5 mb-2">
            <Star className="h-5 w-5 text-violet-600 fill-violet-600" />
            <Star className="h-5 w-5 text-violet-600 fill-violet-600" />
            <Star className="h-5 w-5 text-violet-600 fill-violet-600" />
            <Star className="h-5 w-5 text-violet-600 fill-violet-600" />
            <Star className="h-5 w-5 text-violet-600 fill-violet-600" />
          </div>
          <div className="text-lg leading-8">
            <p>
              {review.text}{" "}
              <span className="p-0.5 bg-slate-800 text-white">
                {review.highlightedText}
              </span>{" "}
              {review.continuationText}
            </p>
          </div>
          <div className="flex gap-4 mt-2">
            <Image
              width={48}
              height={48}
              className="rounded-full h-12 w-12 object-cover"
              src={review.user.avatar}
              alt="user"
            />
            <div className="flex flex-col">
              <p className="font-semibold">{review.user.name}</p>
              <div className="flex gap-1.5 items-center text-zinc-600">
                <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                <p className="text-sm">Verified Purchase</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
export default CstReviews;
