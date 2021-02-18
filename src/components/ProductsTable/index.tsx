import React, { useState } from "react";

import {
  TableContainer,
  TrContainer,
  TdContainer,
  Button,
  ChangePriceButton,
  DeleteButton,
} from "./styles";

import Modal, { ModalInput, ModalInputLabel } from "../Modal";

import { Product, Category } from "../../interfaces";

interface TableProps {
  children?: React.ReactNode;
  filterString: string;
  products: Product[];
  categories: Category[];
  onProductChangePrice: any;
  onProductDelete: any;
}

const Table = ({
  filterString,
  products,
  categories,
  onProductChangePrice,
  onProductDelete,
}: TableProps) => {
  const [productPriceModal, changeProductPriceModal] = useState<Product | null>(
    null
  );

  return (
    <>
      {/*DELETE CATEGORY MODAL ===================================================================*/}
      <Modal
        opened={productPriceModal === null ? false : true}
        title={
          "Alterar Preço de " +
          (categories.find(
            (category) => category._id === productPriceModal?.category
          )?.name || "Sem categoria") +
          " " +
          productPriceModal?.name
        }
        onClose={() => changeProductPriceModal(null)}
      >
        <form
          onSubmit={(e) => {
            onProductChangePrice(e);
            changeProductPriceModal(null);
          }}
        >
          <ModalInputLabel htmlFor="product">Id do Produto</ModalInputLabel>
          <ModalInput
            disabled
            type="text"
            id="product"
            value={productPriceModal?.code}
          />
          <ModalInputLabel htmlFor="price">Preço (R$)</ModalInputLabel>
          <ModalInput type="number" id="price" step="0.01" />
          <ModalInput type="submit" value="Alterar Preço" />
        </form>
      </Modal>
      {/*=====================================================================================*/}
      <TableContainer>
        <thead>
          <TrContainer
            style={{
              height: 50,
              backgroundColor: "#f0f0f0",
              color: "gray",
            }}
          >
            <TdContainer style={{ fontWeight: "bold" }}>Código</TdContainer>
            <TdContainer style={{ fontWeight: "bold" }}>Nome</TdContainer>
            <TdContainer style={{ fontWeight: "bold" }}>Categoria</TdContainer>
            <TdContainer style={{ fontWeight: "bold" }}>Quantidade</TdContainer>
            <TdContainer style={{ fontWeight: "bold" }}>Preço</TdContainer>
            <TdContainer></TdContainer>
          </TrContainer>
        </thead>
        <tbody>
          {
            // CATEGORY PRODUCTS LIST =============================================================================
            products
              .filter(
                (product: Product) =>
                  product.name.includes(filterString) ||
                  product.code.toString().includes(filterString)
              )
              .map((product: Product) => (
                <TrContainer
                  key={product._id}
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  <TdContainer key={product._id + "code"}>
                    {product.code}
                  </TdContainer>
                  <TdContainer key={product._id + "name"}>
                    {product.name}
                  </TdContainer>
                  <TdContainer key={product._id + "category"}>
                    {categories.find(
                      (category) => category._id === product.category
                    )?.name || "Sem categoria"}
                  </TdContainer>
                  <TdContainer key={product._id + "quantity"}>
                    {product.quantity}
                  </TdContainer>
                  <TdContainer key={product._id + "price"}>
                    {product.price} R$
                  </TdContainer>
                  <TdContainer
                    key={product._id + "actions"}
                    style={{
                      verticalAlign: "center",
                    }}
                  >
                    <Button onClick={() => changeProductPriceModal(product)}>
                      Alterar Preço
                    </Button>
                    <ChangePriceButton
                      onClick={() => changeProductPriceModal(product)}
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
