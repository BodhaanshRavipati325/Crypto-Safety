import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemData from "./ItemData";

import Item from "./Item.jsx";

export default function GridData() {
  const [volume, setVolume] = useState([]);
  const [longValue, setLongValue] = useState([]);
  const [shortValue, setShortValue] = useState([]);
  const [rate, setRate] = useState([]);
  const [averagePrice, setAveragePrice] = useState([]);

  function fetchLiquidationData() {
    fetch("https://crypto-safety.onrender.com/liquidation-data")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setVolume(data.liquidationData);
        setLongValue(data.longValue);
        setShortValue(data.shortValue);
        setRate(data.rate);
        setAveragePrice(data.averagePrice);
      });
  }

  useEffect(() => {
    fetchLiquidationData();
    return;
  }, []);

  return (
    <Box
      sx={{
        width: "75%",
        position: "absolute",
        marginTop: "40vh",
        marginLeft: "12vw",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={4}>
          <Item>
            <h2 id="dataKey">Liquidation Volume</h2>
            <ItemData props={volume}></ItemData>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <h2 id="dataKey">Long Investment Volume</h2>

            <ItemData props={longValue} name="longValue"></ItemData>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <h2 id="dataKey">Short Investment Volume</h2>

            <ItemData props={shortValue} name="shortValue"></ItemData>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <h2 id="dataKey">Rate</h2>

            <ItemData props={rate}></ItemData>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <h2 id="dataKey">Average Price</h2>

            <ItemData props={averagePrice} name="averagePrice"></ItemData>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <h2 id="dataKey">3e3e3</h2>

            {/* <ItemData></ItemData> */}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
