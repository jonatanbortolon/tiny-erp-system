import { NextApiRequest, NextApiResponse } from 'next';
import { Types } from 'mongoose';
import Category from '../../../src/models/category';
import Product from '../../../src/models/product';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.id === 'undefined') return res.status(500).end();

  if (req.method === 'PUT') {
    try {
      const operation =
        req.body.operation === 'up'
          ? 1 + parseFloat(req.body.price) / 100
          : req.body.operation === 'down'
          ? 1 - parseFloat(req.body.price) / 100
          : null;

      if (operation === null) return res.status(500).end();

      await Product.updateMany(
        { category: Types.ObjectId(req.query.id as string) },
        [
          {
            $set: {
              price: {
                $trunc: [{ $multiply: ['$price', operation] }, 0],
              },
            },
          },
        ]
      );

      return res.status(200).end();
    } catch (e) {
      console.log(e);

      return res.status(500).end();
    }
  } else if (req.method === 'DELETE') {
    try {
      await Product.deleteMany({
        category: Types.ObjectId(req.query.id as string),
      });

      await Category.findByIdAndRemove({
        _id: Types.ObjectId(req.query.id as string),
      });

      return res.status(200).end();
    } catch (e) {
      console.log(e);

      return res.status(500).end();
    }
  } else {
    return res.status(405).end();
  }
};
