import React from 'react';

import { Modal, LoadingIcon } from './styles';

interface LoadingProps {
  enabled: boolean;
}

const Loading = ({ enabled }: LoadingProps) => {
  return enabled ? (
    <Modal>
      <LoadingIcon />
    </Modal>
  ) : (
    <></>
  );
};

export default Loading;
