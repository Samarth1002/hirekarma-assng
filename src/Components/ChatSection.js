import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import ChatPeople from "./ChatPeople";
import ChatPersonal from "./ChatPersonal";

const ChatSection = () => {
  const [person, setPerson] = useState('');

  const presonalChat = (item) => {
    console.log(item);
    setPerson(item);
  };

  return (
    <div className="chat-section">
      <Row>
        <Col md="4">
          <ChatPeople presonalChat={presonalChat} />
        </Col>
        <Col md="8">
          <ChatPersonal personal={person} />
        </Col>
      </Row>
    </div>
  );
};

export default ChatSection;
