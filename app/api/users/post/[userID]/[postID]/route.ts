import { dbConfig } from "@/app/ultis/dbConfig";
import postModel from "@/app/ultis/model/postModel";
import userModel from "@/app/ultis/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID, postID } = await params;
    const user = await userModel.findById(userID);
    const post = await postModel.findById(postID);
    const getD = await postModel.findByIdAndDelete(postID);
    await user.post.pull(post._id);
    user.save();
    return NextResponse.json({
      message: "Post Deleted",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
