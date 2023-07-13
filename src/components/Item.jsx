import * as React from "react";
import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import { width } from "@mui/system";

const Item = styled("div")(() => ({
    // padding: "10vw",
    borderRadius: "2vw",
    // textAlign: "center",
    aspectRatio: "1/1.25",
    backgroundColor: "rgb(32, 32, 32)"
  }));

export default Item;