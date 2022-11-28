import Meta from '@/component/head';
import Motion from '@/component/motion';
/* import Image from 'next/image';
const Timer: React.FunctionComponent<React.SVGAttributes<SVGElement>> = () => (
  <svg x='0px' y='0px' viewBox='0 0 32 32' width={20} height={20} fill='currentColor' className='timer-svg'>
    <title>time</title>
    <path d='M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z' />
    <polygon points='20.59 22 15 16.41 15 7 17 7 17 15.58 22 20.59 20.59 22' />
  </svg>
); */
import { Spinner } from '@/component/spinner';

export default function Funciona() {
  return (
    <Motion>
      <Meta />
      <main className='h-[calc(100vh-_54px)]'>
        <div className='relative flex h-[calc(-54px+65vh)] w-full justify-center bg-[#fff] dark:bg-neutral-800'>
          PLAYER
        </div>

        <div className='flex h-[35vh] flex-col flex-nowrap items-center justify-center'>
          <div className='flex h-full w-full flex-col flex-nowrap gap-y-8 overflow-y-auto overflow-x-hidden py-[2vh] px-[2vw]'>
            {/*             <div className='flex max-h-[156px] min-h-[156px] flex-row flex-nowrap gap-x-4'>
              <div className='relative h-full min-w-[102px] max-w-[102px]'>
                <Image
                  className='rounded-lg object-fill'
                  alt='Locomotion logo'
                  src='/banners/animafilms.webp'
                  fill
                  sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw'
                />
              </div>
              <div className='flex flex-col flex-nowrap justify-evenly rounded-lg bg-neutral-800/60 px-2 hover:shadow-lg sm:px-4'>
                <div className='flex gap-x-4'>
                  <p className='sm:text-2xl'>El Baron Rojo</p>{' '}
                  <p className='flex items-center gap-x-2 rounded-md bg-neutral-900 p-1 text-sm'>
                    <Timer />
                    07:00 - 07:30
                  </p>
                </div>
                <p className='max-h-[60px] min-h-[60px] overflow-auto font-light leading-relaxed'>
                  La historia comienza con el intento de rapto de Sally, una programadora de robots, quien ha creado una
                  perfecta máquina cibernética conocida como el Barón Rojo. Bajo la dirección de Kent como piloto, el
                  Barón Rojo gana el título mundial de luchador metálico. Poseída por un arrebato de envidia, La Máscara
                  de Hierro envía a sus luchadores metálicos a destruirlo. Así, la batalla más grande de todas comienza
                  entre las fuerzas del mal y el Barón Rojo, defensor a ultranza de la paz y de la justicia.
                </p>
              </div>
            </div>
            <div className='flex max-h-[156px] min-h-[156px] flex-row flex-nowrap gap-x-4'>
              <div className='relative h-full min-w-[102px] max-w-[102px]'>
                <Image
                  className='rounded-lg object-fill'
                  alt='Locomotion logo'
                  src='/banners/animafilms.webp'
                  fill
                  sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw'
                />
              </div>
              <div className='flex flex-col flex-nowrap justify-evenly rounded-lg bg-neutral-800/60 px-2 hover:shadow-lg sm:px-4'>
                <div className='flex gap-x-4'>
                  <p className='sm:text-2xl'>El Baron Rojo</p>{' '}
                  <p className='flex items-center gap-x-2 rounded-md bg-neutral-900 p-1 text-sm'>
                    <Timer />
                    07:00 - 07:30
                  </p>
                </div>
                <p className='max-h-[60px] min-h-[60px] overflow-auto font-light leading-relaxed'>
                  La historia comienza con el intento de rapto de Sally, una programadora de robots, quien ha creado una
                  perfecta máquina cibernética conocida como el Barón Rojo. Bajo la dirección de Kent como piloto, el
                  Barón Rojo gana el título mundial de luchador metálico. Poseída por un arrebato de envidia, La Máscara
                  de Hierro envía a sus luchadores metálicos a destruirlo. Así, la batalla más grande de todas comienza
                  entre las fuerzas del mal y el Barón Rojo, defensor a ultranza de la paz y de la justicia.
                </p>
              </div>
            </div> */}

            <Spinner />
          </div>
        </div>
      </main>
    </Motion>
  );
}
