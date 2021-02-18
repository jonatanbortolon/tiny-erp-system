import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../src/models/product";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body.category === "") {
    res.status(500).json({ status: "error" });
    return;
  }

  let newProd: any;

  if (req.body.code === "") {
    newProd = new Product({
      name: req.body.name,
      category: req.body.category,
      quantity: req.body.quantity,
      price: req.body.price,
    });
  } else {
    newProd = new Product(req.body);
  }

  await newProd.save();

  const products = await Product.find().sort({ category: -1 });

  res.status(200).json(products);
};
