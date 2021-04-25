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
    <div className="cards-deck">
      {deckArray &&
        deckArray.map((card, index) => {
          return (
            <div
              className={classNames('animated', className)}
              getByTestId="cards-deck__cards"
              key={index}
            >
              <Card
                suit={card.suit}
                cardRanking={card.card}
                front={front}
                className={'cards-deck__card ' + setAnimationClassName()}
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
