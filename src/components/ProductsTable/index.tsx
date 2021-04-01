import React from 'react';
import {
  TableContainer,
  TrContainer,
  TdContainer,
  Button,
  ChangePriceButton,
  DeleteButton,
} from './styles';
import Modal, { ModalInput, ModalInputLabel } from '../Modal';
import useController from './controller';

/**
 * TYPES
 */
import { ITableProps } from './types';

const Table = ({
  filterString,
  products,
  categories,
  onProductChange,
  onProductDelete,
}: ITableProps) => {
  const controller = useController();

  return (
    <>
      {/*DELETE CATEGORY MODAL ===================================================================*/}
      <Modal
        opened={controller.productModal === null ? false : true}
        title={
          'Alterar Preço de ' +
          (categories.find(
            (category) => category._id === controller.productModal?.category
          )?.name || 'Sem categoria') +
          ' ' +
          controller.productModal?.name
        }
        onClose={() => controller.changeProductModal(null)}>
        <form
          onSubmit={(e) => {
            onProductChange(e);
            controller.changeProductModal(null);
          }}>
          <ModalInputLabel htmlFor='id'>Id do Produto</ModalInputLabel>
          <ModalInput
            disabled
            type='text'
            id='id'
            value={controller.productModal?._id}
          />
          <ModalInputLabel htmlFor='name'>Nome do Produto</ModalInputLabel>
          <ModalInput
            type='text'
            id='name'
            defaultValue={controller.productModal?.name}
          />
          <ModalInputLabel htmlFor='category'>
            Categoria do Produto
          </ModalInputLabel>
          <ModalInput
            disabled
            type='text'
            id='category'
            value={controller.productModal?.category}
          />
          <ModalInputLabel htmlFor='quantity'>
            Quantidade do Produto
          </ModalInputLabel>
          <ModalInput
            type='text'
            id='quantity'
            defaultValue={controller.productModal?.quantity}
          />
          <ModalInputLabel htmlFor='price'>Preço (R$)</ModalInputLabel>
          <ModalInput
            type='number'
            id='price'
            step='0.01'
            defaultValue={controller.productModal?.price}
          />
          <ModalInput type='submit' value='Alterar Preço' />
        </form>
      </Modal>
      {/*=====================================================================================*/}
      <TableContainer>
        <thead>
          <TrContainer
            style={{
              height: 50,
              backgroundColor: '#f0f0f0',
              color: 'gray',
            }}>
            <TdContainer style={{ fontWeight: 'bold' }}>Código</TdContainer>
            <TdContainer style={{ fontWeight: 'bold' }}>Nome</TdContainer>
            <TdContainer style={{ fontWeight: 'bold' }}>Categoria</TdContainer>
            <TdContainer style={{ fontWeight: 'bold' }}>Quantidade</TdContainer>
            <TdContainer style={{ fontWeight: 'bold' }}>Preço</TdContainer>
            <TdContainer></TdContainer>
          </TrContainer>
        </thead>
        <tbody>
          {
            // CATEGORY PRODUCTS LIST =============================================================================
            products
              .filter((product) =>
                product.name
                  .toLocaleLowerCase()
                  .includes(filterString.toLocaleLowerCase())
              )
              .map((product, index) => (
                <TrContainer
                  key={index}
                  style={{
                    backgroundColor: 'white',
                  }}>
                  <TdContainer key={index + 'id'}>{product._id}</TdContainer>
                  <TdContainer key={index + 'name'}>{product.name}</TdContainer>
                  <TdContainer key={index + 'category'}>
                    {categories.find(
                      (category) => category._id === product.category
                    )?.name || 'Sem categoria'}
                  </TdContainer>
                  <TdContainer key={index + 'quantity'}>
                    {product.quantity}
                  </TdContainer>
                  <TdContainer key={index + 'price'}>
                    {product.price} R$
                  </TdContainer>
                  <TdContainer
                    key={index + 'actions'}
                    style={{
                      verticalAlign: 'center',
                    }}>
                    <Button
                      onClick={() => controller.changeProductModal(product)}>
                      Editar Produto
                    </Button>
                    <ChangePriceButton
                      onClick={() => controller.changeProductModal(product)}
                    />
                    <DeleteButton
                      onClick={() => onProductDelete(product._id)}
                    />
                  </TdContainer>
                </TrContainer>
              ))
            // ======================================================================================================
          }
        </tbody>
      </TableContainer>
    </>
  );
};

export default Table;
