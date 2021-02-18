//import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
//import Client from '../../../src/models/client';

import cors from 'cors';

export default nc()
  .use(cors())
  .get(async (/*req: NextApiRequest, res: NextApiResponse*/) => {
    //const clients = await Client.find();
    //res.status(200).json(clients);
    //res.status(200).json({ 'Hello': 'World' });
  });
