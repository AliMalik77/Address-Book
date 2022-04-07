import React, { useState } from "react";
import { Modal, Button } from "antd";

const Modaal = ({ data }) => {
  const { location, phone, cell } = data;
  const { city, street, state, postcode } = location;
  const { number, name } = street;
  console.log("data fetched from props ................>>>>>>>>>>.", data);
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
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{name}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{postcode}</p>
        <p>{phone}</p>
        <p>{cell}</p>
      </Modal>
    </div>
  );
};

export default Modaal;
