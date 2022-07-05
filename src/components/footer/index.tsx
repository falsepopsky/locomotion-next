import { Science } from '../svgs/science';
import { ContainerF, Hr, Information, MenuF, WrapperF } from './styles';

const Footer = () => {
  return (
    <ContainerF>
      <Hr />
      <WrapperF>
        <MenuF>
          <Information>Locomotion TV NEXT 2021-2022</Information>
        </MenuF>
        <MenuF science>
          <Science />
        </MenuF>
      </WrapperF>
    </ContainerF>
  );
};

export default Footer;
