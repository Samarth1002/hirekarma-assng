import React from "react";
import { Row, Col } from "reactstrap";
import ChatSection from "./ChatSection";
import Sidebar from "./Sidebar";

const LandingPage = () => {
  return (
    <div>
      <Row className="m-0 p-0 ">
        <Col md="1" className="m-0 p-0">
          <Sidebar />
        </Col>
        <Col md="10" className="mx-4">
          <ChatSection />
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
