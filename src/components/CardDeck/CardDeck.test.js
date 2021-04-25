import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardDeck from './index';
import { deckArray } from '../utils/DeckArray';

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
      deckArray: deckArray,
    };

    test('should render deck container correctly', () => {
      const { container } = render(
        <CardDeck deckArray={testProps.deckArray} />
      );
      expect(container.firstChild.classList.contains('cards-deck')).toBe(true);
    });

    // test('should render deck cards correctly', () => {
    //   render(<CardDeck deckArray={testProps.deckArray} />);
    //   expect(screen.queryAllByTestId('cards-deck__cards').length).toBe(52);
    // });
  });

  // describe('given shuffle is true props', () => {
  //   const testProps = {
  //     shuffle: true,
  //   };

  //   test('should render deck container correctly', () => {
  //     const { container } = render(<CardDeck shuffle={testProps.shuffle} />);
  //     expect(container.classList.contains('animation')).toBe(true);
  //   });
  // });
});
