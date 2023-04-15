import Head from 'next/head';

type MetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
};

const MetaTags = {
  title: 'Locomotion Next',
  keywords: 'Locomotion, Anime, TV',
  description:
    'Locomotion TV creado por fans que busca revivir el mítico canal de 24 horas diarias de diversos géneros de animaciones para adultos',
};

const Meta = ({
  title = MetaTags.title,
  keywords = MetaTags.keywords,
  description = MetaTags.description,
}: MetaProps) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
