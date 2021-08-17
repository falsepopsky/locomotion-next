import { SmallCard, TextCard } from './Week.style';

const Week = () => {
  return (
    <>
      <SmallCard>
        <TextCard time>14:00 - 15:00</TextCard>

        <TextCard>Evangelion</TextCard>
      </SmallCard>
      <SmallCard>
        <TextCard time>15:00 - 15:30</TextCard>

        <TextCard>Especial de Locomotion</TextCard>
      </SmallCard>
    </>
  );
};

export default Week;
