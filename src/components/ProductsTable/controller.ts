import { useState } from 'react';

/**
 * TYPES
 */
import { IProduct } from '../../interfaces';

const useController = () => {
  const [productModal, changeProductModal] = useState<IProduct | null>(null);

  return {
    productModal,
    changeProductModal,
  };
};

export default useController;
