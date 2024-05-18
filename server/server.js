const express = require("express");
const cors = require("cors");
const app = express();

const axios = require("axios");

app.use(cors());
app.use(express.json());

let liquidationData = [];
let longShortRatio = [];
let longValue = [];
let shortValue = [];
let rate = [];
let averagePrice = [];

async function fetchLiquidationData() {
  let test = {
    "data": {
      "data": [
        {
          "exchangeName": "Crypto.com",
          "totalVolUsd": 10.2,
          "longVolUsd": 22,
          "shortVolUsd": 29.4,
          "rate": 0.9,
          "averagePrice": 10
        },
        {
          "exchangeName": "Coinbase",
          "totalVolUsd": 19,
          "longVolUsd": 44,
          "shortVolUsd": 12,
          "rate": 0.8,
          "averagePrice": 12.3
        },
        {
          "exchangeName": "Kraken",
          "totalVolUsd": 45.1,
          "longVolUsd": 32,
          "shortVolUsd": 11,
          "rate": 0.2,
          "averagePrice": 66.2
        },
        {
          "exchangeName": "Binance.US",
          "totalVolUsd": 47.2,
          "longVolUsd": 11.2,
          "shortVolUsd": 98.1,
          "rate": 0.99,
          "averagePrice": 1.3
        },
        {
          "exchangeName": "Germini",
          "totalVolUsd": 35.7,
          "longVolUsd": 23.8,
          "shortVolUsd": 13.2,
          "rate": 0.84,
          "averagePrice": 10
        },
        {
          "exchangeName": "eToro",
          "totalVolUsd": 98.7,
          "longVolUsd": 221.2,
          "shortVolUsd": 18.9,
          "rate": 0.3,
          "averagePrice": 9
        }
      ]
    }
  }
  
  return test;
}

async function fetchLSData() {
  let test = {
    "data": {
      "data": [
        {
          "list": [
            {
              "exchangeName": "Crypto.com",
              "longRate": 0.32,
              "shortRate": 0.29
            },
            {
              "exchangeName": "Coinbase",
              "longRate": 0.19,
              "shortRate": 0.18
            },
            {
              "exchangeName": "Kraken",
              "longRate": 0.24,
              "shortRate": 0.08
            },
            {
              "exchangeName": "Binance.US",
              "longRate": 0.73,
              "shortRate": 0.94
            },
            {
              "exchangeName": "Germini",
              "longRate": 0.11,
              "shortRate": 0.13
            },
            {
              "exchangeName": "eToro",
              "longRate": 0.17,
              "shortRate": 0.14
            }
          ]
        }
      ]
    }
  }

  return test;
}

app.get("/liquidation-data", (req, res) => {
//   let config = {
//     method: "get",
//     maxBodyLength: Infinity,
//     url: "https://open-api.coinglass.com/public/v2/liquidation_ex?time_type=h4&symbol=all",
//     headers: {
//       coinglassSecret: "e630792b64d1476c9d350efbe0ee54eb",
//     },
//   };
  
  // axios
    // .request(config)
    // .then((test) => {

    fetchLiquidationData().then((test) => {
        liquidationData = [];
        longValue = [];
        shortValue = [];
        rate = [];
        averagePrice = [];
  
        let liquidationDataTotal = 0;
        let longValueTotal = 0;
        let shortValueTotal = 0;
        let rateTotal = 0;
        let averagePriceTotal = 0;
        
        for (let i = 0; i <= 5; i++) {
          liquidationDataTotal += test.data.data[i].totalVolUsd;
          longValueTotal += test.data.data[i].longVolUsd;
          shortValueTotal += test.data.data[i].shortVolUsd;
          rateTotal += test.data.data[i].rate;
          averagePriceTotal += test.data.data[i].averagePrice;
        }
    
        for (let i = 0; i <= 5; i++) {
            liquidationData.push({
              data: test.data.data[i].totalVolUsd,
              name: test.data.data[i].exchangeName,
              color: (test.data.data[i].totalVolUsd > (liquidationDataTotal / 6)) ? "green" : "red",
            });
            
            longValue.push({
              data: test.data.data[i].longVolUsd,
              name: test.data.data[i].exchangeName,
              color: (test.data.data[i].longVolUsd > (longValueTotal / 6)) ? "green" : "red",
            });
            shortValue.push({
              data: test.data.data[i].shortVolUsd,
              name: test.data.data[i].exchangeName,
              color: (test.data.data[i].shortVolUsd > (shortValueTotal / 6)) ? "green" : "red",
            });
            rate.push({
              data: test.data.data[i].rate,
              name: test.data.data[i].exchangeName,
              color: (test.data.data[i].rate > (rateTotal / 6)) ? "green" : "red",
            });
            averagePrice.push({
              data: test.data.data[i].averagePrice,
              name: test.data.data[i].exchangeName,
              color: (test.data.data[i].averagePrice > (averagePriceTotal / 6)) ? "green" : "red",
            });
          }
        // })
      // .catch((error) => {
      //   console.log(error);
      //   return "no data available";
      // });
  
    res.json({liquidationData, longValue, shortValue, rate, averagePrice});
  });
});

app.get("/longShortRatio", (req, res) => {
  // let config = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //   url: "https://open-api.coinglass.com/public/v2/long_short?time_type=h1&symbol=BTC",
  //   headers: {
  //     coinglassSecret: "e630792b64d1476c9d350efbe0ee54eb",
  //   },
  // };

  // axios
  //   .request(config)
  //   .then((test) => {

  fetchLSData().then((test) => {
      console.log(JSON.stringify(test.data));

      longShortRatio = [];
      let total = 0;
      let average = 0;

      for (let i = 0; i <= 5; i++) {
        total +=
          test.data.data[0].list[i].longRate /
          test.data.data[0].list[i].shortRate;
      }

      average = total / 6;

      for (let i = 0; i <= 5; i++) {
        let mRatio =
          test.data.data[0].list[i].longRate /
          test.data.data[0].list[i].shortRate;
        if (mRatio > average) {
          longShortRatio.push({
            longShortRatio: mRatio,
            color: "green",
            name: test.data.data[0].list[i].exchangeName,
          });
        } else {
          longShortRatio.push({
            longShortRatio: mRatio,
            color: "red",
            name: test.data.data[0].list[i].exchangeName,
          });
        }
      }

      res.json(longShortRatio);
    })
    .catch((error) => {
      console.log(error);
      return "no data available";
    });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
