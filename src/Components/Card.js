import React from "react";
import { Card, Avatar, Row, Col, Typography } from "antd";
const { Meta } = Card;
const { Title } = Typography;

const Cards = (props) => {
  // console.log("props data is ....", props);
  // console.log("email data is ....", props.data.email);

  return (
    <div style={{ marginTop: "20px" }}>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={props.data.picture.large} />}
      >
        <Title level={5}>{props.data.name.first}</Title>
        <Title level={5}>{props.data.name.last}</Title>
        <Title level={5}>{props.data.login.username}</Title>
        <Title level={5}>{props.data.email}</Title>
      </Card>
    </div>
  );
};

export default Cards;
