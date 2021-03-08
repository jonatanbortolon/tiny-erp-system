import { NextApiRequest, NextApiResponse } from 'next';
import Category from '../../../src/models/category';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const categories = await Category.find();

      return res.status(200).json(categories);
    } catch (e) {
      console.log(e);

      return res.status(500).end();
    }
  } else if (req.method === 'POST') {
    try {
      const newCategory = new Category(req.body);

      await newCategory.save();

      return res.status(201).end();
    } catch (e) {
      console.log(e);

      return res.status(500).end();
    }
  } else {
    return res.status(405).end();
  }
};
