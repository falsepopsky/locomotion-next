// Libs
import useSWRImmutable from 'swr';
import { getTodayName, formatTime } from '../../utils/luxonModule';
import { fetcher } from '../../utils/fetcher';

// Components
import { ShowsWrapper } from './Guide.styles';
import ShowCard from '../show-card/ShowCard';
import { Spinner } from '../loader/LoaderStyles';

const ContainerGuide = () => {
  const nameOfTheCurrentDay = getTodayName();
  const URL_GUIDE = '/api/guide/' + nameOfTheCurrentDay;

  const { data, error } = useSWRImmutable(URL_GUIDE, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <Spinner />;

  return (
    <ShowsWrapper>
      {data.shows.map((show) => {
        const formatedStart = formatTime(show.start);
        const formatedEnding = formatTime(show.ending);
        return (
          <ShowCard
            key={show.id}
            image={show.cover}
            name={show.name}
            sinopsis={show.sinopsis}
            start={formatedStart}
            ending={formatedEnding}
          />
        );
      })}
    </ShowsWrapper>
  );
};

export default ContainerGuide;
