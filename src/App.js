import React, { useState, useEffect } from 'react';

import { CardDeck, ButtonGroup, Button, deckArray } from './components';
import { ShuffleIcon, ExposurePlus1Icon, ImportExportIcon } from './assets';

import './mixins.scss';
import './App.scss';

const App = () => {
  const [shuffleAnimation, setShuffleAnimation] = useState(false);
  const [buttonsDisabled, setbuttonsDisabled] = useState(false);
  const [front, setFront] = useState(true);
  const [sortComplete, setSortComplete] = useState(false);
  const [cardsArray, setCardsArray] = useState(deckArray);
  const [cardsDrawn, setCardsDrawn] = useState([]);

  /**
   * Starts the shuffle process by disabling the action buttons, turning the cards face down
   * and triggering the shuffle animation
   */
  const startShuffleAnimation = () => {
    setbuttonsDisabled(true);
    setFront(false);
    setShuffleAnimation(true);
  };

  /**
   * Once the shuffle process is triggered, the previous states are returned within 2.4s
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFront(true);
      setbuttonsDisabled(false);
      setShuffleAnimation(false);
    }, 2400);

    return () => clearTimeout(timeout);
  }, [shuffleAnimation]);

  /**
   *  Shuffles the orginal deck of cards using the Fisher-Yates Shuffle algorithm
   */
  const shuffle = (deck) => {
    let count = deck.length;
    while (count) {
      deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
      count -= 1;
    }
    startShuffleAnimation();
  };

  /* eslint-disable no-unused-expressions */

  /**
   *  Removes one random card from the origin deck and adds it to the drawn cards array
   */
  const dealOneCard = () => {
    const randomCard =
      cardsArray[Math.floor(Math.random() * cardsArray.length)];
    const newCardsArray = cardsArray.filter(
      (element) => element.index !== randomCard.index
    );
    setCardsArray(newCardsArray);
    const cardsDrawnArray = cardsDrawn;
    cardsDrawnArray.length < 52 && cardsDrawnArray.push(randomCard);
    setCardsDrawn(cardsDrawnArray);
  };

  /**
   *  Arranges the drawn cards array in order of suit and value based using the index
   *  in the card array
   */
  const arrange = () => {
    const sortingAlgorithm = (a, b) => {
      return a.index - b.index;
    };

    const sortCardsDrawn = cardsDrawn.sort(sortingAlgorithm);
    setCardsDrawn(sortCardsDrawn);
    setSortComplete(!sortComplete);
  };

  return (
    <div className="container">
      <CardDeck
        deckArray={cardsArray}
        front={front}
        className="slideInDown"
        shuffle={shuffleAnimation}
      />
      <ButtonGroup>
        <Button
          onClick={() => shuffle(cardsArray)}
          startIcon={<ShuffleIcon />}
          disabled={buttonsDisabled}
        >
          Shuffle
        </Button>
        <Button
          onClick={() => dealOneCard()}
          startIcon={<ExposurePlus1Icon />}
          disabled={buttonsDisabled}
        >
          Deal one card
        </Button>
        <Button
          onClick={() => arrange()}
          startIcon={<ImportExportIcon />}
          disabled={buttonsDisabled}
        >
          Arrange
        </Button>
      </ButtonGroup>
      <CardDeck deckArray={cardsDrawn} front className="slideInUp" />
    </div>
  );
};

export default App;
