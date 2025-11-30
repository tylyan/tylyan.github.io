import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';

test('renders portfolio page', () => {
  render(
    <MemoryRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MemoryRouter>
  );
  const nameElements = screen.getAllByText(/Tommy Yan/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
