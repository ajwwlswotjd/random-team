import { GameMap } from '@models/GameMap.model';
import { MapTypes } from '@redux/action-types/mapTypes';
import { MapActions } from '@redux/actions/mapAction';
import produce from 'immer';

interface MapReducerState {
  maps: GameMap[]
}

const initialState: MapReducerState = {
  maps: []
}

const mapReducer = (state: MapReducerState = initialState, action: MapActions) => {
  return produce(state, draft => {
    switch (action.type) {
      // SET_DATA
      case MapTypes.SET_DATA: {
        const { data } = action;
        draft.maps = data;
        break;
      }
      // TOGGLE_DISABLE_MAP
      case MapTypes.TOGGLE_DISABLE_MAP: {
        const { index } = action;
        draft.maps[index].isDisabled = !draft.maps[index].isDisabled;
      }
      // DEFAULT
      default: {
        break;
      }
    }
  });
}

export default mapReducer;