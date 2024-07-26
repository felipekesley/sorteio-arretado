export type AwardsProps = {
  id: string;
  slug: string;
  title: string;
  desc: string;
  date: string;
  cotas: string;
  image: string;
};

export type Cotas = {
  id: string;
  quantity: number;
  price: number;
  oldPrice: number;
};
