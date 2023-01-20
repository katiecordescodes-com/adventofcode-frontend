import './globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Source_Code_Pro } from '@next/font/google';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={sourceCodePro.className}>
      <Head>
        <title>Advent of Code - katiecordescodes.com Solutions</title>
        <meta name="description" content="A fun hobby project where I code up the solutions for various Advent of Code puzzles using microservice architecture." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
