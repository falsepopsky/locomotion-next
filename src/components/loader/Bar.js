import styled from 'styled-components';

export const Bar = styled.div`
  margin: 100px 0 0 100px;
  width: 100px;
  height: 2px;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #d9d9d9;
    transition: width 1s;
  }

  &:hover::after {
    width: 100%;
  }
`;
