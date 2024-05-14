import { useLocalsQuery } from "@/api/locals";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const customIcon = new Icon({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

export const MapPage = () => {
  const { data: locals } = useLocalsQuery();

  console.log(locals);

  return (
    <div>
      <MapContainer center={[-30.033, -51.23]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-30.033, -51.23]} icon={customIcon}>
          <Popup>
           DOAÇÕES <br /> AQUI VAI O CARD DE DOAÇÕES
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
