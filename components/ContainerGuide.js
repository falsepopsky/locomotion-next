import styled from 'styled-components';
import ShowCard from './tv-card/ShowCard';
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

const CardTable = styled.div`
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
    <CardTable>
      {data.data.map((dat) => {
        const formatedStart = formatTime(dat.start);
        const formatedEnding = formatTime(dat.ending);
        return (
          <ShowCard
            key={dat.id}
            image={dat.cover}
            name={dat.name}
            sinopsis={dat.sinopsis}
            start={formatedStart}
            ending={formatedEnding}
          />
        );
      })}
    </CardTable>
  );
};

export default ContainerGuide;
