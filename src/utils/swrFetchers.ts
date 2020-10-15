export const Productsfetcher = (url: string) =>
  fetch(url).then((r) => r.json());

export const Categoriesfetcher = (url: string) =>
  fetch(url).then((r) => r.json());
