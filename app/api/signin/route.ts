import { dbConfig } from "@/app/ultis/dbConfig";
import userModel from "@/app/ultis/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { email, password } = await req.json();
    const user = await userModel.findOne({
      email,
    });
    if (user) {
      const check = await bcryptjs.compare(password, user?.password);
      if (check) {
        return NextResponse.json({
          message: "user signed in",
          status: 200,
          data: user,
        });
      } else {
        return NextResponse.json({
          message: "password incorrect",
          status: 404,
        });
      }
    } else {
      return NextResponse.json({
        message: "user does not exist",
        status: 404,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "error signin user",
      status: 404,
      error: error.message,
    });
  }
};
