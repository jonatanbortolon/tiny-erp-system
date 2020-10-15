import { NextApiResponse } from 'next';
import Category from '../../../src/models/category';

export default async (res: NextApiResponse) => {
  const categories = await Category.find();

  res.status(200).json(categories);
};
