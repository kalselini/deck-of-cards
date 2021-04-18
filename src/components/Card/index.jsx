import React from "react";
import classNames from 'classnames';
import PropTypes from "prop-types";

import backCardImg from "../../assets/backCardImg.png";
import heart from "../../assets/heart.png";
import diamond from "../../assets/diamond.png";
import club from "../../assets/club.png";
import spade from "../../assets/spade.png";

import "./card.scss";

const Card = (props) => {

  const { suit, cardRanking, front, className } = props;

  const getCardStyle = (suit) => {
    let symbol;
    let color;
    switch(suit) {
      case "Diamond":
        return { symbol: diamond, color: "red"};
      case "Heart":
        return { symbol: heart, color: "red"};
      case "Club":
        return { symbol: club, color: "black"};
      case "Spade":
        return { symbol: spade, color: "black"};
      default:
        return { symbol, color};
    };
  };

  const cardStyle = getCardStyle(suit);

    return front ? (
      <div className={classNames("card", className)} style={{ color: `${cardStyle.color}` }}>
        <div className="card__suit-ranking" >
          <div className="suit-ranking__symbol">{cardRanking}</div>
          <img className="suit-ranking__symbol" src={cardStyle.symbol} alt="suit-symbol" />
        </div>
        <div>
          <img className="card__suit-symbol" src={cardStyle.symbol} alt="suit-symbol" />
        </div>
        <div className="card__suit-ranking-rotated">
          <div className="suit-ranking__symbol">{cardRanking}</div>
          <img className="suit-ranking__symbol" src={cardStyle.symbol} alt="suit-symbol" />        
        </div>
      </div> 
    ) 
    : <div className={classNames("card", className)} style={{ backgroundImage: `url(${backCardImg})` }}></div>
};

Card.propTypes = {
  suit: PropTypes.string,
  cardRanking: PropTypes.string,
  front: PropTypes.bool,
};

export default Card;
