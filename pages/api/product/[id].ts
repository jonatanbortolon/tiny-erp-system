import { NextApiRequest, NextApiResponse } from 'next';
import { Types } from 'mongoose';
import Product from '../../../src/models/product';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.id === 'undefined') return res.status(500).end();

  if (req.method === 'PUT') {
    try {
      await Product.updateOne(
        { _id: Types.ObjectId(req.query.id as string) },
        { price: req.body.price }
      );

      return res.status(200).end();
    } catch (e) {
      console.log(e);

      return res.status(500).end();
    }
  } else if (req.method === 'DELETE') {
    try {
      await Product.findByIdAndRemove({
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
