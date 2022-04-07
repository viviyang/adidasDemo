import React, { useState } from 'react';
import styles from '../index.module.scss';
import { useBoolean } from 'ahooks';
import type { ReviewProps } from '../Review';

interface VoteProps extends Pick<ReviewProps, 'positiveFeedbackCount' | 'negativeFeedbackCount'> {}

const Vote: React.FC<VoteProps> = (props) => {
  const { positiveFeedbackCount, negativeFeedbackCount } = props;
  const [positiveVoted, { setTrue: setPositiveVoted }] = useBoolean(false);
  const [negativeVoted, { setTrue: setNegativeVoted }] = useBoolean(false);
  const [positiveCount, setPositiveCount] = useState<number>(positiveFeedbackCount);
  const [negativeCount, setNegativeCount] = useState<number>(negativeFeedbackCount);

  return (
    <div className={`${styles.votingWrapper} ${positiveVoted ? styles.voted : ''}`}>
      <span>Helpful?</span>
      <div className={styles.feedback}>
        <button
          className={styles.voteButton}
          onClick={() => {
            if (!negativeVoted && !positiveVoted) {
              setPositiveCount((prev) => prev + 1);
              setPositiveVoted();
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {positiveVoted && (
              <path
                d="M2 16V9.40572H6.79143V10.254C6.79143 10.254 7.94834 9.61701 8.5 9C9.15551 8.26684 9.13417 8.27672 9.66629 6.76801C9.96004 5.93512 10.1454 4.1303 10.1454 4.1303C10.1454 4.1303 11.1213 3.83713 11.5829 4.1303C12.0694 4.43932 12.5411 5.84347 12.5411 6.76801C12.5411 7.69254 12.3375 8.52648 12.3375 8.52648H16.8534C18.77 8.9661 17.8117 12.0434 17.3326 13.8019C16.8534 15.5604 14.9369 15.8697 14.9369 15.8697H9L6.79143 14.7719V16H2Z"
                fill="black"
              />
            )}
            <path
              d="M6.79143 10.254V9.40572H2V16H6.79143V14.7719M6.79143 10.254C6.79143 10.254 7.94834 9.61701 8.5 9C9.15551 8.26684 9.13417 8.27672 9.66629 6.76801C9.96004 5.93512 10.1454 4.1303 10.1454 4.1303C10.1454 4.1303 11.1213 3.83713 11.5829 4.1303C12.0694 4.43932 12.5411 5.84347 12.5411 6.76801C12.5411 7.69254 12.3375 8.52648 12.3375 8.52648H16.8534C18.77 8.9661 17.8117 12.0434 17.3326 13.8019C16.8534 15.5604 14.9369 15.8697 14.9369 15.8697H9L6.79143 14.7719M6.79143 10.254V14.7719"
              stroke="black"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className={styles.count}>{positiveCount}</span>
      </div>
      <div className={styles.feedback}>
        <button
          className={styles.voteButton}
          onClick={() => {
            if (!negativeVoted && !positiveVoted) {
              setNegativeCount((prev) => prev + 1);
              setNegativeVoted();
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {negativeVoted && (
              <path
                d="M2 4L2 10.5943L6.79143 10.5943L6.79143 9.74598C6.79143 9.74598 7.94834 10.383 8.5 11C9.15551 11.7332 9.13417 11.7233 9.66629 13.232C9.96004 14.0649 10.1454 15.8697 10.1454 15.8697C10.1454 15.8697 11.1213 16.1629 11.5829 15.8697C12.0694 15.5607 12.5411 14.1565 12.5411 13.232C12.5411 12.3075 12.3375 11.4735 12.3375 11.4735L16.8534 11.4735C18.77 11.0339 17.8117 7.95657 17.3326 6.19809C16.8534 4.43962 14.9369 4.1303 14.9369 4.1303L9 4.1303L6.79143 5.22814L6.79143 4L2 4Z"
                fill="black"
              />
            )}
            <path
              d="M6.79143 9.74598V10.5943H2V4H6.79143V5.22814M6.79143 9.74598C6.79143 9.74598 7.94834 10.383 8.5 11C9.15551 11.7332 9.13417 11.7233 9.66629 13.232C9.96004 14.0649 10.1454 15.8697 10.1454 15.8697C10.1454 15.8697 11.1213 16.1629 11.5829 15.8697C12.0694 15.5607 12.5411 14.1565 12.5411 13.232C12.5411 12.3075 12.3375 11.4735 12.3375 11.4735H16.8534C18.77 11.0339 17.8117 7.95657 17.3326 6.19809C16.8534 4.43962 14.9369 4.1303 14.9369 4.1303H9L6.79143 5.22814M6.79143 9.74598V5.22814"
              stroke="black"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className={styles.count}>{negativeCount}</span>
      </div>
      {(positiveVoted || negativeVoted) && (
        <div className={styles.voteConfirmationText}>
          <span>Thank you! You have successfully submitted feedback for this review</span>
        </div>
      )}
    </div>
  );
};

export default Vote;
