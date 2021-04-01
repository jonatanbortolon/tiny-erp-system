import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../src/models/product';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const products = await Product.find()
        .collation({ locale: 'pt', strength: 1, caseLevel: false })
        .sort({ name: 1 })
        .select('name -_id');

      return res
        .status(200)
        .json(
          JSON.parse(JSON.stringify(products)).map(
            (product: any) => product.name
          )
        );
    } catch (e) {
      console.log(e);

      return res.status(500).end();
    }
  } else {
    return res.status(405).end();
  }
};
