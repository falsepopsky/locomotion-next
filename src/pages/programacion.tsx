import Footer from '@/component/footer';
import Meta from '@/component/head';
import Motion from '@/component/motion';
import { loadShows } from '@/utils/loadShows';
import { formatTime } from '@/utils/luxonModule';

import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { DayProps } from '../interfaces';

function Programacion({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Motion>
      <Meta
        title={'Programacion semanal'}
        keywords={'Horarios, Programacion, Locomotion, Anime, TV, TV Online, Gratis, 90s'}
        description={'Programación semanal de Locomotion TV'}
      />
      <main className='flex h-full flex-col flex-nowrap gap-y-20 px-[4vw]'>
        <h2 className='mt-8'>Programación semanal</h2>
        <div className='flex w-full touch-auto flex-row flex-nowrap gap-x-10 overflow-x-auto pb-8'>
          {data?.map((days) => {
            return (
              <div
                className='flex min-w-[200px] max-w-[230px] select-none flex-col flex-nowrap gap-y-6 overflow-hidden'
                key={days.id}
              >
                <p className='pointer-events-none mb-8 bg-zinc-900 text-lg text-zinc-300 dark:bg-zinc-300 dark:text-zinc-900'>
                  {days.day}
                </p>

                {days.series.map((serie) => {
                  const start = formatTime(serie.starts);
                  const end = formatTime(serie.ends);

                  return (
                    <div
                      className='flex flex-col flex-nowrap gap-y-2 border-l-2 border-l-slate-900 pl-2 font-light hover:border-l-blue-700 dark:border-l-inherit'
                      key={serie.id}
                    >
                      <p className='text-xs'>
                        {start} - {end}
                      </p>

                      <p className='font-normal sm:text-lg'>{serie.show.name}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </Motion>
  );
}

export const getStaticProps: GetStaticProps<{ data: DayProps[] }> = async () => {
  let data: DayProps[] | undefined;

  try {
    data = await loadShows();
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

export default Programacion;
