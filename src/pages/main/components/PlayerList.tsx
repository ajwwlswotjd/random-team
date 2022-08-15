import { Player } from '@models/Player.model';
import { RootState } from '@redux/reducers';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommonSwitch } from '@components/common-switch';
import { ReactComponent as TimesIcon } from '@assets/icons/ic_x.svg';
import PlayerAdd from './PlayerAdd';
import { RemovePlayerAction, SetDataAction, ToggleDisablePlayerAction } from '@redux/actions/playerAction';
import { removePlayer, setData, toggleDisablePlayer } from '@redux/action-creators/playerCreators';
import { playerDatas } from '@pages/data';

const PlayerList = () => {
  // Redux
  const dispatch = useDispatch();
  const players: Player[] = useSelector((state: RootState) => state.player.players);

  // 삭제 클릭 핸들링
  const handleClickRemove = (id: string) => {
    const removePlayerAction: RemovePlayerAction = removePlayer(id);
    dispatch(removePlayerAction);
  }

  // disabled 토글링
  const handleInputSwitch = (id: string) => {
    const toggleDisablePlayerAction: ToggleDisablePlayerAction = toggleDisablePlayer(id);
    dispatch(toggleDisablePlayerAction);
  }

  // Hooks
  useEffect(() => {
    if (players.length <= 0) {
      const actions: SetDataAction = setData(playerDatas);
      dispatch(actions);
    }
  }, []);
  
  return (
    <div id='player-list'>
      {/* Player Items */}
      {
        players.map((player, index) => (
          <div
            key={ `player-${ index }` }
            className="player-item"
          >
            <div className="info">
              <div className="name">
                { player.name }
              </div>
              <div className="nick">
                { player.nick }
              </div>
            </div>

            <div className="control">
              <CommonSwitch
                handleClick={ () => { handleInputSwitch(player.id) } }
                value={ !player.isDisabled }
              />

              <TimesIcon
                onClick={ () => { handleClickRemove(player.id) } }
                className='delete-icon'
              />
            </div>
          </div>
        ))
      }
      {/* Player Items End */}

      {/* Player Add */}
      <PlayerAdd />
      {/* Player Add End */}
    </div>
  )
}
  
  export default  PlayerList;