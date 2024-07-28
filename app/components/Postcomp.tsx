import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import { IoMdThumbsUp } from "react-icons/io";
import { MdComment, MdPerson, MdSave, MdShare } from "react-icons/md";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import { revalidateTag } from "next/cache";
import { TiArrowMaximiseOutline } from "react-icons/ti";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import fetching from "./fetch";
import { userInfo } from "os";
import { iPostData } from "../ultis/model/postModel";
import { FaRegSmile } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Postcomp: FC<iPostData> = ({ content, avatar, _id: postID }) => {
  const user = useSelector((state: any) => state.userState);
  const data = user?.data ? user?.data : user;
  const [toggle, setToggle] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const fetching = async (id: string = data?._id) => {
      const url = "/api/users/post";
      return await fetch(`${url}/${id}/${postID}/comment`, {
        method: "GET",
        cache: "no-cache",
        next: {
          tags: ["possts"],
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setComment(res?.data?.comment);
        });
    };

    fetching();
  }, [user]);

  const action = async (formData: FormData) => {
    const url = "/api/users/post";
    const reply = formData.get("reply");

    await fetch(`${url}/${data?._id}/${postID}/comment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        reply,
      }),
    });
  };
  console.log(show, comment);
  return (
    <div className="border rounded-md mt-3 bg-white border-neutral-300">
      <div className=" px-4 py-4">
        <div className="flex justify-between">
          <UserProfile />
          <h1 className="text-blue-700 font-semibold text-[13px]">Follow</h1>
        </div>
      </div>
      <h1 className="px-4 py-4 text-[14px] text-neutral-700 leading-[20px] mt-4">
        {content}
      </h1>
      {avatar && (
        <Image
          src={avatar}
          alt="#"
          width={1000}
          height={1000}
          className="w-full h-[300px] mt-5"
        />
      )}

      <div className="px-[40px] py-5 flex justify-between border-t mt-2">
        <div className="flex gap-1 items-center cursor-pointer">
          <IoMdThumbsUp className="text-[20px] text-neutral-500" />
          <h1 className="hidden md:block">Like</h1>
        </div>

        <div className="flex gap-1 items-center cursor-pointer">
          <MdComment
            className="text-neutral-500"
            onClick={() => setShow(true)}
          />
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
      <div>
        {show && (
          <form action={action}>
            <div className="flex gap-5 relative items-center px-5 pb-3">
              <Image
                src={"/face.png"}
                alt="#"
                width={1000}
                height={1000}
                className="w-4 h-4 "
              />

              <input
                type="text"
                className="flex h-[50px] border rounded-[22px] flex-1 px-3 pr-16"
                placeholder="start post"
                name="reply"
                onChange={(e) => {
                  setText(e.target.value);
                }}
                onClick={() => setToggle(true)}
              />
              <div className="absolute right-10 flex items-center gap-2">
                <FaRegSmile />
                <FaImage />
              </div>
            </div>
            {text.length > 0 && (
              <div className="px-5 pb-3">
                <Button type="submit">POST</Button>
              </div>
            )}
            {comment &&
              comment?.map((el: any) => (
                <div className="grid grid-cols-10 px-5 w-full pb-3">
                  <Image
                    src={el?.user?.avatar}
                    alt="#"
                    width={1000}
                    height={1000}
                    className="object-cover size-10 col-span-1 rounded-full"
                  />

                  <div className=" min-h-[50%] bg-gray-200 col-span-9 rounded-md rounded-tl-none p-3 space-y-3 ">
                    <div className="capitalize text-[12px] text-gray-500 ">
                      <p className="font-semibold">{el?.user?.name}</p>
                      <p>{el?.user?.profession}</p>
                    </div>
                    {el.reply}
                  </div>
                </div>
              ))}
          </form>
        )}
      </div>
    </div>
  );
};

export default Postcomp;
