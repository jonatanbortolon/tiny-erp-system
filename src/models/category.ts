import { Schema } from 'mongoose';

import CategoryDatabase from '../database/category';

const CategorySchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default CategoryDatabase.model('Category', CategorySchema);
