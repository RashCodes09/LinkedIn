import { dbConfig } from "@/app/ultis/dbConfig";
import commentModel from "@/app/ultis/model/commentModel";
import postModel from "@/app/ultis/model/postModel";
import userModel from "@/app/ultis/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID, postID } = await params;
    const { reply } = await req.json();
    const user = await userModel.findById(userID);
    const post = await postModel.findById(postID);
    const getD = await commentModel.create({ reply, post, user });
    await post.comment.push(getD._id);
    post.save();
    return NextResponse.json({
      message: "Comment Posted",
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

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    const { postID } = await params;

    const getD = await postModel.findById(postID).populate({
      path: "comment",
      options: {
        sort: {
          createAt: -1,
        },
      },
    });
    return NextResponse.json({
      message: "All Comments",
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
