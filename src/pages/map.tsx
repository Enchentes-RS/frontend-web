import 'leaflet/dist/leaflet.css'

import type { Map as LeafletMap } from 'leaflet'
import L, { Icon } from 'leaflet'
import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from 'react-leaflet'

import { useLocalsQuery } from '@/api/locals'
import type { Local } from '@/api/locals/types'
import { Card } from '@/components/card'
import { CardSlider } from '@/components/card-slider'
import { Drawer } from '@/components/drawer'
import { SearchField } from '@/components/search'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { useIsMobile } from '@/hooks/use-is-mobile.tsx'

const mockedItem = {
  title: 'Estádio Olímpico Monumental',
  description: 'Bairro Medianeira; entrada pela Azenha',
  icon: 'volunteers',
  needs: [
    {
      type: 'people',
      text: 'Voluntários',
    },
    {
      type: 'food',
      text: 'Alimentos prontos e não perecíveis',
    },
    {
      type: 'food',
      text: 'Talheres descartáveis',
    },
    {
      type: 'bed',
      text: 'Colchões e cobertores',
    },
    {
      type: 'babyDiaper',
      text: 'Fralda de bebês',
    },
    {
      type: 'geriatricDiaper',
      text: 'Fralda de geriátrica',
    },
    {
      type: 'hygieneItems',
      text: 'Itens de higiene',
    },
    {
      type: 'medicines',
      text: 'Medicamentos',
    },
    {
      type: 'trashBags',
      text: 'Sacos de lixo',
    },
  ],
}

export const MapPage = () => {
  const [selectedLocal, setSelectedLocal] = useState<Local | null>(null)
  const [drawerSelectedLocal, setDrawerSelectedLocal] = useState<Local | null>(
    null,
  )
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const mapRef = useRef<LeafletMap | null>(null)
  const isMobile = useIsMobile()

  const { data: locals, isLoading } = useLocalsQuery()

  const handleSelectLocal = (local: Local) => {
    setSelectedLocal(local)

    const coordinates: [number, number] = [
      Number(local.latitude),
      Number(local.longitude),
    ]

    if (mapRef.current) {
      mapRef.current.setView(coordinates, undefined, {
        animate: true,
        duration: 1,
      })
    }
  }

  const handleOpenDrawer = (local: Local) => {
    setDrawerSelectedLocal(local)
    setOpenDrawer(true)
  }

  const CustomMarker = ({
    coordinates,
    local,
    onOpenDrawer,
  }: {
    coordinates: [number, number]
    local: Local
    onOpenDrawer?: (local: Local) => void
  }) => {
    const map = useMap()

    useEffect(() => {
      if (local === selectedLocal) {
        const timeoutId = setTimeout(() => {
          L.popup()
            .setLatLng(coordinates)
            .setContent(`<b>${local.name}</b>`)
            .openOn(map)
        }, 1000)

        return () => clearTimeout(timeoutId)
      }
    }, [coordinates, local, map])

    return (
      <Marker
        icon={
          new Icon({
            className: 'shadow-md rounded-full',
            iconUrl: '/assets/donator.svg',
            iconSize: isMobile ? [26, 26] : [28, 28],
            iconAnchor: [13, 13],
          })
        }
        position={coordinates}
      >
        <Popup>
          <div className="-ml-2 flex flex-col items-end gap-3">
            <Card local={local} isPopup />
            <Button
              variant={'outline'}
              size={'pill'}
              className="rounded-full py-1 text-xs text-zinc-400"
              onClick={() => onOpenDrawer?.(local)}
            >
              Ver detalhes
            </Button>
          </div>
        </Popup>
      </Marker>
    )
  }

  return (
    <>
      <Helmet title="Mapa" />
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="relative h-full overflow-hidden">
          <MapContainer
            className="relative z-10"
            center={isMobile ? [-30.06, -51.2] : [-30.0546, -51.18]}
            zoom={isMobile ? 12 : 13}
            zoomControl={false}
            ref={mapRef}
          >
            <ZoomControl position="bottomleft" />
            <TileLayer
              attribution=""
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locals?.map((local, index) => (
              <CustomMarker
                key={index}
                local={local}
                coordinates={[Number(local.latitude), Number(local.longitude)]}
                onOpenDrawer={handleOpenDrawer}
              />
            ))}
          </MapContainer>
          {locals && (
            <>
              <div className="absolute left-0 right-0 top-4 z-30 mx-4 sm:left-24 sm:top-11">
                <SearchField
                  locals={locals}
                  onSelectLocal={handleSelectLocal}
                />
              </div>
              <div className="absolute bottom-4 left-0 right-0 z-20 sm:bottom-20">
                <CardSlider locals={locals} />
              </div>
            </>
          )}
        </div>
      )}

      <div className="absolute right-0 top-0 z-20 p-4">
        <Drawer
          item={{
            ...mockedItem,
            title: drawerSelectedLocal?.name || '',
            description: drawerSelectedLocal?.address || '',
          }}
          open={openDrawer}
          onOpenDrawer={setOpenDrawer}
        />
      </div>
    </>
  )
}
