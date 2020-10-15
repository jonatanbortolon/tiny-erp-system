import styled from 'styled-components';

import { Home, User, PurchaseTag } from '@styled-icons/boxicons-regular';

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const MenusHolder = styled.div`
  width: 20%;
  height: 100%;
  background-color: #283142;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1050px) {
    width: 100vw;
    height: 10%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
  }
`;

export const Title = styled.h1`
  font-size: 23px;
  color: #fff;
  margin: 15px 15px 20px 15px;
`;

export const MenusContainerHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 12px 15px 12px;

  :before {
    content: attr(aria-label);
    font-size: 12px;
    font-weight: bold;
    color: #5e6679;
    margin-bottom: 12px;
    margin-right: auto;
    margin-left: 15px;
  }

  :after {
    content: '';
    height: 1px;
    width: 100%;
    margin-top: 12px;
    background-color: #354052;
  }

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const BurguerLabel = styled.label`
  z-index: 10;
  cursor: pointer;

  & > span {
    display: block;
    width: 22px;
    height: 2px;
    background-color: #cccccc;
    margin: 4px;
    transition: all 0.2s;
  }

  span:nth-child(1) {
    transform: rotate(0);
  }

  span:nth-child(2) {
    opacity: 1;
  }

  @media (min-width: 1050px) {
    display: none;
  }
`;

export const BurguerMenu = styled.input`
  display: none;

  &:checked {
    * {
      overflow: none;
    }

    & ~ ${MenusContainerHolder} {
      height: calc(100% - 8vh);
      z-index: 5;
      background-color: #283142;
      display: flex;
      position: absolute;
      margin-top: 8vh;
      top: 0;
      left: 0;

      ${MenuContainer} {
        display: flex;
        z-index: 5;
      }
    }

    ~ ${BurguerLabel} > span:nth-child(2) {
      background-color: red;
    }
    ~ ${BurguerLabel}> span:nth-child(1) {
      transform: rotate(45deg);
      transform-origin: 10% 10%;
    }

    ~ ${BurguerLabel}> span:nth-child(2) {
      opacity: 0;
    }

    ~ ${BurguerLabel}> span:nth-child(3) {
      transform: rotate(-45deg);
      transform-origin: 10% 90%;
    }
  }

  @media (min-width: 1050px) {
    display: none;
  }
`;

export const MenuButton = styled.li`
  list-style: none;
  width: 100%;
  height: 30px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 12px;
  color: #fff;
  border-radius: 3px;
  margin-bottom: 5px;
  background-color: ${(props) =>
    props.id === 'active' ? '#157fe5' : 'transparent'};

  & > svg {
    color: ${(props) => (props.id === 'active' ? '#fff' : '#5e6679')};
  }

  :hover {
    background-color: #157fe5;

    & > svg {
      color: #fff;
    }
  }

  transition: all 0.3s ease;
`;

export const MenuTitle = styled.p`
  text-align: center;
  margin-left: 12px;
  font-size: 14px;
`;

//=================================================================================
export const HomeIcon = styled(Home)`
  height: calc(100% - 10px);
  transition: all 0.3s ease;
`;

export const UsersIcon = styled(User)`
  height: calc(100% - 10px);
  transition: all 0.3s ease;
`;

export const ProductsIcon = styled(PurchaseTag)`
  height: calc(100% - 10px);
  transition: all 0.3s ease;
`;
//=================================================================================

export const ContentContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #e4e4e4;
`;
