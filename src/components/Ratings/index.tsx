import React from 'react';
import styles from './index.module.scss';
import Rate from '../Rate';
import ComparisonBar from '../ComparisonBar';
import Filters from '../Filters';

export interface PrimarySubRatingProps {
  rate: string;
  name: string;
}

const filtersProp = {
  filters: ['Rating', 'Quality', 'Color', 'Satisfaction', 'Design', 'Comfort'],
};
const PrimarySubRating: React.FC<PrimarySubRatingProps> = (props) => {
  const { rate, name } = props;
  return (
    <div className={styles.primarySubRating}>
      <div className={styles.averageRating}>
        <svg className={styles.icon} viewBox="0 0 19 19">
          <path
            d="M9.5 14.26l5.86 4.26-2.23-6.91L19 7.35h-7.25L9.5.48 7.25 7.35H0l5.87 4.26-2.24 6.91z"
            fill="currentColor"
          />
        </svg>
        <label className={styles.label}>{rate}</label>
      </div>
      <div className={styles.name}>
        <strong>{name}</strong>
      </div>
    </div>
  );
};

export interface RatingsProps {
  total?: number;
}
const Ratings: React.FC<RatingsProps> = (props) => {
  const { total } = props;
  return (
    <div className={styles.rates}>
      <div className={styles.header}>
        <strong>{`${total} Reviews`} </strong>
      </div>
      <div className={styles.starRating}>
        <Rate value={4.6} count={5} />
        <div className={styles.text}>4.6</div>
      </div>
      <div className={styles.subRatings}>
        <div className={styles.primarySubRatings}>
          <PrimarySubRating rate="4.0" name="comfort" />
          <PrimarySubRating rate="4.4" name="quality" />
        </div>
        <div className={styles.sectionDivider} />
        <div className="gl-vspace-bpall-small">
          <ComparisonBar title="Size" labels={['Zu klein', 'perfect', 'Zu groß']} />
          <ComparisonBar title="Width" labels={['Zu schmal', 'perfect', 'Zu breit']} />
        </div>
        <Filters {...filtersProp} />
      </div>
    </div>
  );
};

export default Ratings;
