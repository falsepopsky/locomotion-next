import styled from 'styled-components';

export const BoxSection = styled.section`
  padding: 2vh 0;
  position: relative;
  height: ${(props) => (props.img ? '200px' : null)};
`;
