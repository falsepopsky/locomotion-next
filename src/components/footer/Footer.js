import { Footer, Hr, Container, Information, Category } from './Footer.styles';
import { Science } from '../svgs/Svgs';

const Foot = () => {
  return (
    <Footer>
      <Hr />
      <Container>
        <Category>
          <Information>Locomotion TV NEXT 2021-2022</Information>
        </Category>
        <Category science>
          <Science />
        </Category>
      </Container>
    </Footer>
  );
};

export default Foot;
