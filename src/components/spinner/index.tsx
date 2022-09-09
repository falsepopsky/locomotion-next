import styled, { keyframes } from 'styled-components';

const spinnerRotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  content: '';
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-color: #01f1e3 #01f1e34d;
  animation: ${spinnerRotate} 0.7s ease infinite;
  align-self: center;
`;
