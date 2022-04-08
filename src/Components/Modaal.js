import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Typography } from "antd";
const { Title } = Typography;
const Modaal = ({ data }) => {
  const { location, phone, cell } = data;
  const { city, street, state, postcode } = location;
  const { number, name } = street;
  // console.log("data fetched from props ................>>>>>>>>>>.", data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        View Details
      </Button>
      <Modal
        title="User Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Title level={5}>{name}</Title>
        <Title level={5}>{city}</Title>
        <Title level={5}>{state}</Title>
        <Title level={5}>{postcode}</Title>
        <Title level={5}>{phone}</Title>
        <Title level={5}>{cell}</Title>
      </Modal>
    </div>
  );
};

export default Modaal;
