import { ContainerF, Hr, MenuF, WrapperF } from './styles';
import { Science } from './svg';

const Footer = () => (
  <ContainerF>
    <Hr />
    <WrapperF>
      <MenuF>
        <p>Locomotion Next 2021-2022</p>
      </MenuF>
      <MenuF>
        <Science />
      </MenuF>
    </WrapperF>
  </ContainerF>
);

export default Footer;
