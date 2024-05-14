import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import centrosVoluntariosRS from '@/../centros_voluntarios_rs.json'

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
          >
            <Popup>AQUI VAI O CARD DE DOAÇÃO OU ABRIGO</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
