import { Footer, Hr, Container, Information, Category } from './Footer.styles';
import { Science } from '../svgs/Svgs';

const Foot = () => {
  return (
    <Footer>
      <Hr />
      <Container>
        <Category>
          <Information>
            Produced and developed by Science Department
          </Information>
        </Category>
        <Category>
          <Science />
        </Category>
      </Container>
    </Footer>
  );
};

export default Foot;
