import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@tanstack/react-query';
import type { Map } from 'leaflet';
import { GeoJSON, Marker } from 'leaflet';
import { useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { GeoJSON as GeoJSONObject } from '../classes/GeoJSON';
import { BottomSheet } from '../components/BottomSheet';
import { MapSearch } from '../components/MapSearch';
import { MarkerBottomSheetData } from '../components/MarkerBottomSheetData';
import { useGeoLocation } from '../hooks/useGeolocation';
import type { FormattedCSVDataProperties } from '../services/getCSVData';
import { getCSVData } from '../services/getCSVData';

export const MapContent = () => {
  const [loadingMap, setLoadingMap] = useState(true);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [markerToDisplay, setMarkerToDisplay] =
    useState<FormattedCSVDataProperties | null>(null);

  const mapRef = useRef<Map | null>(null);

  const flyToCoordinate = (coordinates: [number, number]) => {
    mapRef?.current?.setView(coordinates, undefined, {
      animate: true,
      duration: 1,
    });
  };

  const closeBottomSheetCallback = () => {
    setMarkerToDisplay(null);
  };

  const { coords: userCoords } = useGeoLocation({
    callback: flyToCoordinate,
  });

  const { data: coordinatesWithData, isLoading: isLoadingCSVData } = useQuery({
    queryKey: ['csv-data'],
    queryFn: getCSVData,
  });

  const renderGeoJSONData = () => {
    if (!coordinatesWithData) return;

    const data = new GeoJSONObject({
      coordinatesWithData,
    });

    const layer = new GeoJSON(data, {
      style: {},
      pointToLayer: (_feature, latlng) => {
        return new Marker(latlng);
      },
      onEachFeature: (feature, layer) => {
        layer.on('click', () => {
          setIsBottomSheetOpen(true);
          setMarkerToDisplay(feature.properties);
        });
      },
    });

    mapRef.current?.addLayer(layer);
  };

  return (
    <>
      <div className="relative mx-auto max-w-4xl rounded border-2 border-gray-200 p-4 shadow-lg">
        <MapSearch
          coordinatesWithData={coordinatesWithData}
          flyToCoordinate={flyToCoordinate}
        />

        <MapContainer
          center={userCoords}
          zoom={13}
          scrollWheelZoom
          ref={(ref) => {
            ref?.whenReady(() => {
              setLoadingMap(false);
            });
            ref?.zoomControl.setPosition('bottomright');
            mapRef.current = ref;
          }}
          className="z-[0] h-[600px] w-full"
        >
          {loadingMap || isLoadingCSVData ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '600px',
              }}
            >
              <CircularProgress />
            </div>
          ) : (
            <>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {renderGeoJSONData()}
            </>
          )}
        </MapContainer>
      </div>

      <BottomSheet
        isBottomSheetOpen={isBottomSheetOpen}
        setIsBottomSheetOpen={setIsBottomSheetOpen}
        closeBottomSheetCallback={closeBottomSheetCallback}
      >
        {markerToDisplay ? (
          <MarkerBottomSheetData markerToDisplay={markerToDisplay} />
        ) : null}
      </BottomSheet>
    </>
  );
};
