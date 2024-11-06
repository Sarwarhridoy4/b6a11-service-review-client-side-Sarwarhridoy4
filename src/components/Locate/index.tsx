import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Locate.css";

const Locate: React.FC = () => {
  const position: [number, number] = [23.8761, 90.3798]; // Coordinates for Azampur, Uttara, Dhaka

  return (
    <div>
      <h2 className='text-4xl font-semibold'>Locate Me:</h2>
      <div
        id='map'
        className='map-container w-full sm:w-3/4 md:w-1/2 mx-auto'
        style={{ height: "400px" }}
      >
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          {/* TileLayer uses 'url' for tile sources */}
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
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
