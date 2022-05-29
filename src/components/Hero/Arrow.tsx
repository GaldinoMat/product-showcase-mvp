import * as React from 'react';

import styles from './Hero.module.scss';
import { IArrowProps } from './types/interfaces';

const Arrow = ({ direction, handleClick }: IArrowProps) => (
  <button type="button" onClick={handleClick} className={styles.sliderArrow} style={direction === 'right' ? { right: '25px' } : { left: '25px' }}>
    {direction === 'right' ? <p>Right</p> : <p>Left</p>}
  </button>
);

export default Arrow;
