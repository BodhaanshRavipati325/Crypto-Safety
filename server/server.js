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

app.get("/liquidation-data", (req, res) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://open-api.coinglass.com/public/v2/liquidation_ex?time_type=h4&symbol=all",
    headers: {
      coinglassSecret: "e630792b64d1476c9d350efbe0ee54eb",
    },
  };
  
  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
  
      liquidationData = [];
      longValue = [];
      shortValue = [];
      rate = [];
      averagePrice = [];
  
      for (let i = 1; i <= 6; i++) {
          liquidationData.push({
            data: response.data.data[i].totalVolUsd,
            name: response.data.data[i].exchangeName
          });
          longValue.push({
            data: response.data.data[i].longVolUsd,
            name: response.data.data[i].exchangeName
          });
          shortValue.push({
            data: response.data.data[i].shortVolUsd,
            name: response.data.data[i].exchangeName
          });
          rate.push({
            data: response.data.data[i].rate,
            name: response.data.data[i].exchangeName
          });
          averagePrice.push({
            data: response.data.data[i].averagePrice,
            name: response.data.data[i].exchangeName
          });
        }
      })
    .catch((error) => {
      console.log(error);
      return "no data available";
    });

  res.json({liquidationData, longValue, shortValue, rate, averagePrice});
});

app.get("/longShortRatio", (req, res) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://open-api.coinglass.com/public/v2/long_short?time_type=h1&symbol=BTC",
    headers: {
      coinglassSecret: "e630792b64d1476c9d350efbe0ee54eb",
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));

      longShortRatio = [];
      let total = 0;
      let average = 0;

      for (let i = 0; i <= 5; i++) {
        total +=
          response.data.data[0].list[i].longRate /
          response.data.data[0].list[i].shortRate;
      }

      average = total / 6;

      for (let i = 0; i <= 5; i++) {
        let mRatio =
          response.data.data[0].list[i].longRate /
          response.data.data[0].list[i].shortRate;
        if (mRatio > average) {
          longShortRatio.push({
            longShortRatio: mRatio,
            color: "green",
            name: response.data.data[0].list[i].exchangeName,
          });
        } else {
          longShortRatio.push({
            longShortRatio: mRatio,
            color: "red",
            name: response.data.data[0].list[i].exchangeName,
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
