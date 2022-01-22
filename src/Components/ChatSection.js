import React from "react";
import { Col, Row } from "reactstrap";
import ChatPeople from "./ChatPeople";
import ChatPersonal from "./ChatPersonal";

const ChatSection = () => {
  return (
    <div className="chat-section">
      <Row>
        <Col md="4">
          <ChatPeople />
        </Col>
        <Col md="8">
          <ChatPersonal />
        </Col>
      </Row>
    </div>
  );
};

export default ChatSection;
