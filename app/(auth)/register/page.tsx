import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { POST } from "@/app/api/users/route";
import { redirect } from "next/navigation";

const page = () => {
  const url = "http:localhost:3000/api/users";
  const mainAction = async (formData: FormData) => {
    "use server";
    const email = formData.get("email");
    const name = formData.get("name");
    const password = formData.get("password");
    const profession = formData.get("profession");

    await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, name, password, profession }),
    }).then(() => {
      redirect("/Signin");
    });
  };
  return (
    <main className="m-2 p-2  rounded-md">
      <div className="w-full h-[calc(100vh-40px)] justify-center items-center flex">
        <section className="w-full md:w-[80%] lg:w-[550px] p-2 rounded-md min-h-[300px] border  ">
          <p className="font-semibold uppercase text-center mt-10 pb-5 border-b">
            This Is Register
          </p>
          <form action={mainAction}>
            <div className="flex flex-col mt-5 mb-3">
              <label className="font-semibold text-[12px] mb-1">Name</label>
              <input
                placeholder="Enter your name"
                name="name"
                className="border rounded-md outline-none h-[45px] pl-2"
              />
            </div>
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
            <div className="flex flex-col mt-5 mb-3">
              <label className="font-semibold text-[12px] mb-1">
                profession
              </label>
              <input
                placeholder="Enter your profession"
                name="profession"
                className="border rounded-md outline-none h-[45px] pl-2"
              />
            </div>
            <Button className="w-full h-[55px] flex justify-center items-center uppercase">
              Register
            </Button>
            <div className="text-center text-[15px] mt-3">
              Already have an account?{" "}
              <Link href={"/signin"} className="italics font-semibold">
                signin here
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
