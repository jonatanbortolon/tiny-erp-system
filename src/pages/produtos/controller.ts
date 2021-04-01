import { useState } from 'react';
import useSWR from 'swr';
import Categoryfetcher from '../../utils/fetchers/category';
import Productfetcher from '../../utils/fetchers/product';

/**
 * TYPES
 */
import { ICategory, IProduct } from '../../interfaces';

const useController = () => {
  const {
    data: categories,
    error: categoriesError,
    mutate: categoriesMutate,
  } = useSWR<ICategory[]>('/api/category', Categoryfetcher);
  const {
    data: products,
    error: productsError,
    mutate: productsMutate,
  } = useSWR<IProduct[]>('/api/product', Productfetcher);

  const [loading, toggleLoading] = useState(false);
  const [filter, changeFilter] = useState('');
  const [categoryModal, toggleCategoryModal] = useState(false);
  const [productModal, toggleProductModal] = useState(false);
  const [priceCategoryModal, togglePriceCategoryModal] = useState(false);
  const [removeCategoryModal, toggleRemoveCategoryModal] = useState(false);
  const [operation, setOperation] = useState(true);

  async function handleCategorySubmit(e: React.FormEvent<HTMLFormElement>) {
    toggleLoading(true);
    e.preventDefault();

    await fetch('/api/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      // @ts-ignore
      body: JSON.stringify({ name: e.target[0].value }),
    }).then(() => categoriesMutate());

    toggleCategoryModal(false);
    toggleLoading(false);
  }

  async function handleProductSumbit(e: React.FormEvent<HTMLFormElement>) {
    toggleLoading(true);
    e.preventDefault();

    await fetch('/api/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        // @ts-ignore
        // code: e.target[0].value,
        // @ts-ignore
        name: e.target[0].value,
        // @ts-ignore
        category: e.target[1].value,
        // @ts-ignore
        quantity: e.target[2].value,
        // @ts-ignore
        price: e.target[3].value,
      }),
    })
      .then(() => productsMutate())
      .catch((error) => console.log(error));

    toggleProductModal(false);
    toggleLoading(false);
  }

  async function handleOnCategoryChangePrice(
    e: React.FormEvent<HTMLFormElement>
  ) {
    toggleLoading(true);
    e.preventDefault();

    //@ts-ignore
    await fetch('/api/category/' + e.target[0].value, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify({
        //@ts-ignore
        price: e.target[1].value,
        //@ts-ignore
        operation: e.target[2].checked
          ? 'up'
          : //@ts-ignore
          e.target[3].checked
          ? 'down'
          : null,
      }),
    }).then(() => {
      productsMutate();
      togglePriceCategoryModal(false);
    });

    togglePriceCategoryModal(false);
    toggleLoading(false);
  }

  async function handleOnProductChange(e: React.FormEvent<HTMLFormElement>) {
    toggleLoading(true);
    e.preventDefault();

    //@ts-ignore
    await fetch('/api/product/' + e.target[0].value, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify({
        //@ts-ignore
        name: e.target[1].value,
        //@ts-ignore
        quantity: e.target[3].value,
        //@ts-ignore
        price: e.target[4].value,
      }),
    }).then(() => productsMutate());

    toggleLoading(false);
  }

  async function handleOnCategoryDelete(e: React.FormEvent<HTMLFormElement>) {
    toggleLoading(true);
    e.preventDefault();

    //@ts-ignore
    await fetch('/api/category/' + e.target[0].value, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then(() => {
      categoriesMutate();
      productsMutate();
    });

    toggleRemoveCategoryModal(false);
    toggleLoading(false);
  }

  async function handleOnProductDelete(id: string) {
    toggleLoading(true);
    await fetch('/api/product/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then(() => productsMutate());

    toggleLoading(false);
  }

  return {
    categories: categories === undefined ? [] : categories,
    categoriesError,
    priceCategoryModal,
    removeCategoryModal,
    products: products === undefined ? [] : products,
    productsError,
    filter,
    loading,
    categoryModal,
    productModal,
    operation,
    setOperation,
    toggleCategoryModal,
    togglePriceCategoryModal,
    handleCategorySubmit,
    handleOnCategoryChangePrice,
    toggleProductModal,
    handleProductSumbit,
    toggleRemoveCategoryModal,
    handleOnCategoryDelete,
    changeFilter,
    handleOnProductChange,
    handleOnProductDelete,
  };
};

export default useController;
