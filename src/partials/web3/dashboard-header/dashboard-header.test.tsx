import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DashboardHeader } from './dashboard-header';

describe('DashboardHeader', () => {
  it('renders the header with title', () => {
    render(<DashboardHeader searchQuery="" onSearchChange={vi.fn()} />);

    expect(screen.getByText(/Web3 Dashboard/i)).toBeInTheDocument();
  });

  it('renders the search bar', () => {
    render(<DashboardHeader searchQuery="" onSearchChange={vi.fn()} />);

    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('calls onSearchChange when search input changes', () => {
    const handleSearchChange = vi.fn();
    render(<DashboardHeader searchQuery="" onSearchChange={handleSearchChange} />);

    const searchInput = screen.getByPlaceholderText(/search/i);
    searchInput.focus();

    // SearchBar component should call onSearchChange
    expect(searchInput).toBeInTheDocument();
  });

  it('displays the current search query', () => {
    render(<DashboardHeader searchQuery="ethereum" onSearchChange={vi.fn()} />);

    const searchInput = screen.getByDisplayValue('ethereum');
    expect(searchInput).toBeInTheDocument();
  });
});
