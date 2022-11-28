import Meta from '@/component/head';
import Motion from '@/component/motion';
import dynamic from 'next/dynamic';
const Player = dynamic(() => import('@/component/hls'), { ssr: false });
const ContainerGuide = dynamic(() => import('@/component/guide'));

export default function Home() {
  return (
    <Motion>
      <Meta />
      <main className='h-[calc(100vh-_54px)]'>
        <div className='relative flex h-[calc(-54px+65vh)] w-full justify-center bg-[#fff] dark:bg-neutral-800'>
          <Player src={process.env.NEXT_PUBLIC_LOCOMOTION_STREAM!} controls width={'100%'} height={'100%'} />
        </div>

        <div className='flex h-[35vh] flex-col flex-nowrap items-center justify-center'>
          <div className='flex h-full w-full flex-col flex-nowrap gap-y-8 overflow-y-auto overflow-x-hidden py-[2vh] px-[2vw]'>
            <ContainerGuide />
          </div>
        </div>
      </main>
    </Motion>
  );
}
