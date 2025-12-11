import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { DashboardTabs } from './dashboard-tabs';

describe('DashboardTabs', () => {
  const mockNftContent = <div>NFT Content</div>;
  const mockTokenContent = <div>Token Content</div>;

  it('renders both tab triggers', () => {
    render(
      <DashboardTabs
        activeTab="nfts"
        onTabChange={vi.fn()}
        nftContent={mockNftContent}
        tokenContent={mockTokenContent}
      />
    );

    expect(screen.getByText('Trending NFTs')).toBeInTheDocument();
    expect(screen.getByText('Top Tokens')).toBeInTheDocument();
  });

  it('displays NFT content when nfts tab is active', () => {
    render(
      <DashboardTabs
        activeTab="nfts"
        onTabChange={vi.fn()}
        nftContent={mockNftContent}
        tokenContent={mockTokenContent}
      />
    );

    expect(screen.getByText('NFT Content')).toBeInTheDocument();
  });

  it('displays token content when tokens tab is active', () => {
    render(
      <DashboardTabs
        activeTab="tokens"
        onTabChange={vi.fn()}
        nftContent={mockNftContent}
        tokenContent={mockTokenContent}
      />
    );

    expect(screen.getByText('Token Content')).toBeInTheDocument();
  });

  it('calls onTabChange when tab is clicked', async () => {
    const user = userEvent.setup();
    const handleTabChange = vi.fn();
    render(
      <DashboardTabs
        activeTab="nfts"
        onTabChange={handleTabChange}
        nftContent={mockNftContent}
        tokenContent={mockTokenContent}
      />
    );

    const tokensTab = screen.getByRole('tab', { name: /top tokens/i });
    await user.click(tokensTab);

    expect(handleTabChange).toHaveBeenCalledWith('tokens');
  });
});
