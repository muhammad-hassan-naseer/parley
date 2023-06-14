import React, { Component } from "react";
import Web3 from "web3";
import { useState, useEffect } from 'react';
import Footer from "./Footer";
import Header2 from "./Header2";
import ParleyContract from '../ParleyContractLib'
import OrderRow from "./OrderRow";

//  const order = ParleyContract.Order;
//  const orderObj = new order() 
console.log(ParleyContract.orderData);

const UnlockMetaMask = () => {

  const rowData = [
    {
      exp: '',
    },
  ];
  var rowArray = rowData.map((section) => {
    return <OrderRow exp={section.exp} />;
  });

  const [signedIn, setSignedIn] = useState(false)
  const [walletAddress, setWalletAddress] = useState(null)

  useEffect( async() => { 

    signIn()

  }, [])

  async function signOut() {
    setSignedIn(false)
  }

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
  })
  .catch(function (error) {
  console.error(error)
  })
  }
  return (
    <div>
      <Header2 />
      <div className="section pt-5 bg-light">
        <div className="container mt-5 text-center" style={{ height: "377px" }}>
          <button id="button" type="button" className="btn btn-danger">
          {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
            :
            <button onClick={signOut} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>}
                            </button>

   <table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">Created</th>
      <th scope="col">Expires</th>
      <th scope="col">Kickoff</th>
      <th scope="col">Event</th>
      <th scope="col">Offer</th>
      <th scope="col">Their Odds</th>
      <th scope="col">Filled</th>
      <th scope="col">Cancel</th>
    </tr>
  </thead>
  <tbody>
  {rowArray}
  </tbody>
</table>
        </div>
        
      </div>
  

      <Footer />
    </div>
  );
};

export default UnlockMetaMask;
