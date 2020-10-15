import { NextApiRequest, NextApiResponse } from 'next';
import Category from '../../../src/models/category';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const newCat = new Category(req.body);

  await newCat.save();

  const categories = await Category.find();

  res.status(200).json(categories);
};
