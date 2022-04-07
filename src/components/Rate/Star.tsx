import React from 'react';
import styles from './index.module.scss';
export interface StarProps {
  value: number;
  index: number;
  count: number;
  style?: React.CSSProperties;
}

const Star: React.FC<StarProps> = (props) => {
  const { index, count, value, style } = props;

  const getWidth = () => {
    const starValue = index + 1;
    let width = 88;
    if (value + 0.5 >= starValue && value < starValue) {
      width *= value - Math.floor(value);
    } else if (starValue > value) {
      width = 12;
    }
    return width + '%';
  };
  return (
    <div className={styles.item} key={index} data-count={count}>
      <div className={styles.mask} style={{ width: getWidth() }}>
        <svg
          style={style}
          className={styles.star}
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill"
            fill="currentColor"
            stroke="0"
            d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
          ></path>
        </svg>
      </div>
      <svg
        style={style}
        className={styles.star}
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="outline"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
        ></path>
      </svg>
    </div>
  );
};

export default Star;
