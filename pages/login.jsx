import Header from "../components/Layouts/Header";
import MainLayout from "../components/Layouts/MainLayout";
import Layout from "../components/Auth/Layout";
import LoginForm from "../components/Auth/LoginForm";
import Banner from "../components/Auth/Banner";

export default function Login() {
  return (
    <>
      <Header />
      <MainLayout>
        <Layout>
          <LoginForm></LoginForm>
          <Banner></Banner>
        </Layout>
      </MainLayout>
    </>
  );
}
