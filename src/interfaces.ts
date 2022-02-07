export interface Store {
    currentUser: string;
    userUnits: any[];
    period: any[];
    name?: string;
    zoom: number;
    locations?: { id: string; name: string }[];
    selectedUnits: string;
    currentLevel: number;
    sublevel: number;
    sublevels: any[];
  }
  
  export interface DataValue {
    parameters: { [key: string]: string } | undefined;
    sqlView: string | "" | undefined | null;
  }
  export interface Indicator {
    numerator: DataValue;
    denominator: DataValue;
  }
  