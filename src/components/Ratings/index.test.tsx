import Ratings from './index';
import * as ReactDOMClient from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('div') as HTMLElement;
  // Create a root.
  const root = ReactDOMClient.createRoot(div);
  const ratesProp = {
    total: 5,
  };
  root.render(<Ratings {...ratesProp} />);
});
