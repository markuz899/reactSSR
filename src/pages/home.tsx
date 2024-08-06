import { Button } from "tenantuikit";
import Layout from "../containers/Layout";

const Home = ({ global }: any) => {
  const { sections } = global;
  return (
    <Layout>
      <h1>Home</h1>
      <Button label="from tenant ui kit" />
      <div>
        {sections?.map((el: any) => {
          return <div key={el.sectionName}>{el.sectionName}</div>;
        })}
      </div>
    </Layout>
  );
};

export default Home;
