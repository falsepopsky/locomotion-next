// Libs
import { fetcher } from '@/utils/fetcher';
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
        return (
          <ShowCard
            key={serie.id}
            image={serie.show.cover}
            name={serie.show.name}
            sinopsis={serie.show.sinopsis}
            starts={serie.starts}
            ends={serie.ends}
          />
        );
      })}
    </>
  );
}
