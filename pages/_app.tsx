import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import ReactDOM from 'react-dom/client';
import App from '.';
import '../styles/global.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

    </>
  );
}

export default MyApp;
