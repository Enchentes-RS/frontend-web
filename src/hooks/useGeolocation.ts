import { useState, useEffect } from "react";

type Coordinates = [number, number]; // [latitude, longitude]

interface IUseGeoLocation {
  localStorageKey?: string;
  callback: (coordinates: Coordinates) => void;
}

/**
 * Retorna a o estado de geolocalização a ser renderizada, o carregamento e erro de permissões.
 *
 * @param {IUseGeoLocation} options - Um objeto que contém os parâmetros do hook.
 * @param {string} options.localStorageKey - A chave usada para guardar a permissão de localização no localStorage. O padrão é 'is-location-granted'.
 * @param {(coordinates: Coordinates) => void} options.callback - Uma função de callback que será chamada quando as coordenadas mudarem.
 * @return {{ loading: boolean, error: GeolocationPositionError | undefined, coords: Coordinates }} - Um objeto contendo o estado de carregamento, o erro e as coordenadas.
 */
export const useGeoLocation = ({
  localStorageKey = "is-location-granted",
  callback,
}: IUseGeoLocation) => {
  const [shouldRequestLocation, setShouldRequestLocation] = useState(false);

  // este estado indica que a aplicação está aguardando o usuário a dar ou recusar alguma permissão
  const [loading, setLoading] = useState(false);

  // este estado indica um erro de permissão para acessar a localização
  const [error, setError] = useState<GeolocationPositionError>();

  // coordenadas iniciais apontam para o centro de Porto Alegre. Caso o usuário dê permissão para usar sua localização, será atualizado.
  const [coords, setCoords] = useState<Coordinates>([-30.03, -51.23]);

  /**
   * Gerencia o callback de sucesso para a permissão de localização.
   *
   * @param {GeolocationPosition} location - O objeto de localização do usuário.
   * @return {void} Esta função não retorna nada.
   */
  const onSuccess = (location: GeolocationPosition) => {
    const newCoords: Coordinates = [
      location.coords.latitude,
      location.coords.longitude,
    ];

    setLoading(false);
    setCoords(newCoords);
    callback(newCoords);
    if (!("permissions" in navigator)) {
      localStorage.setItem(localStorageKey, JSON.stringify(true));
    }
  };

  /**
   * Atualiza o estado de carregamento e seta o erro para o objeto GeolocationPositionError.
   *
   * @param {GeolocationPositionError} error - O objeto de erro representando o erro de permissão de localização.
   * @return {void} Esta função não retorna nada.
   */
  const onError = (error: GeolocationPositionError) => {
    setLoading(false);
    setError(error);
  };

  useEffect(() => {
    if ("permissions" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state !== "granted") {
            setShouldRequestLocation(true);
          }
        });
    } else {
      const isLocationGranted = JSON.parse(
        localStorage.getItem(localStorageKey) || "false"
      );
      if (!isLocationGranted) {
        setShouldRequestLocation(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      const geoError = new GeolocationPositionError();
      setError({
        ...geoError,
        message: "Geolocation not supported",
      });
    } else if (shouldRequestLocation) {
      setLoading(true);
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 18000000,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRequestLocation]);

  return { loading, error, coords };
};
