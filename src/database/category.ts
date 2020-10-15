import { createConnection } from 'mongoose';

const CategoryDatabase = createConnection(
  'mongodb+srv://app:app@cluster0.xzckr.gcp.mongodb.net/category?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

export default CategoryDatabase;
