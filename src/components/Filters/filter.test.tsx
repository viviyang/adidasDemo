import Filter from './Filter';
import * as ReactDOMClient from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('div') as HTMLElement;
  // Create a root.
  const root = ReactDOMClient.createRoot(div);
  const filterPro = {
    label: 'test',
    index: 0,
  };
  root.render(<Filter {...filterPro} />);
});
