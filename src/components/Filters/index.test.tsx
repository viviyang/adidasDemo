import Filters from './index';
import * as ReactDOMClient from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('div') as HTMLElement;
  // Create a root.
  const root = ReactDOMClient.createRoot(div);
  const filtersProp = {
    filters: ['Rating', 'Quality', 'Color', 'Satisfaction', 'Design', 'Comfort'],
  };

  root.render(<Filters {...filtersProp} />);
});
