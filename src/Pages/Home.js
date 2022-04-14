import React from "react";
import Search from "../Components/search/Search";
import Users from "../Components/users/Users";
import Layout from "../Components/layout/Layoutwrap.js";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const { user } = useSelector((state) => state.app);
  return (
    <Layout>
      <Search data={user} />
      <Users />
    </Layout>
  );
};

export default Home;
