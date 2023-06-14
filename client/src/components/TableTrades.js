import React, { Component } from "react";
import TradesTableRow from "./TradesTableRow";
import Web3 from "web3";
import { useState, useEffect } from 'react';
import {ADDRESS, ABI} from "./config"

const http = require("https");

const options = {
	"method": "GET",
	"hostname": "api-basketball.p.rapidapi.com",
	"port": null,
	"path": "/seasons",
	"headers": {
		"x-rapidapi-host": "api-basketball.p.rapidapi.com",
		"x-rapidapi-key": "2e61ff71cemsh98d71cc478e45a6p18d525jsn2c2108001b5f",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();

const TableTrades = () => {

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

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">TX</th>
              <th scope="col">TIME</th>
              <th scope="col">EVENT</th>
              <th scope="col">WHO</th>
              <th scope="col">BET</th>
            </tr>
          </thead>
          <tbody>
            <TradesTableRow />
            <TradesTableRow />
            <TradesTableRow />
            <TradesTableRow />
            <TradesTableRow />
            <TradesTableRow />
            <TradesTableRow />
            <TradesTableRow />
            <TradesTableRow />
            <TradesTableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTrades;
