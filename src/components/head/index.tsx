import Head from 'next/head';

type MetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
};

const Meta = ({
  title = 'Locomotion TV',
  keywords = 'Locomotion, Anime, TV',
  description = 'Locomotion TV creado por fans que busca revivir el mítico canal de 24 horas diarias de diversos géneros de animaciones para adultos',
}: MetaProps) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
