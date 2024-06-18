import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Locate.css";

const Locate = () => {
  const position = [23.8761, 90.3798]; // Coordinates for Azampur, Uttara, Dhaka

  return (
    <div>
      <h2 className='text-4xl font-semibold'>Locate Me:</h2>
      <div id='map' className='map-container w-1/2 h-2/5 mx-auto'>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }} // Ensure the map has a height
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Locate;
