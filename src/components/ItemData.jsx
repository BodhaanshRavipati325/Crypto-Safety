import React from "react";

import { Divider, List, ListItem } from "@mui/material";

import DataRow from '/Users/bodhaanshravipati/duke-maps/duke-maps/src/components/DataRow.jsx';
import { useState } from "react";

import { humanize, round } from '@alesmenzel/number-format';

const formatAndRound = humanize({
  transform: round(0.01),
});

export default function ItemData(props, name) {

  const list = props.props.map((data) => 
    <>
      <ListItem sx={{ display: "flex", alignItems: "center", height: "7vh" }}>
        <h1 id="key">{data.name}</h1>
        <h1 id="value" style={{color: data.color}}>{formatAndRound(data.data)}</h1>
      </ListItem>
      <Divider></Divider>
    </>
  );

  return (
    <List>
      <ListItem sx={{ display: "flex", alignItems: "center", height: "7vh" }}>
      </ListItem>
      <Divider></Divider>
      {list}
    </List>
  );
}
