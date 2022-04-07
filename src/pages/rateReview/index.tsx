import React, { useEffect, useState } from 'react';
import Reviews from '../../components/Reviews';
import Ratings from '../../components/Ratings';
import { useRequest } from 'ahooks';
import { getReview } from './service';
import type { ReviewQueryParams, ReviewProp } from './data';

const LIMIT = 5;
const DEFAULT_SHOW_COUNT = 3;
const defaultQueryParam = {
  includeLocales: 'en*',
  limit: DEFAULT_SHOW_COUNT + LIMIT,
  offset: 0,
  sort: 'newest',
};

const RateReview: React.FC = () => {
  const [queryParams, setQueryParams] = useState<ReviewQueryParams>(defaultQueryParam);
  const [reviewData, setReviewData] = useState<ReviewProp[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(DEFAULT_SHOW_COUNT);
  const { loading, run } = useRequest(getReview, {
    manual: true,
    onSuccess: (result, params) => {
      const { data } = result;
      const query = params[0];

      if (query.offset == 0) {
        setReviewData(data.reviews);
      } else {
        setReviewData(reviewData.concat(data.reviews));
      }

      setTotal(data.totalResults);
      setQueryParams({
        ...query,
      });
    },
    onError: (error) => {
      console.log(`need to report the error ${error}`);
    },
  });

  useEffect(() => {
    run(queryParams);
  }, []);

  //The interface provided in the email does not have enough data for this component
  const ratesProp = {
    total: total,
  };

  const reviewsProp = {
    reviews: reviewData,
    showCount: showCount,
    loading,
    sortField: queryParams.sort,
    onClick: () => {
      const param: ReviewQueryParams = { ...queryParams };
      param.offset = param.offset + param.limit;
      param.limit = LIMIT;

      if (param.offset < total) {
        run(param);
        setShowCount((prev) => {
          return prev + LIMIT;
        });
      }
    },
    handleSortChange: (event: any) => {
      const param: ReviewQueryParams = { ...defaultQueryParam };
      param.sort = event.target.value;
      run(param);
      setShowCount(DEFAULT_SHOW_COUNT);
    },
  };
  return (
    <div className="App">
      <div className="content-wrapper">
        <Ratings {...ratesProp} />
        <Reviews {...reviewsProp} />
      </div>
    </div>
  );
};

export default RateReview;
