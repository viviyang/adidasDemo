import Star from './Star';
import * as ReactDOMClient from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('div') as HTMLElement;
  // Create a root.
  const root = ReactDOMClient.createRoot(div);
  root.render(<Star index={0} count={5} value={3} key={0} />);
});
