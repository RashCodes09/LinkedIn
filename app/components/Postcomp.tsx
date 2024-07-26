import Image from "next/image";
import React from "react";
import { IoMdThumbsUp } from "react-icons/io";
import { MdComment, MdSave, MdShare } from "react-icons/md";

const Postcomp = () => {
  return (
    <div className="border rounded-md mt-3 bg-white border-neutral-300">
      <div className=" px-4 py-4">
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <Image
              src={"/next.svg"}
              alt="#"
              width={1000}
              height={1000}
              className="w-[40px] h-[40px] rounded-full border"
            />
            <div className="leading-[14px]">
              <h1 className="font-semibold text-[14px]">James Gomenti</h1>
              <p className="text-neutral-500 font-light text-[12px]">
                UI/UX Designer
              </p>
              <p className="text-neutral-500 font-light text-[12px]">9h.</p>
            </div>
          </div>
          <h1 className="text-blue-700 font-semibold text-[13px]">Follow</h1>
        </div>

        <h1 className="text-[14px] text-neutral-700 leading-[20px] mt-4">
          Hello Linkedin Fam, <br /> Today I present to you BUBBLE
        </h1>
      </div>
      <Image
        src={"/next.svg"}
        alt="#"
        width={1000}
        height={1000}
        className="w-full h-[300px] mt-5"
      />

      <div className="px-[40px] py-5 flex justify-between border-t mt-2">
        <div className="flex gap-1 items-center cursor-pointer">
          <IoMdThumbsUp className="text-[20px] text-neutral-500" />
          <h1 className="hidden md:block">Like</h1>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <MdComment className="text-neutral-500" />
          <h1 className="hidden md:block">Comment</h1>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <MdShare className="text-neutral-500" />
          <h1 className="hidden md:block">Share</h1>
        </div>
        <div className="flex gap-1 items-center cursor-pointer">
          <MdSave className="text-neutral-500" />{" "}
          <h1 className="hidden md:block">Save</h1>
        </div>
      </div>
    </div>
  );
};

export default Postcomp;
