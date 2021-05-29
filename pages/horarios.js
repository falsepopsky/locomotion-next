import Meta from '../components/meta/Meta';
import Navigation from '../components/NavigationBar';
import { Main } from '../components/Styles';
import { useState } from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  border: 1px solid #ddd;
  background: rebeccapurple;
  color: white;
  padding: 15px;
  margin-bottom: 0;
`;

const Content = styled.div`
  border: 1px solid gray;
  border-top: none;
  opacity: ${(props) => (props.open ? '1' : '0')};
  max-height: ${(props) => (props.open ? '100%' : '0')};
  overflow: hidden;
  padding: ${(props) => (props.open ? '15px' : '0 15px')};
  transition: all 0.3s;

  p {
    margin: 0;
  }
`;

export default function Horarios() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open ? true : false);
  };

  return (
    <>
      <Meta
        title={'Horarios'}
        keywords={'Horarios, Locomotion, Anime, TV, TV Online, Gratis, 90s'}
        description={'Programación semanal de Locomotion TV'}
      />
      <Navigation />
      <Main>
        <p>pagina de horarios</p>

        <div>
          <Heading onClick={toggleOpen}>Click me to open</Heading>
          <Content open={open}>
            <p>Consider me opened!</p>
          </Content>
        </div>
      </Main>
    </>
  );
}
