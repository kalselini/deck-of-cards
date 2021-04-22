import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
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
                className={'deck ' + setAnimationClassName()}
              />
            </div>
          );
        })}
    </div>
  );
};

CardDeck.propTypes = {
  front: PropTypes.bool,
  className: PropTypes.string,
  deckArray: PropTypes.array,
  shuffle: PropTypes.bool,
};

CardDeck.defaultProps = {
  front: true,
  className: '',
  deckArray: [],
  shuffle: false,
};

export default CardDeck;
