import { Document, Schema, Types, model, models } from "mongoose";
import { types } from "util";
interface iPost {
  content: string;
  comment: {}[];
  avatar: string;
  like: [];
  user: {};
  userID: string;
}
export interface iPostData extends iPost, Document {}

const postSchema = new Schema(
  {
    content: {
      type: String,
    },
    avatar: {
      type: String,
    },
    userID: {
      type: String,
    },
    like: {
      type: [],
    },

    comment: [
      {
        type: Types.ObjectId,
        ref: "comments",
      },
    ],
    user: {
      type: Types.ObjectId,
      ref: "ussers",
    },
  },
  { timestamps: true }
);
const postModel = models.possts || model<iPostData>("possts", postSchema);
export default postModel;
