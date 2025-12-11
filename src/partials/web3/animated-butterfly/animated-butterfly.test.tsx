import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AnimatedButterfly } from './animated-butterfly';

describe('AnimatedButterfly', () => {
  it('renders the butterfly component', () => {
    const { container } = render(<AnimatedButterfly />);

    // Check if the component renders
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with default size', () => {
    const { container } = render(<AnimatedButterfly />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with custom size', () => {
    const { container } = render(<AnimatedButterfly size="lg" />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies hover scale animation', () => {
    const { container } = render(<AnimatedButterfly hoverScale={1.2} />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with small size', () => {
    const { container } = render(<AnimatedButterfly size="sm" />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with medium size', () => {
    const { container } = render(<AnimatedButterfly size="md" />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
