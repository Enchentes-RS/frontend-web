interface IPoint {
  type: 'Point' | 'Polygon' | 'Line' | 'MultiPolygon' | 'Multiline';
  coordinates: number[];
}

class Point implements IPoint {
  public type: 'Point' | 'Polygon' | 'Line' | 'MultiPolygon' | 'Multiline';
  public coordinates: number[];

  constructor(coordinates: number[]) {
    this.type = 'Point';
    this.coordinates = coordinates;
  }
}

interface IFeature {
  type: 'Feature';
  geometry: IPoint;
  properties: { [key: string]: unknown };
}

class Feature implements IFeature {
  public type: 'Feature';
  public geometry: IPoint;
  public properties: { [key: string]: unknown };

  constructor(coordinates: number[], properties: { [key: string]: unknown }) {
    this.type = 'Feature';
    this.geometry = new Point(coordinates);
    this.properties = properties;
  }
}

interface IGeoJSON {
  type: 'FeatureCollection';
  features: IFeature[];
}

type CoordinatesWithDataType = {
  coordinates: number[];
  properties: { [x: string]: unknown };
};

interface IGeoJSONConstructor {
  coordinatesWithData: CoordinatesWithDataType[];
}

export class GeoJSON implements IGeoJSON {
  public type: 'FeatureCollection';
  public features: IFeature[];

  constructor({ coordinatesWithData }: IGeoJSONConstructor) {
    this.type = 'FeatureCollection';
    this.features = [];
    this.concatCoordinates(coordinatesWithData);
  }

  concatCoordinates(coordinatesWithData: CoordinatesWithDataType[]) {
    coordinatesWithData.forEach(({ coordinates, properties }) => {
      const feature = new Feature(coordinates, properties);
      this.features.push(feature);
    });
  }
}
