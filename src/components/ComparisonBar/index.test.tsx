import ComparisonBar from './index';
import * as ReactDOMClient from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('div') as HTMLElement;

  // Create a root.
  const root = ReactDOMClient.createRoot(div);
  root.render(<ComparisonBar title="Size" labels={['Zu klein', 'perfect', 'Zu groß']} />);
});
