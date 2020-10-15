import { createConnection } from 'mongoose';

const ClientDatabase = createConnection(
  'mongodb+srv://app:app@cluster0.xzckr.gcp.mongodb.net/client?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

export default ClientDatabase;
