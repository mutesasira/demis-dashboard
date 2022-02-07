import { Store } from "../interfaces";
import { domain } from "./Domain";
import {
  changeCurrentUser,
  setCurrentLevel,
  setDays,
  setGeojson,
  setLocations,
  setSelectedUnits,
  changePeriod,
  setSublevel,
  setSublevels,
  setUserUnits,
  setZoom,
} from "./Events";

export const $store = domain
  .createStore<Store>({
    currentUser: "",
    selectedUnits: "",
    period: [{ id: "LAST_3_MONTHS", name: "Last 3 months" }, { id: "QUARTERS", name: "Last Quarter" }],
    userUnits: [],
    currentLevel: 3,
    zoom: 6.0,
    sublevel: 3,

    sublevels: [],
  })
  .on(changeCurrentUser, (state, user) => {
    return { ...state, currentUser: user };
  })
  .on(setSelectedUnits, (state, selectedUnits) => {
    return { ...state, selectedUnits };
  })
  .on(setGeojson, (state, geojson) => {
    return { ...state, geojson };
  })
  .on(setLocations, (state, locations) => {
    return { ...state, locations };
  })
  .on(setUserUnits, (state, userUnits) => {
    return { ...state, userUnits };
  })
  .on(setCurrentLevel, (state, currentLevel) => {
    return { ...state, currentLevel };
  })
  .on(setZoom, (state, zoom) => {
    return { ...state, zoom };
  })
  .on(changePeriod, (state, period: any[]) => {
    return { ...state, period };
  })
  .on(setSublevel, (state, sublevel) => {
    return { ...state, sublevel };
  })
  .on(setDays, (state, days) => {
    return { ...state, days };
  })
  .on(setSublevels, (state, sublevels) => {
    return { ...state, sublevels };
  });
