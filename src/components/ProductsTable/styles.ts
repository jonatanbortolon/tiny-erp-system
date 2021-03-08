import styled from 'styled-components';

import { Trash } from '@styled-icons/bootstrap';
import { Dollar } from '@styled-icons/boxicons-regular';

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TrContainer = styled.tr`
  height: 60px;
`;

export const TdContainer = styled.td`
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: 500;
  border: 1px solid gainsboro;

  @media (max-width: 1050px) {
    font-size: 12px;
    padding: 0 5px;
  }

  @media (max-width: 515px) {
    font-size: 10px;
  }

  @media (max-width: 450px) {
    font-size: 8px;
    word-break: break-word;
  }
`;

export const Input = styled.input`
  height: 30px;
  border-radius: 3px;
  border: 1px solid gainsboro;
  background-color: #fff;
  margin-bottom: 15px;
  padding: 0 10px;
  color: #fff;

  :hover {
    background-color: #fafafa;
  }
`;

export const Button = styled.button`
  height: 38px;
  color: gray;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid gainsboro;
  padding: 10px;
  border-radius: 3px;
  margin-right: 10px;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const ChangePriceButton = styled(Dollar)`
  height: 38px;
  color: #ffd700;
  cursor: pointer;
  border: 1px solid gainsboro;
  padding: 10px;
  border-radius: 3px;

  @media (min-width: 1050px) {
    display: none;
  }
`;

export const DeleteButton = styled(Trash)`
  height: 38px;
  color: #ff6961;
  cursor: pointer;
  border: 1px solid gainsboro;
  padding: 10px;
  border-radius: 3px;
`;
