import React from 'react';
import styles from '../index.module.scss';
import { useBoolean } from 'ahooks';
import Rate from '../../Rate';
import Vote from '../vote';

interface photo {
  normalUrl: string;
  thumbnailUrl: string;
}
export interface ReviewProps {
  index: number;
  id: string;
  title: string;
  text: string;
  userNickname: string;
  formattedDate: string;
  badges: string[];
  positiveFeedbackCount: number;
  negativeFeedbackCount: number;
  photos: photo[];
  showCount: number;
  rating: number;
  ratingRange: number;
}

const Review: React.FC<ReviewProps> = (props) => {
  const {
    index,
    id,
    title,
    text,
    userNickname,
    formattedDate,
    badges,
    positiveFeedbackCount,
    negativeFeedbackCount,
    photos,
    showCount,
    rating,
    ratingRange,
  } = props;

  const [readMoreClicked, { toggle: readMoreToggle }] = useBoolean(false);
  const [reportViewClicked, { setTrue: reportViewSetTrue }] = useBoolean(false);

  const votePro = {
    positiveFeedbackCount,
    negativeFeedbackCount,
  };

  return (
    <article
      data-id={id}
      key={id}
      className={`${styles.review} ${index >= showCount ? styles.hidden : ''}`}
    >
      <div>
        <strong className={styles.title}>{title}</strong>
      </div>
      <Rate value={rating} count={ratingRange} style={{ height: 11, width: 11 }} />
      <div className={styles.textContainer}>
        <div className={styles.clamped}>{text}</div>
        <div className={styles.readMoreContainer}>
          {!readMoreClicked && (
            <button className="gl-link gl-body--s" onClick={readMoreToggle}>
              Read more
            </button>
          )}
        </div>
      </div>
      <div className={styles.photos}>
        {photos.map((item, idx) => {
          return (
            <button key={idx} className={styles.photo}>
              <img loading="lazy" src={item.thumbnailUrl} width="85" height="85" alt="" />
            </button>
          );
        })}
      </div>
      {readMoreClicked && (
        <div className={styles.info}>
          {userNickname + ' | ' + formattedDate}
          {badges.includes('VerifiedPurchaser') && ' | Verified Purchaser'}
          {badges.includes('IncentivizedReview') && ' | Incentivised Review'}
        </div>
      )}
      {badges.includes('top1000Contributor') && (
        <div className={styles.badge}>
          <img
            src="https://www.adidas.de/glass/react/fa98fb0/assets/img/contributor-icon.svg"
            alt="badge"
            width="24"
            height="24"
          />
          <span className={styles.text}>Top 1,000 contributor</span>
        </div>
      )}
      <Vote {...votePro} />
      {readMoreClicked && (
        <div className={styles.infoContainer}>
          <div
            className={reportViewClicked ? styles.reportReviewMsg : styles.reportReviewBtn}
            onClick={reportViewSetTrue}
          >
            {reportViewClicked ? 'Review reported.' : 'Report review'}
          </div>
        </div>
      )}
    </article>
  );
};

export default Review;
