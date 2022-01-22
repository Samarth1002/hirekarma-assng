import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
import {
  Input,
  InputGroup,
  ListGroupItem,
  InputGroupText,
  ListGroup,
  Col,
  Row,
} from "reactstrap";

import { ImEqualizer } from "react-icons/im";

import NameData from "../Data/NameData";

const ChatPeople = () => {
  const [searchPeople, setSearchPeople] = useState();

  return (
    <>
      <div className="chat-people">
        {" "}
        <div className="CP-cnt">
          <div>Chat</div>
          <div>
            <span>
              <ImEqualizer />
            </span>
            sort
          </div>
        </div>
        <div>
          <InputGroup>
            <InputGroupText>S-logo</InputGroupText>
            <Input
              type="text"
              id="CP-search"
              value={searchPeople}
              placeholder="Search"
              onChange={(e) => {
                setSearchPeople(e.target.value);
              }}
            />
          </InputGroup>
        </div>
        <div className="people-section-div">
          {NameData.map((item, index) => (
            <Row key={index} className="d-flex">
              <ListGroup row="true">
                <ListGroupItem row="true" width="300px" height="700px">
                  <div className="people-cnt-div">
                    <div className="people-image-div">
                      <Col sm="1">
                        <img src={item.pic} className="people-img" />
                      </Col>
                    </div>
                    <div className="people-info-div">
                      <Col sm="11">
                        <div className="people-list">
                          <div className="people-name">{item.name}</div>
                          <div className="people-time">{item.time}</div>
                        </div>

                        <div className="people-list">
                          <div className="people-msg">{item.msg}</div>
                          <div className="people-online">{item.msgCount}</div>
                        </div>
                      </Col>
                    </div>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Row>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatPeople;
