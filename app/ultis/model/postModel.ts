import { Schema, Types, model, models } from "mongoose";
import { types } from "util";
interface iPost {
  content: string;
  comment: {}[];
  avatar: string;
  like: [];
  user: {};
}
interface iPostData extends iPost, Document {}

const postSchema = new Schema(
  {
    content: {
      type: String,
    },
    avatar: {
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
const postModel = models.posts || model<iPostData>("posts", postSchema);
export default postModel;
