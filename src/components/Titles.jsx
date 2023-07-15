import React from "react";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@mui/material";

import { borders } from "@mui/system";
import GridData from "./GridData";

import bitcoinLogo from "/Users/bodhaanshravipati/duke-maps/duke-maps/src/assets/bitcoin-btc-logo.svg";
import ethereumLogo from "/Users/bodhaanshravipati/duke-maps/duke-maps/src/assets/ethereum-eth-logo.svg";
import bnbLogo from "/Users/bodhaanshravipati/duke-maps/duke-maps/src/assets/bnb-bnb-logo.svg";
import usdcLogo from "/Users/bodhaanshravipati/duke-maps/duke-maps/src/assets/usd-coin-usdc-logo.svg";

export default function Titles() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today =
    mm +
    "/" +
    dd +
    "/" +
    yyyy +
    " at " +
    today.getHours() +
    ":" +
    today.getMinutes();

  return (
    <>
      {/* <img id="bitcoin-logo" src={bitcoinLogo}></img>
      <img id="ethereum-logo" src={ethereumLogo}></img>
      <img id="bnb-logo" src={bnbLogo}></img>
      <img id="usdc-logo" src={usdcLogo}></img> */}

      <h4 id="update-text">UPDATED {today}</h4>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Keep Your Crypto Safe",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{
          position: "absolute",
          color: "gold",
          fontFamily: "Air",
          fontWeight: "bold",
          fontStyle: "normal",
          fontSize: "4vw",
          width: "100%",
          textAlign: "center",
          marginTop: "10vh",
        }}
        repeat={Infinity}
      ></TypeAnimation>

      <h5 id="title-text">
        Make sure that your crypto exchanges are safe and capable of
        withstanding market fluctuations. With the collapse of FTX indicating
        severe market insecurity, customers must actively ensure the safety of
        their investments.
      </h5>

      <Button
        sx={{
          color: "white",
          fontFamily: "Air",
          border: 1,
          borderRadius: 2,
          position: "absolute",
          marginTop: "29.5vh",
          marginLeft: "43vw",
        }}
      >
        Learn More
      </Button>

      <a href="https://www.coinglass.com/">
        <Button
          sx={{
            color: "white",
            fontFamily: "Air",
            border: 1,
            borderRadius: 2,
            position: "absolute",
            marginTop: "29.5vh",
            marginLeft: "50vw",
          }}
        >
          Data
        </Button>
      </a>

      <GridData></GridData>
    </>
  );
}
