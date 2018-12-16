import React, { Component } from "react";

import Navigation from "./navigation/senewebNavigation";
import PageDAcceuil from "./pageDAcceuil/senewebPageDAcceuil";
import { Row } from "react-materialize";
import Col from "react-materialize/lib/Col";

import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="">
          <Row>
            <Col s={12}>
              <Navigation />
            </Col>
          </Row>
          <PageDAcceuil />
        </div>
      </HashRouter>
    );
  }
}

export default App;
