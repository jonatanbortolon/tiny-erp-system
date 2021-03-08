import { IProduct } from '../../interfaces';

export default async function Productsfetcher(
  url: string
): Promise<IProduct[]> {
  const response = await (await fetch(url)).json();

  return response as IProduct[];
}
