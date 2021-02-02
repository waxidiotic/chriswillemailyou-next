import Layout from '../components/Layout';
import Login from '../components/login';
import { useUser } from '../context/userContext';
import { initFirebase } from '../utils/firebase';

initFirebase();

const IndexPage = () => {
  const { loadingUser, user } = useUser();

  return (
    <Layout title="Chris Will Email You">
      {!loadingUser && !user ? <Login /> : <p>Logged in</p>}
    </Layout>
  );
};

export default IndexPage;
