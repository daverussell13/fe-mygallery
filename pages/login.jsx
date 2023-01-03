import Header from "../components/Layouts/Header";
import LoginForm from "../components/Auth/LoginForm";
import Banner from "../components/Auth/Banner";
import Layout from "../components/Auth/Layout";

export default function Login() {
  return (
    <>
      <Header />
      <Layout>
        <LoginForm />
        <Banner />
      </Layout>
    </>
  );
}
