import styled from 'styled-components';

type MenuFooterProps = {
  science?: boolean;
};

const ContainerF = styled.footer`
  margin-top: auto;
  padding: 1.5vh 2vw;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  font-weight: 300;
  font-size: 14px;
`;

const Hr = styled.hr`
  margin: 1em 0 1.5em;
  width: 100%;
`;

const WrapperF = styled.section`
  display: flex;
  flex-flow: row nowrap;
`;

const MenuF = styled.div<MenuFooterProps>`
  max-width: 200px;
  min-width: 200px;
  align-self: center;
  margin-left: ${({ science }) => science && 'auto'};
`;

const Information = styled.p`
  margin: 0;
  padding: 0;

  ::selection {
    text-shadow: none;
    color: rgb(11, 11, 11);
    background: rgb(214, 214, 214) none repeat scroll 0% 0%;
  }
`;

export { ContainerF, Hr, WrapperF, MenuF, Information };
