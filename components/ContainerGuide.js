import styled from 'styled-components';
import GuideCard from './GuideCard';

const GuideTV = styled.section`
  height: 35vh;
`;

const CardTable = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  overflow: hidden auto;
  scrollbar-color: #73ffca #dd0d0d00;
  scrollbar-width: thin;
  background: #1e2023;
  padding: 2vh 0;
`;

const ContainerGuide = () => {
  return (
    <GuideTV>
      <CardTable>
        <GuideCard
          image={'cowboy_bebop.jpg'}
          name={'Cowboy Bebop'}
          sinopsis={'baqueros'}
        />
        <GuideCard
          image={'critic.jpeg'}
          name={'The Critic'}
          sinopsis={'critico'}
        />
        <GuideCard
          image={'evangelion.webp'}
          name={'Evangelion'}
          sinopsis={'mechas'}
        />
      </CardTable>
    </GuideTV>
  );
};

export default ContainerGuide;
