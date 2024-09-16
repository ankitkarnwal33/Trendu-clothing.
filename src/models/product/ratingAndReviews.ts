import { model, models, Schema } from "mongoose";

const ReviewSchema = new Schema(
  {
    item: {
      type: Schema.Types.ObjectId,
      ref: "item",
    },
    rating: {
      type: Number,
      required: true,
      max: 5,
      min: 0,
    },
    user: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      maxlength: 500,
      minlength: 50,
    },
  },
  { timestamps: true }
);
const Review = models.Review || model("Review", ReviewSchema);
export default Review;
