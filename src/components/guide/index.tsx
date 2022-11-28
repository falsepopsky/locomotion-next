// Libs
import { fetcher } from '@/utils/fetcher';
import { formatTime } from '@/utils/luxonModule';
import useSWRImmutable from 'swr/immutable';

// Components
import type { DayProps } from '../../interfaces';
import ShowCard from '../show-card';
import { Spinner } from '../spinner';

export default function ContainerGuide() {
  const URL_GUIDE = '/api/day';

  const { data, error } = useSWRImmutable<DayProps>(URL_GUIDE, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <Spinner />;

  return (
    <>
      {data?.series?.map((serie) => {
        const formatedStart = formatTime(serie.starts);
        const formatedEnding = formatTime(serie.ends);
        return (
          <ShowCard
            key={serie.id}
            image={serie.show.cover}
            name={serie.show.name}
            sinopsis={serie.show.sinopsis}
            starts={formatedStart}
            ends={formatedEnding}
          />
        );
      })}
    </>
  );
}
