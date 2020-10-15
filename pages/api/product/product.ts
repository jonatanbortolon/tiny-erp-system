import { NextApiResponse } from 'next';
import Product from '../../../src/models/product';

export default async (res: NextApiResponse) => {
  const products = await Product.find().sort({ category: -1 });

  res.status(200).json(products);
};
