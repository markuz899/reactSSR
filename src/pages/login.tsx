import Layout from "../containers/Layout";

const Login = ({ global }: any) => {
  const { sections } = global;
  return (
    <Layout>
      <h1>Login</h1>
      <div>
        {sections?.map((el: any) => {
          return <div key={el.sectionName}>{el.sectionName}</div>;
        })}
      </div>
    </Layout>
  );
};

export default Login;
