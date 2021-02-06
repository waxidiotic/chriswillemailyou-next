import Layout from '@components/Layout';
import Login from '@components/Login';
import initFirebase from '@utils/firebase';
import FullPageSpinner from '@components/FullPageSpinner';
import AuthenticatedApp from '@components/App/AuthenticatedApp';
import { useUser } from '@context/userContext';

initFirebase();

export default function IndexPage() {
  const { loadingUser, user } = useUser();
  console.log(user);

  return (
    <Layout title="Chris Will Email You">
      {loadingUser ? (
        <FullPageSpinner />
      ) : !user ? (
        <Login />
      ) : (
        <AuthenticatedApp />
      )}
    </Layout>
  );
}
