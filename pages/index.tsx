import Layout from '@components/Layout';
import Login from '@components/Login';
import initFirebase, { isProduction } from '@utils/firebase';
import FullPageSpinner from '@components/FullPageSpinner';
import AuthenticatedApp from '@components/App/AuthenticatedApp';
import { useUser } from '@context/userContext';
import { Pane, Portal, Text } from 'evergreen-ui';

initFirebase();

export default function IndexPage() {
  const { loadingUser, user } = useUser();

  return (
    <Layout title="Chris Will Email You">
      {loadingUser ? (
        <FullPageSpinner />
      ) : !user ? (
        <Login />
      ) : (
        <AuthenticatedApp />
      )}
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
