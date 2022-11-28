import Image from 'next/image';
import type { ShowCardProps } from '../../interfaces';
import { Timer } from './svg';

const ShowCard = ({ name, image, sinopsis, starts, ends }: ShowCardProps) => {
  return (
    <div className='flex max-h-[156px] min-h-[156px] flex-row flex-nowrap gap-x-4'>
      <div className='relative h-full min-w-[102px] max-w-[102px]'>
        <Image
          className='rounded-lg object-fill'
          alt={name}
          src={'/banners/' + image}
          fill
          sizes='(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw'
        />
      </div>
      <div className='flex w-full flex-col flex-nowrap justify-evenly rounded-lg bg-neutral-800/60 px-2 hover:shadow-lg sm:px-4'>
        <div className='flex gap-x-4'>
          <p className='sm:text-2xl'>{name}</p>{' '}
          <p className='flex items-center gap-x-2 rounded-md bg-neutral-900 p-1 text-sm'>
            <Timer />
            {starts} - {ends}
          </p>
        </div>
        <p className='max-h-[60px] min-h-[60px] overflow-auto font-light leading-relaxed'>{sinopsis}</p>
      </div>
    </div>
  );
};

export default ShowCard;
