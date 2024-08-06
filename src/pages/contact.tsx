import { styled } from "tenantuikit";
import Layout from "../containers/Layout";
import theme from "../theme";

const Contact = ({ global }: any) => {
  const { sections } = global;
  return (
    <Layout>
      <h1>Contact page</h1>
      <Page>
        {sections?.map((el: any) => {
          return <div key={el.sectionName}>{el.sectionName}</div>;
        })}
      </Page>
    </Layout>
  );
};

export default Contact;

const Page = styled.div`
  border: 1px solid ${theme.colors.warning};
  background: ${({ theme }: any) => theme.primary};
  color: ${({ theme }: any) => theme.secondary};
`;
