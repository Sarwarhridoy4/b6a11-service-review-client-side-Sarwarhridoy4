import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Locate.css"
const Locate = () => {
  return (
    <div>
      <h2 className='text-4xl font-semibold'>Locate Me:</h2>
      <div id="map" className='map-cntainer w-1/2 h-2/5 mx-auto'>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[51.505, -0.09]}>
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
