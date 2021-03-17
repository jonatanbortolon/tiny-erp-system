import styled from 'styled-components';

import { CloseOutline } from '@styled-icons/evaicons-outline/';

export const Modal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  top: 0;
  left: 0;
`;

export const ModalBackground = styled.div`
  position: relative;
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 0;

  > form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 0 20%;
  }

  @media (max-width: 1050px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const ModalCloseButton = styled(CloseOutline)`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 26px;
  height: 26px;
  color: #283142;
  cursor: pointer;
`;

export const ModalTitleDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.h2`
  color: #283142;
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: 1px solid gainsboro;
  background-color: ${(props) =>
    props.type === 'submit' ? '#157FE5' : props.disabled ? '#f0f0f0' : '#fff'};
  margin-bottom: 15px;
  padding: 0 10px;
  color: ${(props) =>
    props.type === 'submit' ? '#fff' : props.disabled && 'gray'};
  ${(props) => props.type === 'submit' && 'cursor: pointer;'};
  ${(props) => props.disabled && 'cursor: not-allowed;'};

  :hover {
    background-color: ${(props) =>
      props.type === 'submit' ? '#0e63b5' : !props.disabled && '#fafafa'};
  }
`;

export const ModalSelect = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: 1px solid gainsboro;
  background-color: #fff;
  margin-bottom: 15px;
  padding: 0 10px;

  :hover {
    background-color: #fafafa;
  }
`;

export const ModalInputLabel = styled.label`
  margin-bottom: 5px;
  color: #283142;
  font-size: 15px;
`;
