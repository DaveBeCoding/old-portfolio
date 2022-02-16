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
    const [btcName, setBtcName] = useState(null);
    const [EthName, setEthName] = useState(null);
    const [adaName, setAdaName] = useState(null);

    const intervalid = setInterval(
        useEffect(() => {
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
                .then((response) => {
                    console.log(response.data);
                    setBtc(response.data[0].current_price);
                    setEth(response.data[1].current_price);
                    setAda(response.data[6].current_price);
                    setBtcName(response.data[0].name);
                    setEthName(response.data[1].name);
                    setAdaName(response.data[6].name);
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
                {loading ? "LOADING" : btcName + " $" + btc.toLocaleString()}
            </span>
            <img className="btc-logo" src={ethereum} alt="Bitcoin" />
            <span className="btc-price">
                {loading ? "LOADING" : EthName + " $" + eth.toLocaleString()}
            </span>
            <img className="btc-logo" src={cardano} alt="Bitcoin" />
            <span className="btc-price">
                {loading ? "LOADING" : adaName +" $" + ada.toLocaleString()}
            </span>
        </div>

    );
};



export default CryptoPrice;