import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardDeck from './index';
import { deckArray } from '../utils/DeckArray';

// TODO: Write rests to cover conditional rendering of animation className

afterEach(cleanup);

describe('Card Deck component', () => {
  describe('given default props', () => {
    test('should render deck container correctly', () => {
      const { container } = render(<CardDeck />);
      expect(container.firstChild.classList.contains('cards-deck')).toBe(true);
    });
  });

  describe('given deck array and default props', () => {
    const testProps = {
      deckArray,
    };

    test('should render deck container correctly', () => {
      const { container } = render(
        <CardDeck deckArray={testProps.deckArray} />
      );
      expect(container.firstChild.classList.contains('cards-deck')).toBe(true);
    });
  });
});
