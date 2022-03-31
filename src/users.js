import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Card";
import { Card, Avatar, Row, Col } from "antd";

const Users = () => {
  //   const url = "https://randomuser.me/api";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        setUsers(response.data.results);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>List of Users </h1>

      {console.log("user data ...", users)}
      <div>
        <div className="user-data">
          {users.map((item, index) => (
            <Cards data={users[index]} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
