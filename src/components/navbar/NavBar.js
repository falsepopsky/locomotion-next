import Link from 'next/link';
import { LocomotionSVG } from '../svgs/Svgs';
import {
  NavigationBar,
  LogoContainer,
  RoutesContainer,
  StyledLink,
} from './NavBar.styles';

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
        <Link href="/programacion" passHref>
          <StyledLink>Programación</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>Acerca de</StyledLink>
        </Link>
      </RoutesContainer>
    </NavigationBar>
  );
};

export default Navigation;
