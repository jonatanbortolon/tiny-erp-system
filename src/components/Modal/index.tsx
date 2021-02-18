import React from 'react';

import {
  Modal as ModalComponent,
  ModalBackground,
  ModalCloseButton,
  ModalTitle,
  ModalTitleDiv,
  ModalInput as Input,
  ModalSelect as Select,
  ModalInputLabel as Label,
} from './styles';

interface ModalProps {
  children?: React.ReactNode;
  opened: boolean;
  onClose: () => void;
  title?: string;
}

const Modal = ({ opened, onClose, children, title }: ModalProps) => {
  return !opened ? (
    <></>
  ) : (
    <ModalComponent onClick={onClose}>
      <ModalBackground onClick={(e: any) => e.stopPropagation()}>
        <ModalCloseButton onClick={onClose} />
        <ModalTitleDiv>
          <ModalTitle>{title}</ModalTitle>
        </ModalTitleDiv>
        {children}
      </ModalBackground>
    </ModalComponent>
  );
};

export const ModalInput = Input;

export const ModalSelect = Select;

export const ModalInputLabel = Label;

export default Modal;
