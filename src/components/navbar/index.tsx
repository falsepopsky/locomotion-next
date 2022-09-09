import Link from 'next/link';
import { NavLink, StyledLink } from '../link';
import { ItemNav, NavBar } from './styles';
import { LocomotionSVG } from './svg';

const Navigation = () => (
  <NavBar>
    <ItemNav>
      <Link href='/' passHref>
        <StyledLink svg>
          <LocomotionSVG />
        </StyledLink>
      </Link>
    </ItemNav>
    <ItemNav>
      <NavLink href='/programacion' content='Programacion' />
      <NavLink href='/about' content='About' />
    </ItemNav>
  </NavBar>
);

export default Navigation;
