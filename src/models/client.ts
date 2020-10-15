import { Schema } from 'mongoose';

import ClientDatabase from '../database/client';

const ClientSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
    },
    orders: {
      type: [Schema.Types.ObjectId],
      ref: 'Order',
    },
  },
  { timestamps: true }
);

export default ClientDatabase.model('Client', ClientSchema);
