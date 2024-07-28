import Image from "next/image";
import React from "react";
import { IoMdThumbsUp } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state: any) => state.userState);
  //   console.log("post:", user);
  return (
    <div>
      <div className="flex gap-3 items-center">
        {user?.data?.avatar ? (
          <Image
            src={user?.data?.avatar}
            alt="#"
            width={1000}
            height={1000}
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        ) : (
          <MdPerson className="text-[40px]" />
        )}

        <div className="leading-[14px] mt-3">
          <h1 className="font-semibold text-[14px]">{user?.data?.name}</h1>
          <p className="text-neutral-500 font-light text-[12px]">
            {user?.data?.profession}
          </p>
          <p className="text-neutral-500 font-light text-[12px]">9h.</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
