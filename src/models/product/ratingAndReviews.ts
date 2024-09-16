import { model, models, Schema } from "mongoose";

const ReviewSchema = new Schema(
  {
    item: {
      type: Schema.Types.ObjectId,
      ref: "item",
      required: true,
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
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
const Review = models.Review || model("Review", ReviewSchema);
export default Review;
