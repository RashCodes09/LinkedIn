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
import Header from "./components/Header";
import Posts from "./components/Posts";
import Postcomp from "./components/Postcomp";
import Searchcomp from "./components/Searchcomp";
import Parttwo from "./components/Parttwo";
import Rightpart from "./components/Rightpart";
import Leftpart from "./components/Leftpart";

const Page = () => {
  const data = useSelector((state: any) => {
    return state.userState;
  });
  // console.log("logging:", data);
  const postToggle = useSelector((state: any) => {
    return state.postToggle;
  });

  if (data === null) {
    redirect("/register");
  } else {
    return (
      <div className={postToggle ? "h-[100vh] overflow-x-hidden" : "w-full"}>
        {postToggle && <Posts />}
        <Header />

        <div className="grid w-[100%] grid-cols-1 md:grid-cols-10 gap-5 md:px-20 px-5 pt-20">
          <div className="md:col-span-2 flex flex-col w-[90vw] md:w-full h-full gap-1   ">
            <Leftpart />
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
