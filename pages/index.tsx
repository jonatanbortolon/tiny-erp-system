import { NextPage } from 'next';

import Layout, { Content, Menu } from '../src/components/Layout';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Menu />
      <Content />
    </Layout>
  );
};

export default IndexPage;
