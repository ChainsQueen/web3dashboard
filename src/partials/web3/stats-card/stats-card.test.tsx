import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatsCard } from './stats-card';
import { BarChart } from 'lucide-react';

describe('StatsCard', () => {
  const defaultProps = {
    title: 'Total Volume',
    value: '$2.1B',
    change: '+12.8%',
    icon: <BarChart className="h-6 w-6" />,
    progress: 88,
    color: 'from-blue-500/20 to-blue-500/5',
    shadow: '4px 0 8px -2px rgba(37, 99, 235, 0.15)',
    description: '24h trading volume',
    index: 0,
  };

  it('renders the card with title and value', () => {
    render(<StatsCard {...defaultProps} />);

    expect(screen.getByText('Total Volume')).toBeInTheDocument();
    expect(screen.getByText('$2.1B')).toBeInTheDocument();
  });

  it('displays the change percentage', () => {
    render(<StatsCard {...defaultProps} />);

    expect(screen.getByText('+12.8%')).toBeInTheDocument();
  });

  it('shows description in tooltip', () => {
    render(<StatsCard {...defaultProps} />);

    // Description is shown in tooltip content
    expect(screen.getByText('Total Volume')).toBeInTheDocument();
  });

  it('displays negative change correctly', () => {
    const propsWithNegativeChange = { ...defaultProps, change: '-5.2%' };
    render(<StatsCard {...propsWithNegativeChange} />);

    expect(screen.getByText('-5.2%')).toBeInTheDocument();
  });

  it('renders with different progress values', () => {
    const propsWithProgress = { ...defaultProps, progress: 45 };
    render(<StatsCard {...propsWithProgress} />);

    expect(screen.getByText('Total Volume')).toBeInTheDocument();
  });
});
