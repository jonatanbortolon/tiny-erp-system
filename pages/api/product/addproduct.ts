import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../src/models/product";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body.category === "") {
    res.status(500).json({ status: "error" });
    return;
  }
  let newProd: any;

  newProd = new Product.Product(req.body);

  await newProd.save();

  const products = await Product.Product.find().sort({ category: -1 });
  console.log(products);
  res.status(200).json(products);
};
