import React, { useState } from 'react';
import { ReactComponent as PlusIcon } from '@assets/icons/ic-plus.svg'
import { ReactComponent as ConfirmIcon } from '@assets/icons/check.svg' 
import { ReactComponent as TimesIcon } from '@assets/icons/ic_x.svg';
import { Player } from '@models/Player.model';
import { AddPlayerAction } from '@redux/actions/playerAction';
import { addPlayer } from '@redux/action-creators/playerCreators';
import { useDispatch } from 'react-redux';
import { getRandomId } from '@plugins/library';

const PlayerAdd = () => {
  // States
  const [isOn, setIsOn] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [nick, setNick] = useState<string>('');

  // Redux
  const dispatch = useDispatch();

  // HandleClickPlus
  const handleClickPlus = () => {
    setName('');
    setNick('');
    setIsOn(true);
  }

  const handleClickCancel = () => {
    setIsOn(false);
  }

  // Confirm Click Handle
  const handleClickConfirm = () => {
    if (!name || !nick) return;

    const player: Player = {
      id: getRandomId(),
      name,
      nick,
      isDisabled: false
    }
    const addPlayerAction: AddPlayerAction = addPlayer(player);
    dispatch(addPlayerAction);
    setIsOn(false);
  }

  return (
    <div id='player-add'>
      {
        isOn &&
        <div className='add-form'>
          <div className="form-group">
            <input
              type="text"
              value={ name }
              onInput={ e => { setName((e.target as HTMLInputElement).value) } }
              placeholder='이름'
            />
            <input
              type="text"
              value={ nick }
              onInput={ e => { setNick((e.target as HTMLInputElement).value) } }
              placeholder='닉네임'
            />
          </div>

          <div className="form-icon" onClick={ handleClickCancel }>
            <TimesIcon className='times' />
          </div>

          <div className="form-icon" onClick={ handleClickConfirm }>
            <ConfirmIcon />
          </div>
        </div>
      }

      {
        !isOn &&
        <div className="add-icon" onClick={ handleClickPlus }>
          <PlusIcon className='plus-icon' />
        </div>
      }
    </div>
  )
}

export default PlayerAdd;