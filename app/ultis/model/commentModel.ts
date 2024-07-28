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
    ref: "ussers",
  },
  post: {
    type: Types.ObjectId,
    ref: "possts",
  },
});
const commentModel =
  models.comments || model<iCommentData>("comments", commentSchema);
export default commentModel;
