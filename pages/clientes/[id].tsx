import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout, { Content, Menu } from '../../src/components/Layout';

// import { Container } from './styles';

const ClientDetail: NextPage = () => {
  const Router = useRouter();
  return (
    <Layout>
      <Menu />
      <Content>
        <button onClick={() => console.log(Router.route)}>Click</button>
      </Content>
    </Layout>
  );
};

export default ClientDetail;
