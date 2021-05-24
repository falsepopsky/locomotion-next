import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
        rel="stylesheet"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Locomotion TV',
  keywords: 'Locomotion, Anime, TV',
  description:
    'Locomotion TV creado por fans que busca revivir el mítico canal de 24 horas diarias de diversos géneros de animaciones para adultos',
};

export default Meta;