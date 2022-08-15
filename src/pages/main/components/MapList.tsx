import { GameMap } from '@models/GameMap.model';
import { mapDatas } from '@pages/data';
import { extractClass } from '@plugins/library';
import { setMapData, toggleDisableMap } from '@redux/action-creators/mapCreators';
import { SetMapDataAction, ToggleDisableMapAction } from '@redux/actions/mapAction';
import { RootState } from '@redux/reducers';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MapList = () => {
  // Redux
  const dispatch = useDispatch();
  const maps: GameMap[] = useSelector((state: RootState) => state.map.maps)

  // Map Click Handle
  const handleClickMap = (index: number) => {
    const action: ToggleDisableMapAction = toggleDisableMap(index);
    dispatch(action);
  }

  // Hooks
  useEffect(() => {
    if (maps.length <= 0) {
      const actions: SetMapDataAction = setMapData(mapDatas);
      dispatch(actions);
    }
  }, []);

  return (
    <div id='map-list'>
      {
        maps.map((map: GameMap, index: number) => (
          <div  
            key={ `map-list-${ index }` }
            className={ extractClass('map-item', { disabled: map.isDisabled }) }
            onClick={ () => { handleClickMap(index) } }
          >
            { map.name }
          </div>
        ))
      }
    </div>
  )
}

export default MapList;