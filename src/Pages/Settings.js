import React from "react";
import NationalityFilter from "../Components/settings/nationalityfilter/NationalityFilter";
import Layout from "../Components/home/layout/Layoutwrap";

const nationalities = ["CH", "ES", "FR", "GB"];

const Settings = () => {
  return (
    <Layout>
      <NationalityFilter data={nationalities} />
    </Layout>
  );
};

export default Settings;
