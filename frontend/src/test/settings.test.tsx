import { render } from '@testing-library/react';
import Settings from '../pages/Settings';

describe('Game Component', () => {
    it('renders without errors', () => {
      render(<Settings />);
    });
  });