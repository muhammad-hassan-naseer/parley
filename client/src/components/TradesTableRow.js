import React, { Component } from "react";
import Web3 from "web3";
import { useState, useEffect } from 'react';
import {ADDRESS, ABI} from "./config"

const http = require("https");

const options = {
	"method": "GET",
	"hostname": "api-basketball.p.rapidapi.com",
	"port": null,
	"path": "/standings?league=12&season=2019-2020",
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

function TradesTableRow() {

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
        .then((network) => {console.log(network);
          if(network != "rinkeby")
        {alert("You are on " + network+ " network. Change network to rinkeby or you won't be able to do anything here")} });         
        let wallet = accounts[0]
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
    <>
      <tr>
        <th scope="row">13128080</th>
        <td>2021-08-30 09:54:08</td>
        <td scope="col">MLB: MIN Twins at DET Tigers</td>
        <td className="row no-gutters">
          <div className="col-md-4">
            <img
              src="https://images.vexels.com/media/users/3/202466/isolated/lists/fb0c700cc21f35f9e106525371286ebe-american-flag-flat-icon.png"
              alt="Girl in a jacket"
              className="flag"
            />
          </div>
          <div className="col-md-4">
            <small className="ml-1 d-flex align-items-center">VS</small>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.vexels.com/media/users/3/202466/isolated/lists/fb0c700cc21f35f9e106525371286ebe-american-flag-flat-icon.png"
              alt="Girl in a jacket"
              className="flag"
            />
          </div>
        </td>
        <td>DET Tigers +1.5 : $1014 to win $750 (0.740)</td>
      </tr>
    </>
  );
}

export default TradesTableRow;
