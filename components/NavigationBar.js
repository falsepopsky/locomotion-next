import styled from 'styled-components';
import Image from 'next/image';

const NavigationBar = styled.nav`
  width: 100%;
  height: 64px;
  display: flex;
  flex-flow: row nowrap;
  background: #000000;
`;

const Navigation = () => {
  return (
    <NavigationBar>
      <Image
        alt="Locomotion Logo"
        src="/logo_white.png"
        width={272}
        height={64}
      />
    </NavigationBar>
  );
};

export default Navigation;
