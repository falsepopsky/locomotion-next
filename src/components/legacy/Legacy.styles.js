import styled from 'styled-components';

export const BoxSection = styled.section`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  margin: ${({ img }) => (img ? '6vh 0 2vh' : null)};
  padding: ${({ img }) => (img ? null : '2vh 0')};
  height: ${({ img }) => (img ? '200px' : null)};
`;

export const StyledH3 = styled.h3`
  font-weight: 500;
  letter-spacing: 0.024em;

  &::selection {
    text-shadow: none;
    color: rgb(11, 11, 11);
    background: rgb(214, 214, 214) none repeat scroll 0% 0%;
  }
`;
