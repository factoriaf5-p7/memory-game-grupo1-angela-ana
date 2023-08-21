import { render } from '@testing-library/react';
import Hero from '../pages/Hero';

describe('Game Component', () => {
    it('renders without errors', () => {
      render(<Hero />);
    });
  });