import {Moment} from 'moment'
export interface Store {
    currentUser: string;
    userUnits: any[];
    period: [Moment,Moment];
    name?: string;
    zoom: number;
    locations?: { id: string; name: string }[];
    selectedUnits: string;
    currentLevel: number;
    sublevel: number;
    sublevels: any[];
    weeks: any[];
  }
  
  export interface DataValue {
    parameters: { [key: string]: string } | undefined;
    sqlView: string | "" | undefined | null;
  }
  export interface Indicator {
    numerator: DataValue;
    denominator: DataValue;
  }
  