import styled from 'styled-components';
import Link from 'next/link';
import { LocomotionSVG } from '../svgs/Svgs';

const NavigationBar = styled.nav`
  padding: 0 2vw;
  width: 100%;
  height: 54px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: auto;
  height: 54px;
`;

const RoutesContainer = styled.div`
  margin-left: auto;
`;

const StyledLink = styled.a`
  padding: 0;
  margin: 0 0.5em;
  text-decoration: none;
  opacity: 1;
  color: rgb(129, 230, 217);

  &:hover {
    opacity: 0.7;
  }
`;

const Navigation = () => {
  return (
    <NavigationBar>
      <LogoContainer>
        <Link href="/" passHref>
          <a>
            <LocomotionSVG />
          </a>
        </Link>
      </LogoContainer>
      <RoutesContainer>
        <Link href="/horarios" passHref>
          <StyledLink>Horarios</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>Acerca de</StyledLink>
        </Link>
      </RoutesContainer>
    </NavigationBar>
  );
};

export default Navigation;
