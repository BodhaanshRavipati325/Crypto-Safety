import React from "react";

import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'

function fetchDiningJSON() {
  let diningLocations = {};
  fetch(`https://streamer.oit.duke.edu/places/items?tag=dining&access_token=ab70c361263e195c5e3f84011053c49b`).then(
    (response) => {
      return response.json;
    }
  ).then(
    (data) => {
      diningLocations = data;
  }
  );

  return diningLocations;
}

export default function Map() {

  const position = [36.00105254649727, -78.93848609568461];
  const diningJSON = fetchDiningJSON();

  // const diningList = diningJSON.map(
  //   (location) => {
  //     <Marker position={location.position}></Marker>
  //   }
  // )

  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />

  <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* {diningList} */}
  </MapContainer>
    </>
  );
}
