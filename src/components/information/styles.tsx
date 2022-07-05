import styled from 'styled-components';

type BoxProps = {
  img?: boolean;
};

export const BoxSection = styled.section<BoxProps>`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  margin: ${({ img }) => img && '6vh 0 2vh'};
  padding: ${({ img }) => (img ? null : '2vh 0')};
  height: ${({ img }) => img && '200px'};
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