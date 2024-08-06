import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Layout = ({ children }: any) => {
  return (
    <Flex>
      <Page>
        <Main>
          <div>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/">Homepage</Link>
              <Link to="/contact">Contatti</Link>
              <Link to="/contact/123">Contatti id</Link>
            </nav>
          </div>
          <Body>{children}</Body>
          <div>Footer</div>
        </Main>
      </Page>
    </Flex>
  );
};

export default React.memo(Layout);

const Flex = styled.div`
  display: flex;
  height: 100%;
  min-width: 360px;
`;
const Page = styled.div`
  width: 100%;
  height: 100%;
`;
const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: auto;
  transition: 1s;
  width: 100%;
  height: 100%;
  margin: 0;
`;
const Main = styled.div`
  position: relative;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .footer {
    background: pink;
    height: 80px;
  }
`;
