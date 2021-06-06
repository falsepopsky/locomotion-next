import styled, { css, keyframes } from 'styled-components';

const spinnerRotate = keyframes`  to {
  transform: rotate(360deg);
}`;

const animationSpinner = css`
  ${spinnerRotate} 0.7s ease infinite;
`;

export const Spinner = styled.div`
  content: '';
  width: 60px;
  height: 60px;
  margin: 0px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: #01f1e3;
  border-bottom-color: #01f1e3;
  animation: ${animationSpinner};
`;
