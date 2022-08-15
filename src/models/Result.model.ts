import { GameMap } from "./GameMap.model";
import { Player } from "./Player.model";

export interface Result {
  team1: Player[]
  team2: Player[]
  map: GameMap
}