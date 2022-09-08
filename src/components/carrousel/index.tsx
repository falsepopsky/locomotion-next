import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ResponsiveType } from 'react-multi-carousel/lib/types';

type SliderProps = {
  children: React.ReactNode;
};

const Slider = (props: SliderProps) => {
  const breakpoints: ResponsiveType = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1048 },
      items: 4,
    },
    myTablet: {
      breakpoint: { max: 1048, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 520 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={breakpoints}
      deviceType={'desktop'}
      ssr
      removeArrowOnDeviceType={'mobile'}
      minimumTouchDrag={80}
      keyBoardControl={false}
      showDots
    >
      {props.children}
    </Carousel>
  );
};

export default Slider;
