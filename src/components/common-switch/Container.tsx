import React, { useState, useEffect } from 'react';
import Presentational from './Presentational';

// export type BadgeType = 'graphical' | 'numerical'

export interface SwitchProps {
  value: boolean;
  handleClick: () => void;
}

const SwitchContainer = ({ value, handleClick }: SwitchProps) => {
  return <Presentational value={value} handleClick={handleClick} />;
};

export default SwitchContainer;
