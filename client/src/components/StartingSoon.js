import React, { Component } from "react";

import Footer from "./Footer";
import Header2 from "./Header2";

const http = require("https");

const options = {
	"method": "GET",
	"hostname": "api-basketball.p.rapidapi.com",
	"port": null,
	"path": "/timezone",
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




const UnlockMetaMask = () => {
  return (
    <div>
      <Header2 />
      <div className="section pt-5 bg-light">
        <div className="container mt-5 text-center" style={{ height: "377px" }}>
            <h1 className="text-center">Starting Soon</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UnlockMetaMask;
