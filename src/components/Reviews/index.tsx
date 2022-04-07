import React from 'react';
import styles from './index.module.scss';
import Review from './Review';
import { ReviewProp } from '../../pages/rateReview/data';
import { DEFAULT_SHOW_COUNT } from '../../pages/rateReview';
import Dropdown from '../Dropdown';

export interface ReviewsProp {
  reviews: ReviewProp[];
  showCount: number;
  sortField: string;
  handleSortChange: (event: any) => void;
}
const Reviews: React.FC<ReviewsProp> = (props?: any) => {
  const { reviews, showCount, onClick, sortField, loading, handleSortChange } = props;
  return (
    <div className={styles.reviews}>
      <div className={styles.sortReview}>
        <div className={styles.sortReviewWrapper}>
          <Dropdown
            label="Sort by"
            options={[
              { label: 'Relevant', value: 'relevant' },
              { label: 'Newest', value: 'newest' },
              { label: 'Helpful', value: 'helpful' },
              { label: 'Highest rated', value: 'highestRated' },
              { label: 'Lowest rated', value: 'lowestRated' },
            ]}
            value={sortField}
            onChange={handleSortChange}
          />
        </div>
      </div>
      {(() => {
        if (loading && reviews.length == 0) {
          return <div> Data is coming soon.</div>;
        } else {
          return (
            <section>
              {reviews.map((item: any, index: number) => {
                return (
                  <Review key={item.id} {...Object.assign({ ...item }, { showCount, index })} />
                );
              })}
              <div className={styles.newControls}>
                <div>
                  <button className="gl-link gl-body--s" onClick={onClick}>
                    Read more reviews
                  </button>
                </div>
                {showCount > DEFAULT_SHOW_COUNT && (
                  <div>
                    <button className="gl-link gl-body--s">Go to filters</button>
                  </div>
                )}
              </div>
            </section>
          );
        }
      })()}
    </div>
  );
};

export default Reviews;
