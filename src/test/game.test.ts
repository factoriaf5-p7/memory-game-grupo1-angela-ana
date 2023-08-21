import Game from '../pages/Game'; // Asegúrate de que la ruta a tu componente sea correcta
import { render } from 'vitest/react';

describe('Game Component', () => {
    it('renders without errors', () => {
      render(<Game />);
    });
  });