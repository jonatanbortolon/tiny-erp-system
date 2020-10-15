import { NextApiRequest, NextApiResponse } from 'next';
import Category from '../../../src/models/category';
import Product from '../../../src/models/product';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await Category.findByIdAndRemove({
    _id: req.body.category,
  });

  const categories = await Category.find();

  await Product.deleteMany({ category: req.body.category });

  const products = await Product.find();

  res.status(200).json({ category: categories, product: products });
};
