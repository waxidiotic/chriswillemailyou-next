import Layout from "../components/Layout";
import Login from "../components/login";

import "tailwindcss/tailwind.css";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Login />
  </Layout>
);

export default IndexPage;
