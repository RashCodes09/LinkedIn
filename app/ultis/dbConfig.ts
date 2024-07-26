// import connect from "mongoose";
import { connect } from "mongoose";
import { DB_STRING } from "./constant";

export const dbConfig = async () => {
  try {
    await connect(DB_STRING).then(() => {
      console.clear();
      console.log("server up");
    });
  } catch (error: any) {
    console.error(error);
  }
};
