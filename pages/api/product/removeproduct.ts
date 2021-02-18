import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../src/models/product";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await Product.Product.findByIdAndRemove({ _id: req.body.product });

  const products = await Product.Product.find().sort({ category: -1 });

  res.status(200).json(products);
};
