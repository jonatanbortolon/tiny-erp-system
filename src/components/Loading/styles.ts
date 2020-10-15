import styled, { keyframes } from 'styled-components';

import { LoaderAlt } from '@styled-icons/boxicons-regular';

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

export const Modal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
  top: 0;
  left: 0;
`;

export const LoadingIcon = styled(LoaderAlt)`
  width: 10vh;
  height: 10vh;
  color: #fff;

  animation: ${spin} 1s infinite ease;
`;
