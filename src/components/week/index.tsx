// Libs
import { fetcher } from '@utils/fetcher';
import { formatTime } from '@utils/luxonModule';
import useSWRImmutable from 'swr/immutable';

// Component
import Slider from '../carrousel';
import { Spinner } from '../spinner';
import { ContainerDay, DayName, SmallCard, TextCard, WrapperSlider } from './styles';

type DayProps = {
  id: number;
  day: string;
  series: Array<Series>;
};

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

const Week = () => {
  const URL_GUIDE = '/api/guide/';

  const { data, error } = useSWRImmutable(URL_GUIDE, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <Spinner />;

  return (
    <WrapperSlider>
      <Slider>
        {data?.map((days: DayProps) => {
          return (
            <ContainerDay key={days.id}>
              <DayName>{days.day}</DayName>

              {days.series.map((serie) => {
                const start = formatTime(serie.starts);
                const end = formatTime(serie.ends);

                return (
                  <SmallCard key={serie.id}>
                    <TextCard time>
                      {start} - {end}
                    </TextCard>

                    <TextCard>{serie.show.name}</TextCard>
                  </SmallCard>
                );
              })}
            </ContainerDay>
          );
        })}
      </Slider>
    </WrapperSlider>
  );
};

export default Week;
