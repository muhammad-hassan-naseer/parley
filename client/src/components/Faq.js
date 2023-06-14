import React, { Component } from "react";

import Accordion from "./Accordion";
import Header2 from "./Header2";
import Footer from "./Footer";

const Faq = () => {
  const session = [
    {
      id: "one",
      question: "What is ParLay?",
      answer:
        "ParLay is a peer to peer sports betting exchange that uses the popular cryptocurrencies ETH and DAI. We've been operating on the Ethereum blockchain since 2017: our story.ParLay is a humorously self-deprecating term short for degenerates, which originated in the sports betting and poker communities",
    },
    {
      id: "two",
      question: "How do I sign up?",
      answer:
        "On ParLay there is no need to sign-up. All you need is an Ethereum-enabled wallet program.",
    },
    {
      id: "three",
      question: "What cryptocurrency do I need?",
      answer:
        "ParLay presently uses ETH as well as DAI which is the leading stablecoin that tracks the US Dollar. If you have ETH or any ERC-20 token, you can simply convert them to DAI at Uniswap or Totle.",
    },
    {
      id: "four",
      question: "Why can't I use Bitcoin?",
      answer:
        "ParLay is unlike your typical sportsbook that accepts Bitcoin as we use ethereum smart contracts. This technology has numerous benefits which aren't available when using Bitcoin. You can easily use your favorite crypto-exchange to exchange your Bitcoin into ETH/DAI with some of the most popular ones being Coinbase and Binance.",
    },
    {
      id: "five",
      question: "Why can't I use Bitcoin?",
      answer:
        "ParLay is unlike your typical sportsbook that accepts Bitcoin as we use ethereum smart contracts. This technology has numerous benefits which aren't available when using Bitcoin. You can easily use your favorite crypto-exchange to exchange your Bitcoin into ETH/DAI with some of the most popular ones being Coinbase and Binance.",
    },
    {
      id: "six",
      question: "What does over/under mean?",
      answer:
        "You might be trying to swap a fee on transfer or deflationary token. If so, you have to increase your allowed slippage to account for the fee taken during the swap. Click on the gear for settings and adjust slippage tolerance accordingly.Otherwise, if your transaction is taking forever or stuck pending, the gas included might be too low and the transaction will not be processed. You probably need to speed up or cancel the transaction in you wallet",
    },
    {
      id: "seven",
      question: "What commission does ParLay charge?",
      answer:
        "First you’ll need an Ethereum Wallet and some ETH. Once completed, head over to the app to start using the protocol to provide liquidity or swap tokens. Remember that each transaction on Ethereum costs ETH (this is called the “gas fee” and it’s paid to miners to keep the network running).",
    },
    {
      id: "eight",
      question: "Do you have a Github repo or any technical documentation?  ",
      answer:
        "ParLay is proud to offer the industry's lowest fees. We are able to offer such low fees because ParLay leverages the Ethereum blockchain and cryptocurrency, which eliminates many costs that affect legacy sports exchanges",
    },
  ];
  var questionArray = session.map((section) => {
    return (
      <Accordion
        question={section.question}
        answer={section.answer}
        id={section.id}
      />
    );
  });
  return (
    <div>
      <Header2 />
      <div className="section bg-light pb-5">
        <div class="container  pt-5 text-primary">
          <h1 className="text-center text-white mt-5 text-primary">ParLay ?</h1>
          {questionArray}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
