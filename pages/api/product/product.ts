import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../src/models/product";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const products = await Product.Product.find().sort({ category: -1 });

  res.status(200).json(products);
};
