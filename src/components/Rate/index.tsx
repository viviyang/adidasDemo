import React from 'react';
import Star from './Star';
import type { StarProps } from './Star';
import styles from './index.module.scss';

export interface RateProps extends Pick<StarProps, 'count' | 'value'> {
  value: number;
  style?: React.CSSProperties;
  tabIndex?: number;
}

const Rate: React.FC<RateProps> = (props) => {
  const { count, value, style, tabIndex } = props;

  const stars = [];
  for (let index = 0; index < count; index += 1) {
    stars.push(<Star index={index} count={count} value={value} style={style} key={index} />);
  }

  return (
    <div className={styles.stars} tabIndex={tabIndex} role="radiogroup">
      {stars}
    </div>
  );
};

export default Rate;
