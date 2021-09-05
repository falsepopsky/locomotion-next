import Image from 'next/image';
import { BoxSection } from './Legacy.styles';

const Legacy = () => {
  return (
    <>
      <BoxSection img>
        <Image
          alt="Locomotion logo"
          src="/logo_white.png"
          layout="fill"
          objectFit="contain"
        />
      </BoxSection>
      <BoxSection>
        <p>my soul, my life</p>
      </BoxSection>
    </>
  );
};

export default Legacy;
