import React from 'react';
import './App.scss';
import RateReview from './pages/rateReview';
const App: React.FC = () => {
  return (
    <div className="App">
      <svg width="0" height="0">
        <symbol id="dropdown" viewBox="0 0 16 24">
          <title>dropdown</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M1.5 9L8 15.5 14.5 9"
          />
        </symbol>
      </svg>
      <RateReview />
    </div>
  );
};
export default App;
