import * as React from 'react';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styles from './Hero.module.scss';
import { IArrowProps } from './types/interfaces';

const Arrow = ({ direction, handleClick }: IArrowProps) => {
  const handleArrowDirection = (_direction: string) => (
    _direction === 'right' ? { right: '25px', transform: 'translate(50%, -75%)' } : { left: '25px', transform: 'translate(-50%, -75%)' }
  );

  return (
    <button type="button" onClick={handleClick} className={styles.sliderArrow} style={handleArrowDirection(direction)}>
      {direction === 'right' ? <FaArrowRight /> : <FaArrowLeft />}
    </button>
  );
};

export default Arrow;
