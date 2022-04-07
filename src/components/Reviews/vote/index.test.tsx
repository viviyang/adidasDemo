import Vote from './index';
import * as ReactDOMClient from 'react-dom/client';

it('renders without crashing', () => {
  const div = document.createElement('div') as HTMLElement;
  // Create a root.
  const root = ReactDOMClient.createRoot(div);
  const votePro = {
    positiveFeedbackCount: 2,
    negativeFeedbackCount: 2,
  };
  root.render(<Vote {...votePro} />);
});
