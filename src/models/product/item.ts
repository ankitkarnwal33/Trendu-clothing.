import { Schema, model, models } from "mongoose";
const ItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxlength: 200,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      required: true,
      default: "/img",
    },
    sizes: {
      type: [String],
      required: true,
    },
    colors: {
      type: [String],
      required: true,
    },
    rating: {
      type: Number,
      default: 2,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Item = models?.Item || model("Item", ItemSchema);
