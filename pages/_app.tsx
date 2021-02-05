import { FC } from 'react';

import UserProvider from '@context/userContext';

export default function App({
  Component,
  pageProps,
}: {
  Component: FC;
  pageProps: {};
}) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
