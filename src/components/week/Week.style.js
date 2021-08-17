import styled from 'styled-components';

export const ContainerDay = styled.div`
  min-width: 260px;
  max-width: 300px;
`;

export const SmallCard = styled.div`
  margin: 10px 0;
  padding-left: 12px;
  display: flex;
  flex-flow: column nowrap;
  border-left: 2px solid white;

  &:hover {
    border-color: blue;
  }
`;

export const TextCard = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ time }) => (time ? '#D9D9D9' : '#EFEFEF')};
  font-size: ${({ time }) => (time ? '12px' : '18px')};
  font-weight: 300;
`;
