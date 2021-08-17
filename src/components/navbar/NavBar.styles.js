import styled from 'styled-components';

export const NavigationBar = styled.nav`
  padding: 0 2vw;
  width: 100%;
  height: 54px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: auto;
  height: 54px;
`;

export const RoutesContainer = styled.div`
  margin-left: auto;
`;

export const StyledLink = styled.a`
  padding: 0;
  margin: 0 0.5em;
  font-size: 14px;
  text-decoration: none;
  opacity: 1;
  color: #d9d9d9;

  &:hover {
    opacity: 0.7;
  }
`;
