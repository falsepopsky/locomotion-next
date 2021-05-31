import styled from 'styled-components';
import GuideCard from './GuideCard';
import { DateTime } from 'luxon';
import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const GuideTV = styled.section`
  height: 35vh;
`;

const CardTable = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  overflow: hidden auto;
  scrollbar-color: #73ffca #255348;
  scrollbar-width: thin;
  background: #1e2023;
  padding: 2vh 0;
`;

// Luxon

const Zone = 'America/Buenos_Aires';
const TodayName = DateTime.now().setZone(Zone).toFormat('cccc').toLowerCase();

const ContainerGuide = () => {
  const URL = '/api/guide/' + TodayName;
  const { data, error } = useSWR(() => URL, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <GuideTV>
      <CardTable>
        {data.data.map((dat) => {
          return (
            <GuideCard
              key={dat.id}
              image={dat.cover}
              name={dat.name}
              sinopsis={dat.sinopsis}
              start={DateTime.fromISO(dat.start).toFormat('T')}
              ending={DateTime.fromISO(dat.ending).toFormat('T')}
            />
          );
        })}
      </CardTable>
    </GuideTV>
  );
};

export default ContainerGuide;
