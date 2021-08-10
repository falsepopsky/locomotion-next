import styled from 'styled-components';

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 54px;
`;

export const ControlsWrapper = styled.div`
  height: 100%;
  margin: 0;
  padding: 0 2vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  opacity: 0;

  :hover {
    opacity: 1;
  }
`;

export const BtnControl = styled.button`
  margin: 0;
  padding: 4px;
  width: auto;
  min-width: 28px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  border-radius: 0.4rem;

  &:hover {
    background: hsla(0, 0%, 100%, 0.2);
  }
`;
