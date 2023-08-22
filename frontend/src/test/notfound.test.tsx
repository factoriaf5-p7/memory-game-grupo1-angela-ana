import { render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Game Component', () => {
    it('renders without errors', () => {
      render(<NotFound />);
    });
  });