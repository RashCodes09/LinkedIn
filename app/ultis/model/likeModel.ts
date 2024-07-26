import { Document, model, models, Schema, Types } from "mongoose";
interface iLike {
  post: {};
  user: {};
}
interface iLikeData extends iLike, Document {}
const likeSchema = new Schema<iLikeData>(
  {
    post: { type: Types.ObjectId, ref: "posts" },
    user: { type: Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

const likeModel = models.likes || model<iLikeData>("likes", likeSchema);

export default likeModel;
