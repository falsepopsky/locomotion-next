import styled from 'styled-components';

const ContainerF = styled.footer`
  margin-top: auto;
  padding: 1.5vh 2vw;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 2em 0;
`;

const Hr = styled.hr`
  width: 100%;
`;

const WrapperF = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const MenuF = styled.div`
  max-width: 200px;
  min-width: 200px;
  align-self: center;
`;

export { ContainerF, Hr, WrapperF, MenuF };
