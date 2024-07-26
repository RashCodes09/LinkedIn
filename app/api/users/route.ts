import { dbConfig } from "@/app/ultis/dbConfig";
import userModel from "@/app/ultis/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export const GET = async () => {
  try {
    await dbConfig();
    const user = await userModel.find();

    return NextResponse.json({
      message: "users all gotten",
      status: 200,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "error getting all users",
      status: 404,
      error: error.message,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { name, email, password, avatar, avatarID, post } = await req.json();
    const salt = await bcryptjs.genSalt(10);
    const hashed = await bcryptjs.hash(password, salt);
    const user = await userModel.create({
      name,
      email,
      password: hashed,
      avatar,
      avatarID,
      post,
    });

    return NextResponse.json({
      message: "user craeted",
      status: 200,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "error creating user",
      status: 404,
      error: error.message,
    });
  }
};
