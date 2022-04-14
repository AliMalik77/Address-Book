import React from "react";
import { Card, Typography } from "antd";
const { Meta } = Card;
const { Title } = Typography;
import Modaal from "../modal/Modal";
const Cards = ({ data }) => {
  const { picture, name, login, email } = data;
  const { first, last } = name;
  const { username, password } = login;

  const { location, phone, cell } = data;
  const { city, street, state, postcode } = location;

  const new_data = {
    name,
    phone,
    cell,
    city,
    street,
    state,
    postcode,
  };
  return (
    <div className="card">
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={picture?.large} />}
      >
        <Title level={5}>{first}</Title>
        <Title level={5}>{last}</Title>
        <Title level={5}>{username}</Title>
        <Title level={5}>{email}</Title>
        <Modaal data={new_data} />
      </Card>
    </div>
  );
};

export default Cards;
