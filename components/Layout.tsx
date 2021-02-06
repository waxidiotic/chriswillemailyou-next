import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function Layout({
  children,
  title = 'This is the default title',
}: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style>
          {`
            body {
              margin: 0;
            }
          `}
        </style>
      </Head>
      {children}
    </div>
  );
}
