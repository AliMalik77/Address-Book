import React from "react";
import Navbar from "../Components/Layout/Navbar";
import Search from "../Components/Search";
import Users from "../Components/Users";
import Layout from "../Components/Layout/layout.js";
const Home = () => {
  return (
    <>
      <Layout>
        <Search />
        <Users />
      </Layout>
    </>
  );
};

export default Home;
