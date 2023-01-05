import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import '../styles/global.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{session: Session}>) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <SessionProvider session={session}>
        <Component {...pageProps}/>
      </SessionProvider>
    </>
  );
}

export default MyApp;
