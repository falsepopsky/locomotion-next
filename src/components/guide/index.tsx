// Libs
import { fetcher } from '@utils/fetcher';
import { formatTime, getTodayName } from '@utils/luxonModule';
import useSWRImmutable from 'swr';

// Components
import ShowCard from '../show-card';
import { Spinner } from '../spinner';
import { ShowsWrapper } from './styles';

type Series = {
  id: number;
  starts: string;
  ends: string;
  show: {
    name: string;
    cover: string;
    sinopsis: string;
  };
};

const ContainerGuide = () => {
  const nameOfTheCurrentDay = getTodayName();
  const URL_GUIDE = '/api/guide/' + nameOfTheCurrentDay;

  const { data, error } = useSWRImmutable(URL_GUIDE, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <Spinner />;

  return (
    <ShowsWrapper>
      {data?.series?.map((serie: Series) => {
        const formatedStart = formatTime(serie.starts);
        const formatedEnding = formatTime(serie.ends);
        return (
          <ShowCard
            key={serie.id}
            image={serie.show.cover}
            name={serie.show.name}
            sinopsis={serie.show.sinopsis}
            start={formatedStart}
            ending={formatedEnding}
          />
        );
      })}
    </ShowsWrapper>
  );
};

export default ContainerGuide;
