import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { backCardImg, club, diamond, heart, spade } from '../../assets';

import './card.scss';

const Card = (props) => {
  const { suit, cardRanking, front, className } = props;

  const getCardStyle = (cardSuit) => {
    let symbol;
    let color;
    switch (cardSuit) {
      case 'Diamond':
        return { symbol: diamond, color: 'red' };
      case 'Heart':
        return { symbol: heart, color: 'red' };
      case 'Club':
        return { symbol: club, color: 'black' };
      case 'Spade':
        return { symbol: spade, color: 'black' };
      default:
        return { symbol, color };
    }
  };

  const cardStyle = getCardStyle(suit);

  return front ? (
    <div
      className={classNames('card', className)}
      style={{ color: `${cardStyle.color}` }}
      data-testid="card-front"
    >
      <div className="card__suit-ranking">
        <div
          className="suit-ranking__symbol"
          data-testid="suit-ranking__symbol"
        >
          {cardRanking}
        </div>
        <img
          className="suit-ranking__symbol"
          src={cardStyle.symbol}
          alt="suit-symbol"
        />
      </div>
      <div>
        <img
          className="card__suit-symbol"
          src={cardStyle.symbol}
          alt="suit-symbol"
        />
      </div>
      <div className="card__suit-ranking-rotated">
        <div className="suit-ranking__symbol">{cardRanking}</div>
        <img
          className="suit-ranking__symbol"
          src={cardStyle.symbol}
          alt="suit-symbol"
        />
      </div>
    </div>
  ) : (
    <div
      className={classNames('card', className)}
      style={{ backgroundImage: `url(${backCardImg})` }}
      data-testid="card-back"
    />
  );
};

Card.propTypes = {
  suit: PropTypes.string,
  cardRanking: PropTypes.string,
  front: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  suit: '',
  cardRanking: '',
  front: true,
  className: '',
};

export default Card;
