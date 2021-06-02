import styled from 'styled-components';
import Link from 'next/link';
import { LocomotionSVG } from '../svgs/Svgs';

const NavigationBar = styled.nav`
  width: 100%;
  height: 54px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 2vw;
`;

const LogoContainer = styled.div`
  width: auto;
  height: 54px;
`;

const RoutesContainer = styled.div`
  margin-left: auto;
`;

const StyledLink = styled.a`
  color: #1e2023;
  padding: 0.5em 1em;
  margin: 0 0.5em;
  text-decoration: none;
  border-radius: 10px;
  opacity: 1;
  background: rgb(129, 230, 217);

  &:hover {
    opacity: 0.7;
    border-radius: 10px;
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
          <StyledLink>About</StyledLink>
        </Link>
      </RoutesContainer>
    </NavigationBar>
  );
};

export default Navigation;
