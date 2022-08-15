import { Player } from '@models/Player.model';
import { PlayerTypes } from '@redux/action-types/playerTypes';
import { PlayerActions } from '@redux/actions/playerAction';
import produce from 'immer';

interface PlayerReducerState {
  players: Player[]
}

const initialState: PlayerReducerState = {
  players: []
}

const findReducer = (state: PlayerReducerState = initialState, action: PlayerActions) => {
  return produce(state, draft => {
    switch (action.type) {
      //SET_DATA
      case PlayerTypes.SET_DATA: {
        const { data } = action;
        draft.players = [...data];
        break;
      }
      // ADD_PLAYER
      case PlayerTypes.ADD_PLAYER: {
        const { player } = action;
        draft.players = [ ...draft.players, player ];
        break;
      }
      // REMOVE_PLAYER
      case PlayerTypes.REMOVE_PLAYER: {
        const { id } = action;
        const index: number = draft.players.findIndex(p => p.id === id);
        draft.players.splice(index, 1);
        break;
      }
      // TOGGLE_DISABLE_PLAYER
      case PlayerTypes.TOGGLE_DISABLE_PLAYER: {
        const { id } = action;
        const index: number = draft.players.findIndex(p => p.id === id);
        draft.players[index].isDisabled = !draft.players[index].isDisabled;
      }
      // DEFAULT
      default: {
        break;
      }
    }
  });
}

export default findReducer;