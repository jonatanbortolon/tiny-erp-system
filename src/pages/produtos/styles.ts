import styled, { keyframes } from 'styled-components';

import { LoaderAlt } from '@styled-icons/boxicons-regular';
import { MagnifyingGlass } from '@styled-icons/foundation';

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

export const ContentTitle = styled.div`
  width: 100%;
  height: 40px;
  min-height: 40px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  color: #555555;
`;

export const ToolBarContainer = styled.div`
  width: calc(100% - 80px);
  border-radius: 3px;
  height: 40px;
  margin: min(100%, 20px) 0 5px 0;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1050px) {
    width: 100%;
    margin: 0;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
    box-shadow: none;
  }
`;

export const ToolBarScroller = styled.div`
  min-width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  :last-child {
    margin-right: 10px;
  }

  @media (max-width: 1050px) {
    justify-content: flex-start;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

export const ToolBarButton = styled.button`
  height: calc(100% - 10px);
  color: #555555;
  background-color: transparent;
  cursor: pointer;
  padding: 0 10px;
  border: 1px solid gainsboro;
  border-radius: 3px;
  margin-left: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1050px) {
    min-width: 150px;
    font-size: 12px;
  }
`;

export const ToolBarInput = styled.input`
  height: 100%;
  color: #555555;
  background-color: transparent;
  border: none;
  padding: 0 7px;
  border-right: 1px solid gainsboro;

  :focus {
    outline: none;
  }
`;

export const SearchIcon = styled(MagnifyingGlass)`
  height: calc(100% - 10px);
  color: #555555;
  margin: 0 5px;
`;

export const ListContainer = styled.div`
  width: calc(100% - 80px);
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-height: calc(100vh - 150px);
  margin: 5px 0 min(100%, 20px) 0;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;

  @media (max-width: 1050px) {
    width: 100%;
    max-height: 100%;
    margin: 0;
    box-shadow: none;
  }
`;

export const LoadingGif = styled(LoaderAlt)`
  width: 48px;
  height: 48px;
  margin: auto;
  color: #157fe5;

  animation: ${spin} 1s infinite ease;
`;
