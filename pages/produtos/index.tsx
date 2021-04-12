import { NextPage } from 'next';
import Layout, { Content, Menu } from '../../src/components/Layout';
import {
  ContentTitle,
  ToolBarContainer,
  ListContainer,
  ToolBarScroller,
  ToolBarButton,
  ToolBarInput,
  SearchIcon,
  LoadingGif,
} from '../../src/pages/produtos/styles';
import Table from '../../src/components/ProductsTable';
import Modal, {
  ModalInput,
  ModalSelect,
  ModalInputLabel,
} from '../../src/components/Modal';
import Loading from '../../src/components/Loading';
import useController from '../../src/pages/produtos/controller';

//===================================================================================

const Products: NextPage = () => {
  const controller = useController();

  return (
    <>
      <Loading enabled={controller.loading} />
      {/*ADD CATEGORY MODAL ==================================================================*/}
      <Modal
        opened={controller.categoryModal}
        title='Adicionar Categoria'
        onClose={() => controller.toggleCategoryModal(false)}>
        <form onSubmit={controller.handleCategorySubmit}>
          <ModalInputLabel htmlFor='name'>Nome</ModalInputLabel>
          <ModalInput type='text' id='name' />
          <ModalInput type='submit' value='Adicionar' />
        </form>
      </Modal>
      {/*=====================================================================================*/}
      {/*ADD PRODUCT MODAL ===================================================================*/}
      <Modal
        opened={controller.productModal}
        title='Adicionar Produto'
        onClose={() => controller.toggleProductModal(false)}>
        <form onSubmit={controller.handleProductSumbit}>
          {/* <ModalInputLabel htmlFor="code">Código</ModalInputLabel> 
          <ModalInput type="number" id="code" />*/}
          <ModalInputLabel htmlFor='name'>Nome</ModalInputLabel>
          <ModalInput type='text' id='name' />
          <ModalInputLabel htmlFor='category'>Categoria</ModalInputLabel>
          <ModalSelect id='category'>
            {controller.categories.map((category) => (
              <option key={category.name + 'option'} value={category._id}>
                {category.name}
              </option>
            ))}
          </ModalSelect>
          <ModalInputLabel htmlFor='quantity'>Quantidade</ModalInputLabel>
          <ModalInput type='number' id='quantity' defaultValue={0} />
          <ModalInputLabel htmlFor='price'>Preço</ModalInputLabel>
          <ModalInput type='number' id='price' step='0.01' />
          <ModalInput type='submit' value='Adicionar' />
        </form>
      </Modal>
      {/*=====================================================================================*/}
      {/*CHANGE CATEGORY PRICE MODAL ===================================================================*/}
      <Modal
        opened={controller.priceCategoryModal}
        title='Alterar preço da Categoria'
        onClose={() => controller.togglePriceCategoryModal(false)}>
        <form onSubmit={controller.handleOnCategoryChangePrice}>
          <ModalInputLabel htmlFor='category'>Categoria</ModalInputLabel>
          <ModalSelect id='category'>
            {controller.categories.map((category) => (
              <option key={category.name + 'option'} value={category._id}>
                {category.name}
              </option>
            ))}
          </ModalSelect>
          <ModalInputLabel htmlFor='price'>Preço (%)</ModalInputLabel>
          <ModalInput type='number' id='price' step='0.01' />
          <ModalInputLabel htmlFor='price'>Operação</ModalInputLabel>
          <div>
            <input
              type='radio'
              id='up'
              name='operation'
              value='up'
              checked={controller.operation}
              onChange={(e) => controller.setOperation(e.target.checked)}
            />
            <ModalInputLabel htmlFor='up' style={{ marginLeft: 5 }}>
              Aumentar Preço
            </ModalInputLabel>
          </div>
          <div style={{ marginBottom: 15 }}>
            <input
              type='radio'
              id='down'
              name='operation'
              value='down'
              checked={!controller.operation}
              onChange={(e) => controller.setOperation(!e.target.checked)}
            />
            <ModalInputLabel htmlFor='down' style={{ marginLeft: 5 }}>
              Diminuir Preço
            </ModalInputLabel>
          </div>
          <ModalInput type='submit' value='Alterar' />
        </form>
      </Modal>
      {/*=====================================================================================*/}
      {/*DELETE CATEGORY MODAL ===================================================================*/}
      <Modal
        opened={controller.removeCategoryModal}
        title='Deletar Categoria'
        onClose={() => controller.toggleRemoveCategoryModal(false)}>
        <form onSubmit={controller.handleOnCategoryDelete}>
          <span
            style={{
              color: 'red',
              marginBottom: 50,
              fontSize: 12,
              textAlign: 'center',
            }}>
            Ao deletar a categoria todos os produtos associados a ela também
            serão deletados!
          </span>
          <ModalInputLabel htmlFor='category'>Categoria</ModalInputLabel>
          <ModalSelect id='category'>
            {controller.categories.map((category) => (
              <option key={category.name + 'option'} value={category._id}>
                {category.name}
              </option>
            ))}
          </ModalSelect>
          <ModalInput type='submit' value='Deletar' />
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
                  height: 'calc(100% - 10px)',
                  border: '1px solid gainsboro',
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <ToolBarInput
                  type='text'
                  placeholder='Procure por nome ou código'
                  onChange={(e: any) => controller.changeFilter(e.target.value)}
                />
                <SearchIcon />
              </div>
              <ToolBarButton
                onClick={() => controller.toggleCategoryModal(true)}>
                Adicionar Categoria
              </ToolBarButton>
              <ToolBarButton
                onClick={() => controller.toggleProductModal(true)}>
                Adicionar Produto
              </ToolBarButton>
              <ToolBarButton
                onClick={() => controller.togglePriceCategoryModal(true)}>
                Alterar Preço da Categoria
              </ToolBarButton>
              <ToolBarButton
                onClick={() => controller.toggleRemoveCategoryModal(true)}>
                Deletar Categoria
              </ToolBarButton>
            </ToolBarScroller>
          </ToolBarContainer>
          <ListContainer>
            {!controller.products || !controller.categories ? (
              <LoadingGif />
            ) : controller.productsError || controller.categoriesError ? (
              <p>Erro</p>
            ) : (
              <Table
                filterString={controller.filter}
                products={controller.products}
                categories={controller.categories}
                onProductChange={controller.handleOnProductChange}
                onProductDelete={controller.handleOnProductDelete}
              />
            )}
          </ListContainer>
        </Content>
      </Layout>
    </>
  );
};

export default Products;
