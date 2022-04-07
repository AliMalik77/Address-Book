import React from "react";
import { Card, Avatar, Row, Col, Typography } from "antd";
const { Meta } = Card;
const { Title } = Typography;
import Modaal from "./Modaal";
const Cards = ({ data }) => {
  const { picture, name, login, email } = data;
  const { first, last } = name;
  const { username, password } = login;
  console.log("props card ....>>>>>>>>>", picture);
  return (
    <div style={{ marginTop: "20px" }}>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={picture.large} />}
      >
        <Title level={5}>{first}</Title>
        <Title level={5}>{last}</Title>
        <Title level={5}>{username}</Title>
        <Title level={5}>{email}</Title>
        <Modaal data={data} />
      </Card>
    </div>
  );
};

export default Cards;
