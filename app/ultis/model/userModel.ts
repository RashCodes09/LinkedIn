import { Schema, Types, model, models } from "mongoose";
// import { types } from "util";
interface iUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
  avatarID: string;
  post: {}[];
}
interface iUserData extends iUser, Document {}

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    post: [
      {
        type: Types.ObjectId,
        ref: "posts",
      },
    ],
  },
  { timestamps: true }
);
const userModel = models.users || model<iUserData>("users", userSchema);
export default userModel;
