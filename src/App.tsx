import React from "react";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import Content from "./common/Content/Content";
import Introduction from "./common/Introduction/Introduction";
import ContainerCard from "./container/ContainerCard";

import GlobalStyle, { Container } from "./styles/global";
import "./styles/font.css"

const App: React.FC = () => (
    <React.Fragment>
      <Container>
        <GlobalStyle />
          <Header />
          <Content>
            <React.Fragment>
              <Introduction />
              <ContainerCard />
            </React.Fragment>
          </Content>
        <Footer />
      </Container>   
    </React.Fragment>
);

export default App;
