import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import * as React from "react";
import { useState } from "react";
import ItemData from "./ItemData";

import Item from "/Users/bodhaanshravipati/duke-maps/duke-maps/src/components/Item.jsx";

export default function GridData() {

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
            <ItemData></ItemData>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>2</Item>
        </Grid>
        <Grid xs={4}>
          <Item>3</Item>
        </Grid>
        <Grid xs={4}>
          <Item>4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>3</Item>
        </Grid>
        <Grid xs={4}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
