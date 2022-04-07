import Rate from './index';
import * as ReactDOMClient from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('div') as HTMLElement;
  // Create a root.
  const root = ReactDOMClient.createRoot(div);
  root.render(<Rate value={4.6} count={5} />);
});
