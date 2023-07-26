export type SearchParams = {
  title: string;
  pageNo?: number;
  size?: number;
  lowest?: number;
  highest?: number;
};

export type SearchItem = {
  id: string;
  title: string;
  link: string;
  image: string;
  lprice: number;
};
