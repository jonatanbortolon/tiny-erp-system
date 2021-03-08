import { IProduct, ICategory } from '../../interfaces';

export interface ITableProps {
  children?: React.ReactNode;
  filterString: string;
  products: IProduct[];
  categories: ICategory[];
  onProductChangePrice: any;
  onProductDelete: any;
}
