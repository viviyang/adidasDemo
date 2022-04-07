import React from 'react';
import styles from './index.module.scss';

export interface ComparisonBarProps {
  title: string;
  // activeLabel: number;
  labels: string[];
}

const ComparisonBar: React.FC<ComparisonBarProps> = (props) => {
  const { title, labels } = props;
  return (
    <div className={styles.comparisonBar}>
      <div className={styles.title}>
        <strong>{title}</strong>
      </div>
      <div className={styles.bar}>
        <div className={styles.indicator}></div>
      </div>
      <div className={styles.labels}>
        {labels.map((item) => {
          return (
            <label className={styles.labels} key={item}>
              {item}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonBar;
