import { render, screen } from '@testing-library/react';

import Home from '../index.page';

import '@testing-library/jest-dom';

describe('Home', () => {
  it('has Advent of Code - katiecordescodes.com Solutions as a title', async () => {
    render(<Home />);

    const title = screen.getByRole('title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Advent of Code - katiecordescodes.com Solutions');
  });
});