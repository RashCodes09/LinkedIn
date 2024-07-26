import { dbConfig } from "@/app/ultis/dbConfig";
import postModel from "@/app/ultis/model/postModel";
import userModel from "@/app/ultis/model/userModel";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { userID } = await params;
    const getD = await userModel.findById(userID).populate({
      path: "post",
      options: {
        sort: {
          createAt: -1,
        },
      },
    });
    return NextResponse.json({
      message: "All Posts",
      status: 200,
      data: getD,
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
    const { content, image } = await req.json();
    const user = await userModel.findById(userID);
    const getD = await postModel.create({ content, image, user });
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
