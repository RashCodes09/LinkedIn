import { dbConfig } from "@/app/ultis/dbConfig";
import postModel from "@/app/ultis/model/postModel";
import userModel from "@/app/ultis/model/userModel";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConfig();

    const post = await postModel.find();

    return NextResponse.json({
      message: "All Posts",
      status: 200,
      data: post,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured!",
      status: 400,
      error: error.message,
    });
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = await params;
    const { content, avatar } = await req.json();
    const user = await userModel.findById(userID);
    const getD = await postModel.create({ content, avatar, userID });
    await user.post.push(new Types.ObjectId(getD._id));
    user.save();
    return NextResponse.json({
      message: "Post Created",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured Creating Post",
      status: 400,
      error: error.message,
    });
  }
};

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = params;
    const { name, email, password, avatar, avatarID, post, profession } =
      await req.json();
    const user = await userModel.findByIdAndUpdate(
      userID,
      {
        name,
        email,
        password,
        avatar,
        avatarID,
        post,
        profession,
      },
      { new: true }
    );

    return NextResponse.json({
      message: "user updated",
      status: 200,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "error upsating",
      status: 404,
      error: error.message,
    });
  }
};
