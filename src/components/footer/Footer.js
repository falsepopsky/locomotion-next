import { Footer, Information, Category } from './Footer.styles';
import { Science } from '../svgs/Svgs';

const Foot = () => {
  return (
    <Footer>
      <Category>
        <Information>Produced and developed by Science Department</Information>
      </Category>
      <Category>
        <Science />
      </Category>
    </Footer>
  );
};

export default Foot;
