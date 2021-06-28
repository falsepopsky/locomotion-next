import styled from 'styled-components';
import ShowCard from './show-card/ShowCard';
import useSWR from 'swr';
import { getTodayName, formatTime } from './../utils/luxonModule';
import { Spinner } from './loader/LoaderStyles';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log('se esta pidiendo los datos otra vez');
  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const ShowsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  overflow: hidden auto;
  scrollbar-width: thin;
  padding: 2vh 0;
`;

const ContainerGuide = () => {
  function useDay() {
    const nameOfTheCurrentDay = getTodayName();
    const URL_GUIDE = '/api/guide/' + nameOfTheCurrentDay;
    return useSWR(URL_GUIDE, fetcher, {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    });
  }

  const { data, error } = useDay();

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
