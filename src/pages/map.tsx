import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { useLocalsQuery } from '@/api/locals'
import 'leaflet/dist/leaflet.css'

export const MapPage = () => {
  const { data: locals, isLoading } = useLocalsQuery()

  return (
    <div>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-12 w-12 animate-spin text-green-600"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
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
      )}
    </div>
  )
}
