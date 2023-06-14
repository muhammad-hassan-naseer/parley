import React, { Component } from "react";
import OverlayCard from "./OverlayCard";
import Web3 from "web3";
import { useState, useEffect } from 'react';
import {ADDRESS, ABI} from "./config"
import parleyUtils from '../ParleyUtils'

const getCurrTime1 = parleyUtils.getCurrTime()

const LandingCard = (props) => {

  function timeConverter(UNIX_timestamp){


    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
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

  function openDiv() {
    document.getElementById("openOverlay").style.width = "100%";
  }
  return (
    <div>
      <div className="card p-4 shadow text-dark bordering mt-3 mt-md-0">
        <div>
          <img
            src="https://images.vexels.com/media/users/3/202466/isolated/lists/fb0c700cc21f35f9e106525371286ebe-american-flag-flat-icon.png"
            className="adjust"
          />
          <small className="float-right">
          {timeConverter(getCurrTime1)}
            <br />
            <h6>MIN Twins at DET Tigers</h6>
          </small>
        </div>
        <div>
          <div>
            <h6 className="bg-light">
              Handicap <i className="fas fa-info-circle" />
              <label className="float-right">10.23%</label>
            </h6>
          </div>
          <label style={{ fontSize: "14px" }}>MIN Twins -1.5</label>
          <h5 className="float-right text-center">
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-primary text-white rounded size open"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-primary text-white rounded size open ml-1"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-success text-white rounded size open ml-1"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
          </h5>
        </div>
        <div>
          <label>DET Tigers +1.5</label>
          <h5 className="float-right text-center">
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-primary text-white rounded size open"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-primary text-white rounded size open ml-1"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-success text-white rounded size open ml-1"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
          </h5>
        </div>
        <h6 className="bg-light">
          Money-Line
          <i className="fas fa-info-circle" />
          <label className="float-right">10.23%</label>
        </h6>
        <div>
          <label>MIN Twins</label>
          <h5 className="float-right text-center">
            <a className="bg-primary text-white rounded size open" href="#">
              1.121
              <br />
              <small>40$</small>
            </a>
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-primary text-white rounded size open ml-1"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-success text-white rounded size open ml-1"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
          </h5>
        </div>
        <div>
          <label>DET Tigers</label>
          <h5 className="float-right text-center">
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-primary text-white rounded size open"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-primary text-white rounded size open ml-1"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-success text-white rounded size open ml-1"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
          </h5>
        </div>
        <h6 className="bg-light">
          Over-Under
          <i className="fas fa-info-circle" />
          <label className="float-right">10.23%</label>
        </h6>
        <div>
          <label>o9.5</label>
          <h5 className="float-right text-center">
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-primary text-white rounded size open"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-primary text-white rounded size open ml-1"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-success text-white rounded size open ml-1"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
          </h5>
        </div>
        <div>
          <label>u9.5</label>
          <h5 className="float-right text-center">
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-primary text-white rounded size open"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-primary text-white rounded size open ml-1"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
            <a
              onClick={function () {
                openDiv();
              }}
              className="bg-success text-white rounded size open ml-1"
              href="#"
            >
              1.121
              <br />
              <small>40$</small>
            </a>
          </h5>
        </div>
        <hr />
        <div id="accordion">
          <div>
            <div className="text-center" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target={"#" + props.id}
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  1 more markets
                </button>
              </h5>
            </div>
            <div
              id={props.id}
              className="font-weight-bold collapse"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <h6 className="bg-light">
                Over-Under
                <i className="fas fa-info-circle" />
                <label className="float-right">10.23%</label>
              </h6>
              <div>
                <label>o9.5</label>
                <h5 className="float-right text-center">
                  <a
                    onClick={function () {
                      openDiv();
                    }}
                    className="bg-primary text-white rounded size open"
                    href="#"
                  >
                    1.121
                    <br />
                    <small>40$</small>
                  </a>
                  <a
                    onClick={function () {
                      openDiv();
                    }}
                    className="bg-primary text-white rounded size open ml-1"
                    href="#"
                  >
                    1.121
                    <br />
                    <small>40$</small>
                  </a>
                  <a
                    onClick={function () {
                      openDiv();
                    }}
                    className="bg-success text-white rounded size open ml-1"
                    href="#"
                  >
                    1.121
                    <br />
                    <small>40$</small>
                  </a>
                </h5>
              </div>
              <div style={{ marginTop: "41px" }}>
                <label>u9.5</label>
                <h5 className="float-right text-center">
                  <a
                    onClick={function () {
                      openDiv();
                    }}
                    className="bg-primary text-white rounded size open"
                    href="#"
                  >
                    1.121
                    <br />
                    <small>40$</small>
                  </a>
                  <a
                    onClick={function () {
                      openDiv();
                    }}
                    className="bg-primary text-white rounded size open ml-1"
                    href="#"
                  >
                    1.121
                    <br />
                    <small>40$</small>
                  </a>
                  <a
                    onClick={function () {
                      openDiv();
                    }}
                    className="bg-success text-white rounded size open ml-1"
                    href="#"
                  >
                    1.121
                    <br />
                    <small>40$</small>
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OverlayCard />
    </div>
  );
};

export default LandingCard;
