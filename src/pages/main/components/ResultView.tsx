import { Result } from '@models/Result.model';
import React, { useState } from 'react';

interface ResultViewProps {
  result: Result | null
  text: string
}

const ResultView = (props: ResultViewProps) => {
  // Props
  const {
    result,
    text
  } = props;
  
  return (
    <div id='result-view'>
      {
        result &&
        <div className='view-wrapper'>
          {/* Team1 */}
          <div className="team-view team1">
            {
              result.team1.map((player, index) => (
                <div
                  key={ `team1-player-${ index }` }
                  className="player"
                >
                  <div className="name">
                    { player.name }
                  </div>
                  <div className="nick">
                    { player.nick }
                  </div>
                </div>
              ))
            }
          </div>
          {/* Team1 End */}

          {/* Map */}
          <div className="map-text">
            { result.map.name }
          </div>
          {/* Map End */}

          {/* Team2 */}
          <div className="team-view team2">
            {
              result.team2.map((player, index) => (
                <div
                  key={ `team1-player-${ index }` }
                  className="player"
                >
                  <div className="name">
                    { player.name }
                  </div>
                  <div className="nick">
                    { player.nick }
                  </div>
                </div>
              ))
            }
          </div>
          {/* Team2 End */}
        </div>
      }
      {
        result === null &&
        <div className='alert-view'>
          { text }
        </div>
      }
    </div>
  )
}
  
  export default  ResultView;