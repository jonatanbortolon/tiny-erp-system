import { ICategory } from '../../interfaces';

export default async function Categoriesfetcher(
  url: string
): Promise<ICategory[]> {
  const response = await (await fetch(url)).json();

  return response as ICategory[];
}
