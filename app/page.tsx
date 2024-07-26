"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { signOutUser } from "./global/slice";
// import Header from "./Header";
// import Content from "./content";
// import PostCompnent from "./PostCompnent";
import Link from "next/link";
// import Post from "./Post";
import { MdCamera } from "react-icons/md";
import { CameraIcon } from "lucide-react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Postcomp from "./components/Postcomp";
import Searchcomp from "./components/Searchcomp";
import Parttwo from "./components/Parttwo";
import Rightpart from "./components/Rightpart";

const Page = () => {
  const data = useSelector((state: any) => {
    return state.userState;
  });
  console.log("logging:", data);
  const postToggle = useSelector((state: any) => {
    return state.postToggle;
  });

  if (data === null) {
    redirect("/register");
  } else {
    return (
      <div className={postToggle ? "h-[100vh] overflow-x-hidden" : "w-full"}>
        {postToggle ? <Posts /> : ""}
        <Header />

        <div className="grid w-[100%] grid-cols-1 md:grid-cols-10 gap-5 md:px-20 px-5 pt-20">
          <div className="md:col-span-2 flex flex-col w-[90vw] md:w-full h-full gap-1   ">
            <div className="border pb-4 w-full md:w-full md:h-[370px] bg-white  border-neutral-300 rounded-md">
              <div className="relative">
                <div className="bg-gray-300 h-[80px] "></div>
                <div className="border-2 flex items-center justify-center border-white rounded-full w-[60px] h-[60px] bg-gray-300 top-[50px] md:right-[80px] right-[40%] absolute">
                  <CameraIcon className="text-[20px] text-blue-600" />
                </div>
              </div>
              <div className="flex justify-center items-center mt-10 md:border-b md:pb-4">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-[14px] text-neutral-500 font-semibold pb-1">
                    Welcome, Rasheedat
                  </h1>
                  <p className="text-[11px]  text-blue-600 font-light">
                    Add a Photo
                  </p>
                </div>
              </div>

              <div className="px-5 py-2 leading-5 border-b pb-2 hidden md:block">
                <h1 className="font-medium text-[10px] text-neutral-500">
                  Profile Viewers
                </h1>
                <h1 className="font-medium text-[10px] text-neutral-500">
                  View all Analytics
                </h1>
              </div>
            </div>

            <div className="border h-[100px] bg-white border-neutral-300 hidden md:block rounded-md">
              2
            </div>
          </div>
          <div className="col-span-5">
            <Parttwo />
          </div>
          <div className="col-span-3 hidden md:flex flex-col gap-[-10px]  ">
            <Rightpart />
          </div>
        </div>
      </div>
    );
  }
};

export default Page;
