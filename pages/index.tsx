import { Pane, Portal, Text } from 'evergreen-ui';

import Layout from '@components/Layout';
import Login from '@components/Login';
import initFirebase, { isProduction } from '@utils/firebase';
import FullPageSpinner from '@components/FullPageSpinner';
import AuthenticatedApp from '@components/App/AuthenticatedApp';
import { useUser } from '@context/userContext';

initFirebase();

const RouteToRender = () => {
  const { loadingUser, user } = useUser();

  if (loadingUser) {
    return <FullPageSpinner />;
  }

  return user ? <AuthenticatedApp /> : <Login />;
};

export default function IndexPage() {
  return (
    <Layout title="Chris Will Email You">
      <RouteToRender />
      {!isProduction && (
        <Portal>
          <Pane
            position="fixed"
            bottom={0}
            right={0}
            padding={8}
            margin={12}
            elevation={2}
          >
            <Text color="red">Development Mode</Text>
          </Pane>
        </Portal>
      )}
    </Layout>
  );
}
