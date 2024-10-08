import Layout from "../containers/Layout";
import theme from "../theme";
import { Checkbox, Icon, Radio } from "../components";

const Home = ({ global }: any) => {
  const { sections } = global;

  return (
    <Layout>
      <h1>Home</h1>
      <Icon name="zoom" size={theme.spaces.space4} />
      <Checkbox
        name="terms"
        label="Checkbox label"
        onChange={(data: any) => console.log(data)}
      />
      <Radio
        name={"radio"}
        inline
        onChange={(data) => console.log(data)}
        options={[
          { label: "One", value: 1 },
          { label: "Two", value: 2 },
          { label: "Three", value: 3 },
        ]}
      />
      <div>
        {sections?.map((el: any) => {
          return <div key={el.sectionName}>{el.sectionName}</div>;
        })}
      </div>
    </Layout>
  );
};

export default Home;
