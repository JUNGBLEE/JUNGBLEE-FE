export interface MapRequest {
  x: number;
  y: number;
}

export interface MapResponse {
  mapResponseList: MapList[];
}

export interface MapList {
  id: number;
  latitude: number;
  longitude: number;
  casualties: number;
  type: string;
  attackerAge: number;
  victimAge: number;
}
