import React from 'react';
import Filter from './Filter';
import styles from './index.module.scss';

export interface FilterProps {
  filters: string[];
}

const Filters: React.FC<FilterProps> = (props) => {
  const { filters } = props;
  return (
    <div className="gl-vspace-bpall-small">
      <div className="gl-body--s">
        <strong>Filter reviews by</strong>
      </div>
      <div className={styles.filters}>
        {filters.map((item, index) => {
          return <Filter key={item} label={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Filters;
