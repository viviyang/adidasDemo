import Reviews from './index';
import * as ReactDOMClient from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('div') as HTMLElement;
  // Create a root.
  const root = ReactDOMClient.createRoot(div);
  const reviewsProp = {
    reviews: [],
    showCount: 0,
    loading: false,
    sortField: '',
    onClick: () => {
      console.log('click');
    },
    handleSortChange: (event: any) => {
      console.log('change');
    },
  };
  root.render(<Reviews {...reviewsProp} />);
});
