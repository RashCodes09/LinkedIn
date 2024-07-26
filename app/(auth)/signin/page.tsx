"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { toast, useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "@/app/global/slice";

const page = () => {
  const data = useSelector((state: any) => {
    return state.userState;
  });
  console.log("checking:", data);
  const { toast } = useToast();
  const dispatch = useDispatch();

  const mainAction = async (formData: FormData) => {
    const url = "/api/signin";
    const email = formData.get("email");
    const password = formData.get("password");
    await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(async (res) => {
      const read = await res.json();
      console.log("reading:", read);
      if (read.status === 200) {
        dispatch(authUser(read?.data));
        redirect("/");
      } else {
        toast({
          description: `${read?.message}`,
        });
      }
    });
  };
  return (
    <main className="m-2 p-2 rounded-md">
      <Toaster />
      <div className="w-full h-[calc(100vh-40px)] justify-center items-center flex">
        <section className="w-full md:w-[80%] lg:w-[550px] p-2 rounded-md min-h-[300px] border  ">
          <p className="font-semibold uppercase text-center mt-10 pb-5 border-b">
            This is Sign In
          </p>
          <form action={mainAction}>
            {/* <div className="flex flex-col mt-5 mb-3">
              <label className="font-semibold text-[12px] mb-1">Name</label>
              <input
                placeholder="Enter your name"
                name="name"
                className="border rounded-md outline-none h-[45px] pl-2"
              />
            </div> */}
            <div className="flex flex-col mt-5 mb-3">
              <label className="font-semibold text-[12px] mb-1">Email</label>
              <input
                placeholder="Enter your email"
                name="email"
                className="border rounded-md outline-none h-[45px] pl-2"
              />
            </div>
            <div className="flex flex-col mt-5 mb-3">
              <label className="font-semibold text-[12px] mb-1">Password</label>
              <input
                placeholder="Enter your password"
                name="password"
                className="border rounded-md outline-none h-[45px] pl-2"
              />
            </div>
            <Button className="w-full h-[55px] flex justify-center items-center uppercase">
              Register
            </Button>
            <div className="text-center text-[15px] mt-3">
              Don't have an account?{" "}
              <Link href={"/register"} className="italics font-semibold ">
                Register here
              </Link>
            </div>
            <div>
              <p className="flex justify-center items-center gap-2 font-semibold text-[15px] mt-3">
                social handles
              </p>

              <div className="flex justify-center items-center gap-2 mt-3">
                <MdFacebook
                  className="text-blue-800 cursor-pointer"
                  size={50}
                />
                <FaTwitter className="text-blue-800 cursor-pointer" size={50} />
                <FaGoogle className="text-blue-800 cursor-pointer" size={50} />
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default page;
