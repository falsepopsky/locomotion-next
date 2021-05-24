import styled from 'styled-components';
import Meta from '../components/Meta';
import Player from '../components/Player';
import Navigation from '../components/NavigationBar';

const Title = styled.h1`
  font-size: 50px;
  font-family: 'Roboto';
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Meta />
      <Navigation />
      <Title>Locomotion</Title>

      <div style={{ width: '400px', height: '400px' }}>
        <Player />
      </div>
    </>
  );
}
