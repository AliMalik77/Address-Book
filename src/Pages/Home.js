import React from "react";
import Search from "../Components/search/Search";
import Users from "../Components/users/Users";
import Layout from "../Components/layout/Layoutwrap.js";
import { useSelector, useDispatch } from "react-redux";
import UserContainer from "../container/userContainer";

const Home = () => {
  const { user } = useSelector((state) => state.app);

  // const data = {
  //   user,
  //   filter,
  //   searchData,
  // };

  return (
    <Layout>
      <Search data={user} />
      <UserContainer />
      {/* <Users /> */}
    </Layout>
  );
};

export default Home;
