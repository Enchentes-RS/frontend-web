import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import centrosVoluntariosRS from "@/../centros_voluntarios_rs.json";

const customIcon = new Icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

export const MapPage = () => {
  return (
    <div>
      <MapContainer center={[-30.033, -51.23]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {centrosVoluntariosRS.map((centro, index) => (
          <Marker
            key={index}
            position={[
              Number(centro.Latitude) || 0,
              Number(centro.Longitude) || 0,
            ]}
            icon={customIcon}
          >
            <Popup/>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
