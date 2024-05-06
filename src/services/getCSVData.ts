import csvData from '../../centros_voluntarios_rs.json';

export type CoordinatesWithDataType = {
  DOACOES: string | null;
  ENDERECO: string;
  'GRUPO WHATS': string | null;
  LOCAL: string;
  Latitude: number;
  Longitude: number;
  OBS: string | null;
  VOLUNTARIOS: string | null;
};

export type FormattedCSVDataProperties = Omit<
  CoordinatesWithDataType,
  'Latitude' | 'Longitude'
>;
export type FormattedCSVData = {
  coordinates: number[];
  properties: FormattedCSVDataProperties;
};

// Temporariamente utilizando os dados exportados do csv. A ideia é usar este service para servir o frontend através das estruturas já montadas
export const getCSVData = async (): Promise<FormattedCSVData[]> => {
  const formattedCSVData = csvData.flatMap<FormattedCSVData>((data) => {
    if (!data.Longitude || !data.Latitude || !data.ENDEREÇO || !data.LOCAL)
      return [];

    return {
      coordinates: [data.Longitude, data.Latitude],
      properties: {
        DOACOES: data.DOACOES,
        ENDERECO: data.ENDEREÇO,
        'GRUPO WHATS': data['GRUPO WHATS'],
        LOCAL: data.LOCAL,
        OBS: data.OBS,
        VOLUNTARIOS: data.VOLUNTARIOS,
      },
    };
  });

  return formattedCSVData;
};
