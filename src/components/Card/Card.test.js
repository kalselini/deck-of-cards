import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './index';

afterEach(cleanup);

describe('Card component', () => {
  describe('given default props', () => {
    test('should render correctly', () => {
      const { container } = render(<Card />);
      expect(container.firstChild.classList.contains('card')).toBe(true);
    });

    test('should render empty card Ranking', () => {
      render(<Card />);
      expect(
        screen.getByTestId('suit-ranking__symbol')
      ).not.toHaveTextContent();
    });

    test('should render the front of the card', () => {
      render(<Card />);
      expect(screen.getByTestId('card-front')).toBeTruthy();
    });
  });

  describe('given Ace of Diamond props', () => {
    const testProps = {
      suit: 'Diamond',
      cardRanking: 'A',
    };
    test('should render correctly', () => {
      const { container } = render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(container.firstChild.classList.contains('card')).toBe(true);
    });

    test('should render card ranking of A', () => {
      render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(screen.getByTestId('suit-ranking__symbol')).toHaveTextContent('A');
    });

    test('should render card color of red', () => {
      render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(screen.getByTestId('card-front')).toHaveStyle(`color: red`);
    });
  });

  describe('given 3 of Hearts props', () => {
    const testProps = {
      suit: 'Heart',
      cardRanking: '3',
    };
    test('should render correctly', () => {
      const { container } = render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(container.firstChild.classList.contains('card')).toBe(true);
    });

    test('should render card ranking of 3', () => {
      render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(screen.getByTestId('suit-ranking__symbol')).toHaveTextContent('3');
    });

    test('should render card color of red', () => {
      render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(screen.getByTestId('card-front')).toHaveStyle(`color: red`);
    });
  });

  describe('given King of Clubs props', () => {
    const testProps = {
      suit: 'Club',
      cardRanking: 'K',
    };
    test('should render correctly', () => {
      const { container } = render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(container.firstChild.classList.contains('card')).toBe(true);
    });

    test('should render card ranking of K', () => {
      render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(screen.getByTestId('suit-ranking__symbol')).toHaveTextContent('K');
    });

    test('should render card color of black', () => {
      render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(screen.getByTestId('card-front')).toHaveStyle(`color: black`);
    });
  });

  describe('given 7 of Spades props', () => {
    const testProps = {
      suit: 'Spade',
      cardRanking: '7',
    };
    test('should render correctly', () => {
      const { container } = render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(container.firstChild.classList.contains('card')).toBe(true);
    });

    test('should render card ranking of 7', () => {
      render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(screen.getByTestId('suit-ranking__symbol')).toHaveTextContent('7');
    });

    test('should render card color of black', () => {
      render(
        <Card suit={testProps.suit} cardRanking={testProps.cardRanking} />
      );
      expect(screen.getByTestId('card-front')).toHaveStyle(`color: black`);
    });
  });

  describe('given front is false props', () => {
    const testProps = {
      front: false,
    };
    test('should render correctly', () => {
      const { container } = render(<Card front={testProps.front} />);
      expect(container.firstChild.classList.contains('card')).toBe(true);
    });

    test('should render the back of the card', () => {
      render(<Card front={testProps.front} />);
      expect(screen.getByTestId('card-back')).toBeTruthy();
    });
  });
});
