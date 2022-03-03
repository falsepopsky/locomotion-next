import styled from 'styled-components';

export const Footer = styled.footer`
  margin-top: auto;
  padding: 1.5vh 2vw;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  font-weight: 300;
  font-size: 14px;
`;

export const Hr = styled.hr`
  margin: 1em 0 1.5em;
  width: 100%;
`;

export const Container = styled.section`
  display: flex;
  flex-flow: row nowrap;
`;

export const Category = styled.div`
  max-width: 200px;
  min-width: 200px;
  align-self: center;
  margin-left: ${({ science }) => (science ? 'auto' : null)};
`;

export const Information = styled.p`
  margin: 0;
  padding: 0;

  ::selection {
    text-shadow: none;
    color: rgb(11, 11, 11);
    background: rgb(214, 214, 214) none repeat scroll 0% 0%;
  }
`;
