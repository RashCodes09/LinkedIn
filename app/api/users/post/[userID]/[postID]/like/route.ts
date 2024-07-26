import { dbConfig } from "@/app/ultis/dbConfig";
import likeModel from "@/app/ultis/model/likeModel";
import postModel from "@/app/ultis/model/postModel";
import userModel from "@/app/ultis/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID, postID } = await params;
    const user = await userModel.findById(userID);
    const post = await postModel.findById(postID);
    const getD = await likeModel.create({ post, user });
    await post.like.push(getD._id);
    post.save();
    return NextResponse.json({
      message: "Like Posted",
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
