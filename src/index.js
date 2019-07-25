import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [altCoinData, setAltCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_asc&page=10&per_page=10&page=1&sparkline=true"
      )
      .then(res => setAltCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <Charts coinData={coinData} /> */}
      <Route exact path="/" render={props => <Charts {...props} coinData={coinData} />}/>
      <Route path="/shitcoins" render={props => <Charts {...props} coinData={altCoinData} />}/>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
