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

  // Disables the action buttons, turn the cards face down,
  // and enable shuffle animation sequence for 2.4s
  const startShuffleAnimation = () => {
    setbuttonsDisabled(true);
    setFront(false);
    setShuffleAnimation(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFront(true);
      setbuttonsDisabled(false);
      setShuffleAnimation(false);
    }, 2400);

    return () => clearTimeout(timeout);
  }, [shuffleAnimation]);

  // Fisher-Yates Shuffle
  const shuffle = (deck) => {
    let count = deck.length;
    while (count) {
      deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
      count -= 1;
    }
    startShuffleAnimation();
  };

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

  const arrange = () => {
    const sortCardsDrawn = cardsDrawn.sort(function (a, b) {
      return a.index - b.index;
    });
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
