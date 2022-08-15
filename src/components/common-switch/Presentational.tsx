import React from 'react';
import './CommonSwitch.styl';
import { SwitchProps } from './Container';

const Presentational = ({ value, handleClick }: SwitchProps) => {
  return (
    <>
      <div className={`common-switch track ${value ? 'active' : ''}`} onClick={handleClick}>
        <div className="thumb"></div>
      </div>
    </>
  );
};

export default Presentational;
