import * as React from "react";
import { Map as _Map, TileLayer } from "react-leaflet";
import "./styles.scss";

export const Map: React.SFC = () => {
  const startPos: [number, number] = [51.505, -0.09];

  const startZoom = 13;

  return (
    <_Map center={startPos} zoom={startZoom} className="map-container">
      <TileLayer
        accessToken="pk.eyJ1IjoiY29vbG1pdGNoIiwiYSI6ImNqeHRxY252dTBsZmQzZnNiczk1d3ZteGEifQ.dw3HMioJwWjYiuhjLdUi6Q"
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        id="mapbox/streets-v11"
      />
    </_Map>
  );
};
