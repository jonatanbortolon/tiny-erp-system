import { useState } from 'react';

/**
 * TYPES
 */
import { IProduct } from '../../interfaces';

const useController = () => {
  const [
    productPriceModal,
    changeProductPriceModal,
  ] = useState<IProduct | null>(null);

  return {
    productPriceModal,
    changeProductPriceModal,
  };
};

export default useController;
