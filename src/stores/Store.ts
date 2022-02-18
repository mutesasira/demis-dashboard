import moment from "moment";
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
  setWeeks,
  setUserUnits,
  setZoom,

} from "./Events";

export const $store = domain
  .createStore<Store>({
    currentUser: "",
    selectedUnits: "",
    userUnits: [],
    currentLevel: 3,
    zoom: 6.0,
    sublevel: 3,
    weeks: [],
    sublevels: [],
    period: [moment().subtract(1, 'days'), moment()]
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
  .on(changePeriod, (state, period) => {
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
  })
  .on(setWeeks, (state, weeks) => {
    return { ...state, weeks };
  });
