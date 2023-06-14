import React, { Component } from "react";
import Web3 from "web3";
import { useState, useEffect } from 'react';
import {ADDRESS, ABI} from "./config"
import Header2 from "./Header2";
import Footer from "./Footer";
import CardRowLanding from "./CardRowLanding";

const Sports = (props) => {

  const [signedIn, setSignedIn] = useState(false)
  const [walletAddress, setWalletAddress] = useState(null)
  const [totalSupply, setTotalSupply] = useState(0)

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      window.web3 = new Web3(window.ethereum);
     
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        .then((network) => {console.log(network);if(network != "rinkeby")
        {alert("You are on " + network+ " network. Change network to rinkeby or you won't be able to do anything here")} });         let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  console.error(error)
  })
  }


  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const degensContract = new window.web3.eth.Contract(ABI, ADDRESS)

    const totalSupply = await degensContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)   
  }

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
    <div>
      <Header2 />
      <div className="section bg-light pb-5">
        <div class="container  mt-5">
          <h1 className="text-center text-white">{props.name}</h1>
          <div class="container">{cardArray}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sports;
