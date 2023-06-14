import React, { Component } from "react";
import Footer from "./Footer";

import Header2 from "./Header2";
import SettingCard from "./SettingCard";

const Settings = () => {
  return (
    <div>
      <Header2 />

      <div class="section bg-light pb-5">
        <div class="container">
          <div class="row pt-5 mt-5">
            <div class="col-12">
              <SettingCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
