import Layout from '../components/Layout';
import Login from '../components/login';
import { initFirebase } from '../utils/firebase';

initFirebase();

const IndexPage = () => (
  <Layout title="Chris Will Email You">
    <Login />
  </Layout>
);

export default IndexPage;
