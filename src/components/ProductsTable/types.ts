import { IProduct, ICategory } from '../../interfaces';

export interface ITableProps {
  children?: React.ReactNode;
  filterString: string;
  products: IProduct[];
  categories: ICategory[];
  onProductChange: any;
  onProductDelete: any;
}
