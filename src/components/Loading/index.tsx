import React from 'react';
import { Modal, LoadingIcon } from './styles';

/**
 * TYPES
 */
import { ILoadingProps } from './types';

const Loading = ({ enabled }: ILoadingProps) => {
  return enabled ? (
    <Modal>
      <LoadingIcon />
    </Modal>
  ) : null;
};

export default Loading;
