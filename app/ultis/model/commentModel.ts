import { Schema, Types, model, models } from "mongoose";
interface iComment {
  reply: string;
  user: string;
  post: {};
}

interface iCommentData extends iComment, Document {}

const commentSchema = new Schema({
  reply: {
    type: String,
  },
  user: {
    type: Types.ObjectId,
    ref: "users",
  },
  post: {
    type: Types.ObjectId,
    ref: "posts",
  },
});
const commentModel =
  models.comments || model<iCommentData>("comments", commentSchema);
export default commentModel;
