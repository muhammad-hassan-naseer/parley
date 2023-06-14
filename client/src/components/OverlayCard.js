import React, { Component } from "react";
import Web3 from "web3";
import { useState, useEffect } from 'react';
import {ADDRESS, ABI} from "./config"
import parleyUtils from '../ParleyUtils'

const getCurrTime1 = parleyUtils.getCurrTime()

console.log(getCurrTime1);
const OverlayCard = () => {

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

  function closeDiv() {
    document.getElementById("openOverlay").style.width = "0%";
  }
  return (
    <>
      <div
        className="overlayDiv bg-light"
        style={{ width: "0%" }}
        id="openOverlay"
      >
        <a
          href="javascript:void(0)"
          className="closeDiv closebtn"
          onClick={function () {
            closeDiv();
          }}
        >
          ×
        </a>
        <h3 className="text-primary text-center">Bet Slip</h3>
        <div className="container">
          <div>
            <small>
            {timeConverter(getCurrTime1)}
              <br />
              <h6>MIN Twins at DET Tigers</h6>
            </small>
          </div>
          <h6>BACK MIN Twins -1.5</h6>
          <div className="form-row">
            <div className="col-md-2">
              <div className="card bg-dark text-white text-center">
                <h6>1.12</h6>
                <label>40$</label>
                <h3 className="card-title text-center">
                  <div className="d-flex flex-wrap justify-content-center mt-2">
                    <a>
                      <span className="badge hours">01</span>
                    </a>{" "}
                    :
                    <a>
                      <span className="badge min">19</span>
                    </a>{" "}
                    :
                    <a>
                      <span className="badge sec">31</span>
                    </a>
                  </div>
                </h3>
              </div>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control mt-3 mt-md-0"
                placeholder="Enter Odds"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <div className="dropdown mt-4">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dai ($?)
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{}}
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="form-row mt-3">
            <div className="col-md-2">
              <div className="card bg-dark text-white text-center">
                <h6>1.12</h6>
                <label>40$</label>
                <h3 className="card-title text-center">
                  <div className="d-flex flex-wrap justify-content-center mt-2">
                    <a>
                      <span className="badge hours">01</span>
                    </a>{" "}
                    :
                    <a>
                      <span className="badge min">19</span>
                    </a>{" "}
                    :
                    <a>
                      <span className="badge sec">31</span>
                    </a>
                  </div>
                </h3>
              </div>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control mt-3 mt-md-0"
                placeholder="Enter Odds"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <div className="dropdown mt-4">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dai ($?)
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{}}
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div className="form-row mt-3">
              <div className="col-md-2">
                <div className="card bg-dark text-white text-center">
                  <h6>1.12</h6>
                  <label>40$</label>
                  <h3 className="card-title text-center">
                    <div className="d-flex flex-wrap justify-content-center mt-2">
                      <a>
                        <span className="badge hours">01</span>
                      </a>{" "}
                      :
                      <a>
                        <span className="badge min">19</span>
                      </a>{" "}
                      :
                      <a>
                        <span className="badge sec">31</span>
                      </a>
                    </div>
                  </h3>
                </div>
              </div>
              <div className="col-md-4 mt-3 mt-md-0">
                <div
                  role="wrapper"
                  className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
                  style={{ width: "276px" }}
                >
                  <input
                    id="datepicker"
                    width={276}
                    data-type="datepicker"
                    data-guid="bbe7bf14-a584-4ddc-11fb-1e2fe037c0bc"
                    data-datepicker="true"
                    className="form-control"
                    role="input"
                  />
                  <span className="input-group-append" role="right-icon">
                    <button
                      className="btn btn-outline-secondary border-left-0"
                      type="button"
                    >
                      <i className="gj-icon">event</i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-danger mt-3">
              Unlock MetaMask
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OverlayCard;
