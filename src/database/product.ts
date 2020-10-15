import { createConnection } from 'mongoose';

const ProductDatabase = createConnection(
  'mongodb+srv://app:app@cluster0.xzckr.gcp.mongodb.net/product?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

export default ProductDatabase;
