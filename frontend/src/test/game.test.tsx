
import { render } from '@testing-library/react';
import Game from '../pages/Game';

describe('Game Component', () => {
    it('renders without errors', () => {
      render(<Game />);
    });
  });