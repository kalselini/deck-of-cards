import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './index';

afterEach(cleanup);

describe('Card component', () => {
  describe('given default props', () => {
    test('should render correctly', () => {
      const { container } = render(<Card />);
      expect(container.firstChild.classList.contains('card')).toBe(true);
    });
  });

  describe('given props', () => {
    const testProps = {
      suit: 'Diamond',
      cardRanking: 'A',
      front: true,
    };
    test('should render correctly', () => {
      const { container } = render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(container.firstChild.classList.contains('card')).toBe(true);
    });

    // test('should render card Ranking', () => {
    //   render(
    //     <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
    //   );
    //   expect(screen.getByTestId('suit-ranking__symbol')).toHaveTextContent('A');
    // });

    test('should render the front of the card', () => {
      render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(screen.getByTestId('card-front')).toBeTruthy();
    });
  });
});
