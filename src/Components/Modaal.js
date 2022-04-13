import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Typography } from "antd";
const { Title } = Typography;
const Modaal = ({ data }) => {
  const { location, phone, cell } = data;
  const { city, street, state, postcode } = location;
  const { name } = street;
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
    <>
      <Button type="primary" onClick={showModal}>
        View Details
      </Button>
      <Modal
        title={data.name.title + " " + data.name.first + " " + data.name.last}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Title level={5}>Street : {name}</Title>
        <Title level={5}>City : {city}</Title>
        <Title level={5}>State : {state}</Title>
        <Title level={5}>Postcode : {postcode}</Title>
        <Title level={5}>Phone : {phone}</Title>
        <Title level={5}>Cell : {cell}</Title>
      </Modal>
    </>
  );
};

export default Modaal;
