import { GameMap } from '@models/GameMap.model';
import { Player } from '@models/Player.model';
import { Result } from '@models/Result.model';
import { RootState } from '@redux/reducers';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Generator from './components/Generator';
import MapList from './components/MapList';
import PlayerList from './components/PlayerList';
import ResultView from './components/ResultView';
import './Main.styl';

const Main = () => {
  // Redux
  const players: Player[] = useSelector((state: RootState) => state.player.players);
  const maps: GameMap[] = useSelector((state: RootState) => state.map.maps);

  // States
  const [result, setResult] = useState<Result | null>(null);
  const [resultText, setResultText] = useState<string>('');
  
  // Handle Click Generate Button
  const onGenerate = () => {
    const activePlayers: Player[] = players.filter(p => !p.isDisabled);
    const activeMaps: GameMap[] = maps.filter(m => !m.isDisabled);

    if (activePlayers.length < 2) {
      setResult(null);
      setResultText('최소 3인 이상의 인원이 필요합니다.');
      return;
    }

    if (activeMaps.length <= 0) {
      setResult(null);
      setResultText('활성화된 맵이 없습니다.');
      return;
    }

    // Player Generate
    activePlayers.sort(() => Math.random() - 0.5);
    const sliceIndex = Math.ceil(activePlayers.length / 2);
    const team1: Player[] = activePlayers.slice(0, sliceIndex);
    const team2: Player[] = activePlayers.slice(sliceIndex, activePlayers.length);

    // Map Generate
    const mapIndex: number = ~~(Math.random() * activeMaps.length);
    const map: GameMap = activeMaps[mapIndex];

    // Result
    const result: Result = {
      team1,
      team2,
      map
    };

    setResult(result);
  }

  // Hooks
  useEffect(() => {
    setResultText('실행된 결과가 없습니다.');
  }, []);
  
  return (
    <div id='main'>
    {/* Player List */}
    <PlayerList />
    
    {/* Player List End */}

    {/* Map List */}
    <MapList />
    {/* Map List End */}
    
    {/* Generator */}
    <Generator
      onGenerate={ onGenerate }
    />
    {/* Generator End */}
    
    {/* Result View */}
    <ResultView
      result={ result }
      text={ resultText }
    />
    {/* Result View End */}
    </div>
    )
  }
  
  export default Main;