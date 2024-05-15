import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { useLocalsQuery } from '@/api/locals'

import 'leaflet/dist/leaflet.css'

export const MapPage = () => {
  const { data: locals, isLoading } = useLocalsQuery()

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <MapContainer center={[-30.033, -51.23]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locals?.map((local, index) => (
          <Marker
            key={index}
            position={[
              Number(local.latitude) || 0,
              Number(local.longitude) || 0,
            ]}
          >
            <Popup>AQUI VAI O CARD DE DOAÇÃO OU ABRIGO</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
