import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TokenTable } from './token-table';

describe('TokenTable', () => {
  const mockTokens = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$50,000',
      change: '+5.2%',
      marketCap: '$1T',
      volume: '$50B',
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$3,000',
      change: '-2.1%',
      marketCap: '$350B',
      volume: '$20B',
    },
  ];

  it('renders the table with token data', () => {
    render(<TokenTable tokens={mockTokens} />);

    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
  });

  it('displays token symbols', () => {
    render(<TokenTable tokens={mockTokens} />);

    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('ETH')).toBeInTheDocument();
  });

  it('shows token prices', () => {
    render(<TokenTable tokens={mockTokens} />);

    expect(screen.getByText('$50,000')).toBeInTheDocument();
    expect(screen.getByText('$3,000')).toBeInTheDocument();
  });

  it('displays positive and negative changes', () => {
    render(<TokenTable tokens={mockTokens} />);

    expect(screen.getByText('+5.2%')).toBeInTheDocument();
    expect(screen.getByText('-2.1%')).toBeInTheDocument();
  });

  it('renders empty state when no tokens provided', () => {
    render(<TokenTable tokens={[]} />);

    // Table should still render but with no data rows
    expect(screen.queryByText('Bitcoin')).not.toBeInTheDocument();
  });

  it('displays market cap and volume', () => {
    render(<TokenTable tokens={mockTokens} />);

    expect(screen.getByText('$1T')).toBeInTheDocument();
    expect(screen.getByText('$50B')).toBeInTheDocument();
  });
});
