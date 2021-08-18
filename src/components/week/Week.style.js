import styled from 'styled-components';

export const WrapperSlider = styled.div`
  width: 100%;
  z-index: 100;

  .react-multi-carousel-track {
    will-change: auto;
  }

  .react-multi-carousel-list {
    padding: 2em 0;
    margin: 1em 0;
  }

  .react-multi-carousel-dot button {
    border: none;
    &:hover {
      opacity: 0.6;
    }
  }
  .react-multi-carousel-dot--active button {
    background: blue;
  }
  .react-multiple-carousel__arrow {
    background: #f4f4f4;

    &::before {
      color: #1e1e1e;
    }
  }

  .react-multiple-carousel__arrow--right {
    top: 14px;
    right: calc(2% + 1px);
  }
  .react-multiple-carousel__arrow--left {
    top: 14px;
    right: calc(4% + 44px);
    left: unset;
  }

  .react-multiple-carousel__arrow:hover {
    opacity: 0.8;
  }
`;

export const ContainerDay = styled.div`
  margin-left: 4px;
  min-width: 200px;
  max-width: 230px;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
`;

export const DayName = styled.h3`
  margin: 2em 0;
  padding: 0 0 16px;
  font-weight: 400;
  border-bottom: 1px solid #e0ffd4;
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
