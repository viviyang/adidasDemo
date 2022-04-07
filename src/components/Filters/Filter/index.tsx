import React from 'react';
import styles from '../index.module.scss';

export interface FilterProps {
  label: string;
  index: number;
}

const Filter: React.FC<FilterProps> = (props) => {
  const { label } = props;
  return (
    <div className={styles.filter} key={label}>
      <button className={styles.filterItem}>
        <span className={styles.label}>{label}</span>
      </button>
    </div>
  );
};

export default Filter;
