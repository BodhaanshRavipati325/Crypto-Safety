const axios = require('axios');

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://open-api.coinglass.com/public/v2/liquidation_top?time_type=h4',
  headers: { 
    'coinglassSecret': 'e630792b64d1476c9d350efbe0ee54eb'
  }
};

axios.request(config)
.then((response) => {
  liquidationData = response.data;
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

let liquidationData = {};

app.get("/liquidation-data", (req, res) => {
  res.json(liquidationData);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});