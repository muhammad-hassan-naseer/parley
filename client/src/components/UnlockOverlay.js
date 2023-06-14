import React, { Component } from "react";
import Web3 from "web3";
import { useState, useEffect } from 'react';

const UnlockOverlay = () => {
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

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("button").setAttribute("onclick", "openNav()");
  }
  return (
    <>
      <div id="myNav" className="overlay bg-light" style={{ width: "0%" }}>
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={function () {
            closeNav();
          }}
        >
          ×
        </a>
        <div className="container text-center">
          <h3 className="text-primary text-center">Account</h3>
          <button  type="button" className="btn btn-danger">
          {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
            :
            <button onClick={signOut} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>}
                  
          </button>
        </div>
      </div>
    </>
  );
};

export default UnlockOverlay;
