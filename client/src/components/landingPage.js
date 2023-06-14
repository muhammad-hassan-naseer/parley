import React, { Component } from "react";
import CardRowLanding from "./CardRowLanding";
import Header from "./Header";
import HeaderBackground from "./HeaderBackground";
import LandingCard from "./LandingCard";
import OverlayCard from "./OverlayCard";
import UnlockOverlay from "./UnlockOverlay";
import Footer from "./Footer";
const landingPage = () => {
  const CardID = [
    {
      fid: "one",
      sid: "two",
    },
    {
      fid: "three",
      sid: "four",
    },
  ];
  var cardArray = CardID.map((section) => {
    return <CardRowLanding fid={section.fid} sid={section.sid} />;
  });
  return (
    <>
      <Header />
      <HeaderBackground />
      <UnlockOverlay />
      <OverlayCard />
      <div class="section bg-light pb-5">
        <div class="container">{cardArray}</div>
      </div>
      <div className="section bg-white">
        <Footer />
      </div>
    </>
  );
};

export default landingPage;
