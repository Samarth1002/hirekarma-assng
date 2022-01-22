import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";

const ChatPersonal = ({ personal }) => {
  return (
    <div className="chat-personal">
      <Container>
        <Card>
          <CardHeader>
            <div className="personal-header">
              <div className="personal-info">
                <div>
                  <img src={personal.pic} className="personal-img " />
                </div>
                <div className="mx-3">{personal.name}</div>
              </div>

              <div className="personal-info">
                <div>three dots</div>
                <div>times</div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </Container>
    </div>
  );
};

export default ChatPersonal;
