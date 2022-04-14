import React from "react";
import RadioButton from "../Components/radioButton/RadioButton";
import Layout from "../Components/layout/Layoutwrap.js";

const nationalities = ["CH", "ES", "FR", "GB"];

const Settings = () => {
  return (
    <Layout>
      <RadioButton data={nationalities} />
    </Layout>
  );
};

export default Settings;
