import React from 'react';
import classNames from 'classnames';
import Card from '../Card';

import './cardDeck.scss';

const CardDeck = (props) => {
  const { front, className, deckArray, shuffle } = props;

  const setAnimationClassName = () => {
    return shuffle ? 'animation' : '';
  };

  return (
    <div className="cards-container">
      {deckArray &&
        deckArray.map((card, index) => {
          return (
            <div
              className={classNames(
                'cards-container__deck',
                'animated',
                className
              )}
              key={index}
            >
              <Card
                suit={card.suit}
                cardRanking={card.card}
                front={front}
                className={setAnimationClassName()}
              />
            </div>
          );
        })}
    </div>
  );
};

export default CardDeck;
