import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../src/models/product";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await Product.Product.updateOne(
    { _id: req.body.product },
    { price: req.body.price }
  );

  const products = await Product.Product.find().sort({ category: -1 });

  res.status(200).json(products);
};
