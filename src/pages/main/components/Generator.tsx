import { GameMap } from '@models/GameMap.model';
import { Player } from '@models/Player.model';
import { RootState } from '@redux/reducers';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface GeneratorProps {
  onGenerate: () => void
}

interface ResultPreview {
  team1: number
  team2: number
}

const Generator = (props: GeneratorProps) => {
  // Props
  const { onGenerate } = props;

  // States
  const [activePlayerCnt, setActivePlayerCnt] = useState<number>(0);
  const [activeMapCnt, setActiveMapCnt] = useState<number>(0);
  const [preview, setPreview] = useState<ResultPreview | null>(null);

  // Redux
  const players: Player[] = useSelector((state: RootState) => state.player.players);
  const maps: GameMap[] = useSelector((state: RootState) => state.map.maps);

  // Hooks
  useEffect(() => {
    const { length } = players.filter(p => !p.isDisabled);
    setActivePlayerCnt(length);

    const { ceil, floor } = Math;

    if (length < 3) {
      setPreview(null);
      return;
    }

    const nextPreview: ResultPreview = {
      team1: ceil(length / 2),
      team2: floor(length / 2)
    }

    setPreview(nextPreview);
  }, [players]);

  useEffect(() => {
    const { length } = maps.filter(p => !p.isDisabled);
    setActiveMapCnt(length);
  }, [maps]);
  
  return (
    <div id='generator'>
      <div className='status-view'>
        {/* Player Card */}
        <div className="card">
          <div className="label">활성화된 플레이어</div>
          <div className="value">
            { activePlayerCnt.toLocaleString() }명
          </div>
        </div>
        {/* Player Card End */}

        {/* Map Card */}
        <div className="card">
          <div className="label">활성화된 맵</div>
          <div className="value">
          { activeMapCnt.toLocaleString() }개
          </div>
        </div>
        {/* Map Card End */}

        {/* Preview Card */}
        {
          preview &&
          <div className="card">
            <div className="label">예상 결과</div>
            <div className="value">
              { preview.team1.toLocaleString() } vs { preview.team2.toLocaleString() }
            </div>
          </div>
        }
        {/* Preview Card End */}
      </div>
      <div
        onClick={ onGenerate }
        className="generate-btn"
      >
        <div className="text">GENERATE</div>
        <img
          className='icon'
          src="/images/play-icon.png"
        />
      </div>
    </div>
  )
}
  
  export default  Generator;