"use client";
import { Map, Marker, Popup } from "react-map-gl/maplibre";
import React, { useState } from "react";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/20/solid";
import { getCenter } from "geolib";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapComp({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const [showPopup, setShowPopup] = useState({});

  const center = getCenter(coordinates);

  return (
    <Map
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      // style={{ width: 600, height: 400 }}
      mapStyle="https://api.maptiler.com/maps/streets-v2-dark/style.json?key=0HPC4U7ScLL7k8YoGhzn"
    >
      {searchResults.map((result) => (
        <div key={result.img}>
          <Marker longitude={result.long} latitude={result.lat} anchor="bottom">
            {/* <MapPinIcon className="h-10 w-10 text-red-400" /> */}
            <p
              onClick={() => setShowPopup(result)}
              className="text-2xl cursor-pointer animate-bounce"
            >
              📌
            </p>
          </Marker>
          {showPopup.long === result.long ? (
            <Popup
              longitude={result.long}
              latitude={result.lat}
              anchor="top"
              onClose={() => setShowPopup({})}
              closeOnClick={false}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}
