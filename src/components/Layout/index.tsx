import { useRouter } from 'next/router';

import {
  LayoutContainer,
  Title,
  BurguerMenu,
  BurguerLabel,
  MenusContainerHolder,
  MenusHolder,
  MenuContainer,
  MenuButton,
  MenuTitle,
  HomeIcon,
  UsersIcon,
  ProductsIcon,
  ContentContainer,
} from './styles';

interface LayoutProps {
  children?: React.ReactNode;
}

interface ContentProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export const Menu = () => {
  const Router = useRouter();

  return (
    <MenusHolder>
      <Title>Aços Palmeiras</Title>
      <BurguerMenu id="burguerMenu" type="checkbox" />
      <BurguerLabel htmlFor="burguerMenu">
        <span />
        <span />
        <span />
      </BurguerLabel>
      <MenusContainerHolder>
        <MenuContainer aria-label="MENU">
          <MenuButton
            onClick={() => Router.push('/')}
            id={Router.route === '/' ? 'active' : ''}>
            <HomeIcon />
            <MenuTitle>Inicio</MenuTitle>
          </MenuButton>
          <MenuButton
            onClick={() => Router.push('/clientes')}
            id={Router.route === '/clientes' ? 'active' : ''}>
            <UsersIcon />
            <MenuTitle>Clientes</MenuTitle>
          </MenuButton>
          <MenuButton
            onClick={() => Router.push('/produtos')}
            id={Router.route === '/produtos' ? 'active' : ''}>
            <ProductsIcon />
            <MenuTitle>Produtos</MenuTitle>
          </MenuButton>
        </MenuContainer>
      </MenusContainerHolder>
    </MenusHolder>
  );
};

export const Content = ({ children }: ContentProps) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default Layout;
