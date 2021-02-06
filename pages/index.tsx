import Layout from '@components/Layout';
import Login from '@components/Login';
import initFirebase from '@utils/firebase';
import FullPageSpinner from '@components/FullPageSpinner';
import { useUser } from '@context/userContext';

initFirebase();

export default function IndexPage() {
  const { loadingUser, user } = useUser();

  return (
    <Layout title="Chris Will Email You">
      {loadingUser && <FullPageSpinner />}
      {!loadingUser && !user && <Login />}
    </Layout>
  );
}
