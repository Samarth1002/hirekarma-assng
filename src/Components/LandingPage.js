import React from "react";
import { Row, Col } from "reactstrap";
import ChatPeople from "./ChatPeople";

const LandingPage = () => {
  return (
    <div>
      <Row>
        <Col md="4">
          <ChatPeople />
        </Col>
        <Col md="8"></Col>
      </Row>
    </div>
  );
};

export default LandingPage;
