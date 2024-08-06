import { useParams } from "react-router-dom";
import Layout from "../containers/Layout";

const ContactDetail = () => {
  const { id } = useParams();
  return (
    <Layout>
      <h1>Contact ID: {id}</h1>
    </Layout>
  );
};

export default ContactDetail;
