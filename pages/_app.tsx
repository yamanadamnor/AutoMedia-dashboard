import React from 'react';
import type { AppProps } from 'next/app';
import ReactDOM from 'react-dom/client';
import App from '.';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
