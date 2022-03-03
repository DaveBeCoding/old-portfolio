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
    const [btc24H, setBtc24H] = useState(null);
    const [btcName, setBtcName] = useState(null);
    const [EthName, setEthName] = useState(null);
    const [adaName, setAdaName] = useState(null);
    const [display, setDisplay] = useState("notdisplayed");

    const intervalid = setInterval(
        useEffect(() => {
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency="
                + "usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
                .then((response) => {
                    console.log(response.data);
                    setBtc(response.data[0].current_price);
                    setEth(response.data[1].current_price);
                    setAda(response.data[8].current_price);
                    setBtcName(response.data[0].name);
                    setEthName(response.data[1].name);
                    setAdaName(response.data[8].name);
                    setBtc24H(response.data[0].price_change_percentage_24h)
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, []))
    clearInterval(intervalid);

    // const changeBackground = (e) => {

    // }


    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
    }

    const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
    }

    return (
        <div className="btc">
            <img className="btc-logo" src={logo} alt="Bitcoin" />
            <span class="tooltip" data-tooltip={"24hr change" + btc24H}></span>
            {/* <span className="btc-price" onMouseOver={changeBackground}/> */}
            <span className="btc-price">
                {/* <button className={display}>I might be an invisible button</button> */}
                {loading ? "LOADING" : btcName + " $" + btc.toLocaleString()}
                {/* <div className={style}>"24hr change "{btc24H}</div> */}
            </span>
            <img className="btc-logo" src={ethereum} alt="Bitcoin" />
            <span className="btc-price">
                {loading ? "LOADING" : EthName + " $" + eth.toLocaleString()}
            </span>
            <img className="btc-logo" src={cardano} alt="Bitcoin" />
            <span className="btc-price">
                {loading ? "LOADING" : adaName + " $" + ada.toFixed(2)}
            </span>
        </div>

    );
};



export default CryptoPrice;











// <span className="btc-price" onMouseEnter={e => showButton(e)}
//                 onMouseLeave={e => hideButton(e)}>

//                 <button className={display}>I might be an invisible button</button>
//                 {loading ? "LOADING" : btcName + " $" + btc.toLocaleString()}
//                 {/* <div className={style}>"24hr change "{btc24H}</div> */}
//             </span>








// <div className="App">
//             <h2>Hidden Button in the box. Move mouse in the box</h2>
//             <div style={{border: '1px solid gray', width: 300, height: 300, padding: 10, margin: 100}}
//                  onMouseEnter={e => {
//                      setStyle({display: 'block'});
//                  }}
//                  onMouseLeave={e => {
//                      setStyle({display: 'none'})
//                  }}
//             >
//                 <button style={style}>Click</button>
//             </div>
//         </div>