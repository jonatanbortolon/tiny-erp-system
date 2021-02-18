import { NextPage } from 'next';

import Layout, { Content, Menu } from '../../src/components/Layout';

import {
  ContentTitle,
  ToolBarContainer,
  ListContainer,
  ToolBarScroller,
  ToolBarButton,
  ToolBarInput,
  SearchIcon,
  LoadingGif,
} from '../../src/styles/Clientes';

// import { Container } from './styles';

const Clients: NextPage = () => {
  return (
    <Layout>
      <Menu />
      <Content>
        <ContentTitle>Clientes</ContentTitle>
        <ToolBarContainer>
          <ToolBarScroller>
            <div
              style={{
                height: 'calc(100% - 10px)',
                border: '1px solid gainsboro',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}
            >
              <ToolBarInput
                type="text"
                placeholder="Procure por nome"
                onChange={(e: any) => console.log(e.target.value)}
              />
              <SearchIcon />
            </div>
            <ToolBarButton>Adicionar Cliente</ToolBarButton>
          </ToolBarScroller>
        </ToolBarContainer>
        <ListContainer>
          <LoadingGif />
        </ListContainer>
      </Content>
    </Layout>
  );
};

export default Clients;
