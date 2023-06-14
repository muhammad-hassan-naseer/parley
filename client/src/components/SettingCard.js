import React, { Component } from "react";
import Web3 from "web3";
import { useState, useEffect } from 'react';
import {ADDRESS, ABI} from "./config"

const SettingCard = () => {

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

  function changePara(id) {
    if (id == 1) {
      document.getElementById("data").innerHTML =
        "Sportsbook: Accept existing offers posted to the site (for bettors)";
    }
    if (id == 2) {
      document.getElementById("data").innerHTML =
        "Exchange: Accept existing offers OR post your own offers (be the house)";
    }
    if (id == 3) {
      document.getElementById("numeric").innerHTML = "31121  12312";
    }
    if (id == 4) {
      document.getElementById("numeric").innerHTML = "-3.11  312";
    }
    if (id == 5) {
      document.getElementById("numeric").innerHTML = "1121  -12";
    }
    if (id == 6) {
      document.getElementById("numeric").innerHTML = "-121  +2312";
    }
    if (id == 7) {
      document.getElementById("numeric").innerHTML = "121  1312";
    }
    if (id == 8) {
      document.getElementById("numeric").innerHTML = "321  1232";
    }
  }
  return (
    <div>
      <div className="card-body text-primary bg-white border border-danger rounded">
        <div>
          <label className="font-weight-bold">DISPLAY MODE</label>
        </div>
        <div></div>
        <hr />
        <div className="mt-3">
          <button
            type="button"
            className="btn btn-danger"
            onClick={function () {
              changePara("1");
            }}
          >
            SportsBook
          </button>
          <button
            type="button"
            className="btn btn-danger ml-1"
            onClick={function () {
              changePara("2");
            }}
          >
            Exchange
          </button>
        </div>
        <p className="mt-2" id="data">
          Exchange: Accept existing offers OR post your own offers (be the
          house)
        </p>
      </div>

      <div className="card-body text-primary bg-white border border-danger rounded mt-3">
        <div>
          <label className="font-weight-bold">Odds View</label>
        </div>
        <div></div>
        <hr />
        <div className="mt-3">
          <button
            type="button"
            className="btn btn-danger"
            onClick={function () {
              changePara("3");
            }}
          >
            American
          </button>
          <button
            type="button"
            className="btn btn-danger ml-1"
            onClick={function () {
              changePara("4");
            }}
          >
            Decimal
          </button>
          <button
            type="button"
            className="btn btn-danger ml-1 mt-1 mt-md-0"
            onClick={function () {
              changePara("5");
            }}
          >
            Implied Probability
          </button>
          <button
            type="button"
            className="btn btn-danger ml-1 mt-1 mt-md-0"
            onClick={function () {
              changePara("6");
            }}
          >
            Hong Kong
          </button>
          <button
            type="button"
            className="btn btn-danger ml-1 mt-1 mt-md-0"
            onClick={function () {
              changePara("7");
            }}
          >
            Indonesian
          </button>
          <button
            type="button"
            className="btn btn-danger ml-1 mt-1 mt-md-0"
            onClick={function () {
              changePara("8");
            }}
          >
            Malay
          </button>
        </div>
        <p className="mt-2" id="numeric">
          1121 -12
        </p>
      </div>
      <div className="card-body text-primary bg-white border border-danger rounded mt-3">
        <div>
          <label className="font-weight-bold">Order Filters</label>
        </div>
        <div></div>
        <hr />
        <p>Hide orders expiring within this many seconds:</p>
        <input
          type="text"
          className="form-control mt-3 mt-md-0"
          placeholder="Enter Odds"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <h6 className="bg-light mt-3">
          <i className="fas fa-info-circle" />
          Small orders can be filtered out by changing Minimum Size in the
          Account dropdown
        </h6>
      </div>
    </div>
  );
};

export default SettingCard;
