import { Player } from "@models/Player.model";
import { PlayerTypes } from "@redux/action-types/playerTypes";
import { AddPlayerAction, RemovePlayerAction, SetDataAction, ToggleDisablePlayerAction } from "@redux/actions/playerAction";

export const setData = (data: Player[]): SetDataAction => ({
  type: PlayerTypes.SET_DATA,
  data
})

export const addPlayer = (player: Player): AddPlayerAction => ({
  type: PlayerTypes.ADD_PLAYER,
  player
})

export const removePlayer = (id: string): RemovePlayerAction => ({
  type: PlayerTypes.REMOVE_PLAYER,
  id
})

export const toggleDisablePlayer = (id: string): ToggleDisablePlayerAction => ({
  type: PlayerTypes.TOGGLE_DISABLE_PLAYER,
  id
})