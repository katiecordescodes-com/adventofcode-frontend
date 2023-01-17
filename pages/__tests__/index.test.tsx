import { render, screen } from '@testing-library/react';

import Home from '../index.page';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const edit = screen.getByText('Get started by editing');

    expect(edit).toBeInTheDocument();
  });
});