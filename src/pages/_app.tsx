import Navigation from 'component/navbar/index';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  const handleStart = () => {
    NProgress.start();
  };
  const handleStop = () => {
    NProgress.done();
  };

  return (
    <>
      <Navigation />
      <AnimatePresence mode='wait' initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}
