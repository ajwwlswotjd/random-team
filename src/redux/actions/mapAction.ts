import { GameMap } from '@models/GameMap.model';
import { MapTypes } from '@redux/action-types/mapTypes';
import { Action } from './Action.model';

export interface SetMapDataAction extends Action {
  type: MapTypes.SET_DATA,
  data: GameMap[]
}

export interface ToggleDisableMapAction extends Action {
  type: MapTypes.TOGGLE_DISABLE_MAP,
  index: number
}

export type MapActions =
| SetMapDataAction
| ToggleDisableMapAction