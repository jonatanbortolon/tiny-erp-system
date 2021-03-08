import { withRouter } from 'next/router';
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

/**
 * TYPES
 */
import { ILayoutProps, ILayoutMenuProps, ILayoutContentProps } from './types';

const Layout = ({ children }: ILayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export const Menu = withRouter(({ router }: ILayoutMenuProps) => {
  return (
    <MenusHolder>
      <Title>Aços Palmeiras</Title>
      <BurguerMenu id='burguerMenu' type='checkbox' />
      <BurguerLabel htmlFor='burguerMenu'>
        <span />
        <span />
        <span />
      </BurguerLabel>
      <MenusContainerHolder>
        <MenuContainer aria-label='MENU'>
          <MenuButton
            onClick={() => router.push('/')}
            id={router.route === '/' ? 'active' : ''}>
            <HomeIcon />
            <MenuTitle>Inicio</MenuTitle>
          </MenuButton>
          <MenuButton
            onClick={() => router.push('/clientes')}
            id={router.route === '/clientes' ? 'active' : ''}>
            <UsersIcon />
            <MenuTitle>Clientes</MenuTitle>
          </MenuButton>
          <MenuButton
            onClick={() => router.push('/produtos')}
            id={router.route === '/produtos' ? 'active' : ''}>
            <ProductsIcon />
            <MenuTitle>Produtos</MenuTitle>
          </MenuButton>
        </MenuContainer>
      </MenusContainerHolder>
    </MenusHolder>
  );
});

export const Content = ({ children }: ILayoutContentProps) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default Layout;
