import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Tabs } from '../src';

describe('<Tabs />', () => {
  it('renders correctly', () => {
    render(<Tabs />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});
