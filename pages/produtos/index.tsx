import { NextPage } from "next";

import Layout, { Content, Menu } from "../../src/components/Layout";

import {
  ContentTitle,
  ToolBarContainer,
  ListContainer,
  ToolBarScroller,
  ToolBarButton,
  ToolBarInput,
  SearchIcon,
  LoadingGif,
} from "../../src/styles/Produtos";

import useSWR, { mutate } from "swr";

import { Category } from "../../src/interfaces";
import Table from "../../src/components/ProductsTable";
import { useState } from "react";
import Modal, {
  ModalInput,
  ModalSelect,
  ModalInputLabel,
} from "../../src/components/Modal";
import Loading from "../../src/components/Loading";
import {
  Categoriesfetcher,
  Productsfetcher,
} from "../../src/utils/swrFetchers";

//===================================================================================

const Products: NextPage = () => {
  const { data: categories, error: categoriesError } = useSWR(
    "/api/category/category",
    Categoriesfetcher
  );
  const { data: products, error: productsError } = useSWR(
    "/api/product/product",
    Productsfetcher
  );

  const [loading, toggleLoading] = useState(false);

  const [filter, changeFilter] = useState("");

  const [categoryModal, toggleCategoryModal] = useState(false);
  const [productModal, toggleProductModal] = useState(false);
  const [priceCategoryModal, togglePriceCategoryModal] = useState(false);
  const [removeCategoryModal, toggleRemoveCategoryModal] = useState(false);

  async function handleCategorySubmit(e: React.FormEvent<HTMLFormElement>) {
    toggleLoading(true);
    e.preventDefault();

    await fetch("/api/category/addcategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      // @ts-ignore
      body: JSON.stringify({ name: e.target[0].value }),
    }).then((resp) =>
      resp.json().then((response) => mutate("/api/category/category", response))
    );

    toggleCategoryModal(false);
    toggleLoading(false);
  }

  async function handleProductSumbit(e: React.FormEvent<HTMLFormElement>) {
    toggleLoading(true);
    e.preventDefault();

    await fetch("/api/product/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        // @ts-ignore
        // code: e.target[0].value,
        // @ts-ignore
        name: e.target[0].value,
        // @ts-ignore
        category: e.target[1].value,
        // @ts-ignore
        quantity: !!e.target[2].value ? e.target[2].value : "0",
        // @ts-ignore
        price: e.target[3].value,
      }),
    })
      .then((resp) =>
        resp.json().then((response) => mutate("/api/product/product", response))
      )
      .catch((error) => console.log(error));

    toggleProductModal(false);
    toggleLoading(false);
  }

  async function handleOnCategoryChangePrice(
    e: React.FormEvent<HTMLFormElement>
  ) {
    toggleLoading(true);
    e.preventDefault();

    await fetch("/api/category/changecategoryprice", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        //@ts-ignore
        category: e.target[0].value,
        //@ts-ignore
        price: e.target[1].value,
        //@ts-ignore
        operation: e.target[2].checked
          ? "up"
          : //@ts-ignore
          e.target[3].checked
          ? "down"
          : null,
      }),
    }).then((resp) =>
      resp.json().then((response) => {
        mutate("/api/product/product", response);
        togglePriceCategoryModal(false);
      })
    );

    togglePriceCategoryModal(false);
    toggleLoading(false);
  }

  async function handleOnProductChangePrice(
    e: React.FormEvent<HTMLFormElement>
  ) {
    toggleLoading(true);
    e.preventDefault();
    await fetch("/api/product/changeproductprice", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        //@ts-ignore
        product: e.target[0].value,
        //@ts-ignore
        price: e.target[1].value,
      }),
    }).then((resp) =>
      resp.json().then((response) => {
        mutate("/api/product/product", response);
      })
    );

    toggleLoading(false);
  }

  async function handleOnCategoryDelete(e: React.FormEvent<HTMLFormElement>) {
    toggleLoading(true);
    e.preventDefault();
    await fetch("/api/category/removecategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        //@ts-ignore
        category: e.target[0].value,
      }),
    }).then((resp) =>
      resp.json().then((response) => {
        mutate("/api/category/category", response.category);
        mutate("/api/product/product", response.product);
      })
    );

    toggleRemoveCategoryModal(false);
    toggleLoading(false);
  }

  async function handleOnProductDelete(id: string) {
    toggleLoading(true);
    await fetch("/api/product/removeproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        product: id,
      }),
    }).then((resp) =>
      resp.json().then((response) => {
        mutate("/api/product/product", response);
      })
    );

    toggleLoading(false);
  }

  return (
    <>
      <Loading enabled={loading} />
      {/*ADD CATEGORY MODAL ==================================================================*/}
      <Modal
        opened={categoryModal}
        title="Adicionar Categoria"
        onClose={() => toggleCategoryModal(false)}
      >
        <form onSubmit={handleCategorySubmit}>
          <ModalInputLabel htmlFor="name">Nome</ModalInputLabel>
          <ModalInput type="text" id="name" />
          <ModalInput type="submit" value="Adicionar" />
        </form>
      </Modal>
      {/*=====================================================================================*/}
      {/*ADD PRODUCT MODAL ===================================================================*/}
      <Modal
        opened={productModal}
        title="Adicionar Produto"
        onClose={() => toggleProductModal(false)}
      >
        <form onSubmit={handleProductSumbit}>
          {/* <ModalInputLabel htmlFor="code">Código</ModalInputLabel> 
          <ModalInput type="number" id="code" />*/}
          <ModalInputLabel htmlFor="name">Nome</ModalInputLabel>
          <ModalInput type="text" id="name" />
          <ModalInputLabel htmlFor="category">Categoria</ModalInputLabel>
          <ModalSelect id="category">
            {categories?.map((category: Category) => (
              <option key={category.name + "option"} value={category._id}>
                {category.name}
              </option>
            ))}
          </ModalSelect>
          <ModalInputLabel htmlFor="quantity">Quantidade</ModalInputLabel>
          <ModalInput type="number" id="quantity" />
          <ModalInputLabel htmlFor="price">Preço</ModalInputLabel>
          <ModalInput type="number" id="price" step="0.01" />
          <ModalInput type="submit" value="Adicionar" />
        </form>
      </Modal>
      {/*=====================================================================================*/}
      {/*CHANGE CATEGORY PRICE MODAL ===================================================================*/}
      <Modal
        opened={priceCategoryModal}
        title="Alterar preço da Categoria"
        onClose={() => togglePriceCategoryModal(false)}
      >
        <form onSubmit={handleOnCategoryChangePrice}>
          <ModalInputLabel htmlFor="category">Categoria</ModalInputLabel>
          <ModalSelect id="category">
            {categories?.map((category: Category) => (
              <option key={category.name + "option"} value={category._id}>
                {category.name}
              </option>
            ))}
          </ModalSelect>
          <ModalInputLabel htmlFor="price">Preço (%)</ModalInputLabel>
          <ModalInput type="number" id="price" step="0.01" />
          <ModalInputLabel htmlFor="price">Operação</ModalInputLabel>
          <div>
            <input type="radio" id="up" name="operation" value="up" checked />
            <ModalInputLabel htmlFor="up" style={{ marginLeft: 5 }}>
              Aumentar Preço
            </ModalInputLabel>
          </div>
          <div style={{ marginBottom: 15 }}>
            <input type="radio" id="down" name="operation" value="down" />
            <ModalInputLabel htmlFor="down" style={{ marginLeft: 5 }}>
              Diminuir Preço
            </ModalInputLabel>
          </div>
          <ModalInput type="submit" value="Alterar" />
        </form>
      </Modal>
      {/*=====================================================================================*/}
      {/*DELETE CATEGORY MODAL ===================================================================*/}
      <Modal
        opened={removeCategoryModal}
        title="Deletar Categoria"
        onClose={() => toggleRemoveCategoryModal(false)}
      >
        <form onSubmit={handleOnCategoryDelete}>
          <span
            style={{
              color: "red",
              marginBottom: 50,
              fontSize: 12,
              textAlign: "center",
            }}
          >
            Ao deletar a categoria todos os produtos associados a ela também
            serão deletados!
          </span>
          <ModalInputLabel htmlFor="category">Categoria</ModalInputLabel>
          <ModalSelect id="category">
            {categories?.map((category: Category) => (
              <option key={category.name + "option"} value={category._id}>
                {category.name}
              </option>
            ))}
          </ModalSelect>
          <ModalInput type="submit" value="Deletar" />
        </form>
      </Modal>
      {/*=====================================================================================*/}

      <Layout>
        <Menu />
        <Content>
          <ContentTitle>Produtos</ContentTitle>
          <ToolBarContainer>
            <ToolBarScroller>
              <div
                style={{
                  height: "calc(100% - 10px)",
                  border: "1px solid gainsboro",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <ToolBarInput
                  type="text"
                  placeholder="Procure por nome ou código"
                  onChange={(e: any) => changeFilter(e.target.value)}
                />
                <SearchIcon />
              </div>
              <ToolBarButton onClick={() => toggleCategoryModal(true)}>
                Adicionar Categoria
              </ToolBarButton>
              <ToolBarButton onClick={() => toggleProductModal(true)}>
                Adicionar Produto
              </ToolBarButton>
              <ToolBarButton onClick={() => togglePriceCategoryModal(true)}>
                Alterar Preço da Categoria
              </ToolBarButton>
              <ToolBarButton onClick={() => toggleRemoveCategoryModal(true)}>
                Deletar Categoria
              </ToolBarButton>
            </ToolBarScroller>
          </ToolBarContainer>
          <ListContainer>
            {!products || !categories ? (
              <LoadingGif />
            ) : productsError || categoriesError ? (
              <p>Erro</p>
            ) : (
              <Table
                filterString={filter}
                products={products}
                categories={categories}
                onProductChangePrice={handleOnProductChangePrice}
                onProductDelete={handleOnProductDelete}
              />
            )}
          </ListContainer>
        </Content>
      </Layout>
    </>
  );
};

export default Products;
