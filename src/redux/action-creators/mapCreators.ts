import { GameMap } from "@models/GameMap.model";
import { MapTypes } from "@redux/action-types/mapTypes";
import { SetMapDataAction, ToggleDisableMapAction } from "@redux/actions/mapAction";

export const setMapData = (data: GameMap[]): SetMapDataAction => ({
  type: MapTypes.SET_DATA,
  data
});

export const toggleDisableMap = (index: number): ToggleDisableMapAction => ({
  type: MapTypes.TOGGLE_DISABLE_MAP,
  index
});
