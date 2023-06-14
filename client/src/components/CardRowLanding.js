import React, { Component } from "react";
import LandingCard from "./LandingCard";

const CardRowLanding = (props) => {
  return (
    <div>
      <div class="row pt-5">
        <div class="col-md-6">
          <LandingCard id={props.fid} />
        </div>
        <div class="col-md-6">
          <LandingCard id={props.sid} />
        </div>
      </div>
    </div>
  );
};

export default CardRowLanding;
