import React from "react";

import { Row, Col } from "react-materialize";

const Image = ({ image }) => {
  return (
    <Row>
      <Col>
        <img src={image} className="responsive-img materialboxed" />
      </Col>
    </Row>
  );
};

export default Image;
