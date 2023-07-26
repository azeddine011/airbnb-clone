"use client";
import { Map } from "react-map-gl/maplibre";
import React from "react";

export default function MapComp() {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="https://api.maptiler.com/maps/streets-v2-dark/?key=0HPC4U7ScLL7k8YoGhzn"
    />
  );
}
