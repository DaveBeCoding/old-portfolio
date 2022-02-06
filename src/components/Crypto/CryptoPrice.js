import React, { useState, useEffect } from "react";
import logo from "../images/bitcoin-logo.png";
import ethereum from "../images/ethereum-48.png";
import cardano from "../images/cardano-48.png";
import "./CryptoPrice.css";
import axios from "axios";

const CryptoPrice = () => {
    const [loading, setLoading] = useState(true);
    const [btc, setBtc] = useState(null);
    const [eth, setEth] = useState(null);
    const [ada, setAda] = useState(null);

    const intervalid = setInterval(
        useEffect(() => {
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
                .then((response) => {
                    setBtc(response.data[0].current_price);
                    setEth(response.data[1].current_price);
                    setAda(response.data[5].current_price);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, []))
    clearInterval(intervalid);

    return (
        <div className="btc">
            <img className="btc-logo" src={logo} alt="Bitcoin" />
            <span className="btc-price">
                {loading ? "LOADING" : "$" + btc.toLocaleString()}
            </span>
            <img className="btc-logo" src={ethereum} alt="Bitcoin" />
            <span className="btc-price">
                {loading ? "LOADING" : "$" + eth.toLocaleString()}
            </span>
            <img className="btc-logo" src={cardano} alt="Bitcoin" />
            <span className="btc-price">
                {loading ? "LOADING" : "$" + ada.toLocaleString()}
            </span>
        </div>

    );
};



export default CryptoPrice;