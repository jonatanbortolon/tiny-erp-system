import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../../src/models/product';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const operation =
    req.body.operation === 'up'
      ? 1 + parseFloat(req.body.price) / 100
      : req.body.operation === 'down'
      ? 1 - parseFloat(req.body.price) / 100
      : null;

  if (!operation) return res.status(500).json({ ok: false });

  await Product.Product.updateMany({ category: req.body.category }, [
    {
      $set: {
        price: {
          $trunc: [{ $multiply: ['$price', operation] }, 0],
        },
      },
    },
  ]);

  const products = await Product.Product.find().sort({ category: -1 });

  res.status(200).json(products);
};
