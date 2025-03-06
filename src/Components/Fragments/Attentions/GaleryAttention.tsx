"use client";

import React from "react";
// import useBreakpoint from "@/Hooks/useBreakpoint";
import { Images } from "lucide-react";
import Link from "next/link";

const GaleryAttention = () => {
  // const breakpoint = useBreakpoint();
  return (
    <div>
      <div className="flex flex-col gap-y-5 h-full justify-center">
        <h1 className="text-5xl font-medium">Want to see us more?</h1>
        <div className="flex gap-4">
          <Link href={"/gallery"}>
            <Images  size={40} />
          </Link>
          <h2 className="text-3xl font-medium">Checkout our galery!</h2>
        </div>
        <div className="w-200">
          <p className="text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus, accusamus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Autem, quam.
          </p>
        </div>
        <Link href={"/gallery"} className="w-fit">
          <button className="hover:bg-white text-white bg-[#143D60] duration-150 ease-in hover:text-[#143D60] border-2 hover:border-[#143D60] p-3 text-lg font-base rounded-full cursor-pointer">
            Take a peek
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GaleryAttention;
