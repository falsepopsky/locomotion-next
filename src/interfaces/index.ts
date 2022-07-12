export type DayProps = {
  id: number;
  day: string;
  series: Series[];
};

export type Series = {
  id: number;
  starts: string;
  ends: string;
  show: {
    name: string;
    cover: string;
    sinopsis: string;
  };
};

export type ShowCardProps = {
  name: string;
  image: string;
  sinopsis: string;
  starts: string;
  ends: string;
};
