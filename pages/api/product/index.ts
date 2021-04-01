import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../../src/models/product';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const products = await Product.find()
        .collation({ locale: 'pt', strength: 1, caseLevel: false })
        .sort({ name: 1 });

      return res.status(200).json(products);
    } catch (e) {
      console.log(e);

      return res.status(500).end();
    }
  } else if (req.method === 'POST') {
    try {
      if (
        req.body.name === '' ||
        req.body.quantity === '' ||
        req.body.price === ''
      ) {
        return res.status(500).end();
      }

      if (req.body.quantity === '') req.body.quantity = '0';

      if (isNaN(Number(req.body.quantity))) return res.status(500).end();

      let newProd = new Product(req.body);

      await newProd.save();

      return res.status(200).end();
    } catch (e) {
      console.log(e);

      return res.status(500).end();
    }
  } else {
    return res.status(405).end();
  }
};
