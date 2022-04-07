import * as ReactDOMClient from 'react-dom/client';
import Dropdown from './index';

it('renders without crashing', () => {
  const div = document.createElement('div') as HTMLElement;
  // Create a root.
  const root = ReactDOMClient.createRoot(div);
  root.render(
    <Dropdown
      label="Sort by"
      options={[
        { label: 'Relevant', value: 'relevant' },
        { label: 'Newest', value: 'newest' },
        { label: 'Helpful', value: 'helpful' },
        { label: 'Highest rated', value: 'highestRated' },
        { label: 'Lowest rated', value: 'lowestRated' },
      ]}
      value={'newest'}
      onChange={() => console.log('change')}
    />,
  );
});
