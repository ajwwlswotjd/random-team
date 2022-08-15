import { Player } from "@models/Player.model";
import { PlayerTypes } from "@redux/action-types/playerTypes";
import { Action } from './Action.model';

export interface SetDataAction extends Action {
  type: PlayerTypes.SET_DATA,
  data: Player[]
}

export interface AddPlayerAction extends Action {
  type: PlayerTypes.ADD_PLAYER,
  player: Player
}

export interface RemovePlayerAction extends Action {
  type: PlayerTypes.REMOVE_PLAYER,
  id: string
}

export interface ToggleDisablePlayerAction extends Action {
  type: PlayerTypes.TOGGLE_DISABLE_PLAYER,
  id: string
}

export type PlayerActions =
  | SetDataAction
  | AddPlayerAction
  | RemovePlayerAction
  | ToggleDisablePlayerAction