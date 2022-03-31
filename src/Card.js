import React from "react";
import { Card, Avatar, Row, Col } from "antd";
const { Meta } = Card;

const Cards = (props) => {
  console.log("props data is ....", props);
  console.log("email data is ....", props.data.email);

  return (
    <div className="card-data">
      {/* <Row>
        <Col span={8}> */}
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={props.data.picture.large} />}
      >
        <li>
          <h4>{props.data.name.first}</h4>
          <h4>{props.data.name.last}</h4>
          <h4>{props.data.login.username}</h4>
          <h4>{props.data.email}</h4>
        </li>
      </Card>
      {/* </Col>
      </Row> */}
    </div>
  );
};

export default Cards;
