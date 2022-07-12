// Libs
import { fetcher } from '@utils/fetcher';
import { formatTime } from '@utils/luxonModule';
import useSWRImmutable from 'swr/immutable';

// Component
import type { DayProps } from '../../interfaces';
import Slider from '../carrousel';
import { Spinner } from '../spinner';
import { ContainerDay, DayName, SmallCard, TextCard, WrapperSlider } from './styles';

const Week = () => {
  const URL_GUIDE = '/api/guide/';

  const { data, error } = useSWRImmutable<DayProps[]>(URL_GUIDE, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <Spinner />;

  return (
    <WrapperSlider>
      <Slider>
        {data?.map((days) => {
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
