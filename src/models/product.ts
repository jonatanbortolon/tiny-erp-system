import { Schema } from "mongoose";
import uniqid from "uniqid";

import ProductDatabase from "../database/product";

const ProductSchema: Schema = new Schema(
  {
    code: {
      type: String,
      default: uniqid,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    quantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      set: setter,
      get: getter,
    },
  },
  { timestamps: true }
);

function setter(v: string): number {
  return Math.floor(parseFloat(v) * 100);
}

function getter(v: string): number {
  return parseFloat((parseInt(v) / 100).toFixed(2));
}

ProductSchema.set("toObject", { getters: true });
ProductSchema.set("toJSON", { getters: true });

export default {
  Product: ProductDatabase.model("Product", ProductSchema),
};
