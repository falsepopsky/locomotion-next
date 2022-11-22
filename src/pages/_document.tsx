import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='h-full w-full'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <body className='flex min-h-screen w-full flex-col flex-nowrap overflow-y-auto overflow-x-hidden bg-zinc-100 text-slate-900 dark:bg-neutral-900 dark:text-neutral-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
