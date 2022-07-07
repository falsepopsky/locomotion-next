import { ContainerF, Hr, Information, MenuF, WrapperF } from './styles';
import { Science } from './svg';

const Footer = () => {
  return (
    <ContainerF>
      <Hr />
      <WrapperF>
        <MenuF>
          <Information>Locomotion TV NEXT 2021-2022</Information>
        </MenuF>
        <MenuF>
          <Science />
        </MenuF>
      </WrapperF>
    </ContainerF>
  );
};

export default Footer;
