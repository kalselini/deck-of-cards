import React, { useState } from "react";

import { Card, ActionsButtons } from "./components";
import { deckArray } from "./components/utils/DeckArray";

const App = () => {
  const [className, setClassName] = useState("");
  const [buttonsDisabled, setbuttonsDisabled] = useState(false);
  const [cardsArray, setCardsArray] = useState(deckArray);
  const [cardsDrawn, setCardsDrawn] = useState([]);
  const [sortComplete, setSortComplete] = useState(false);
  const [front, setFront] = useState(true);

  const startStopAnimation = () => {
    setbuttonsDisabled(true);
    setFront(false);
    setClassName(className ? "" : "animation");
    setTimeout(() => {
      setClassName("");
      setFront(true);
      setbuttonsDisabled(false);
    }, 2400); //TODO: improve and also disable shuffle and deal card button once deck is complete
  };

  // Fisher-Yates Shuffle
  const shuffle = (deck) => {
    let count = deck.length;
    while (count) {
      deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
      count -= 1;
    }
    // setCardsArray(deck);
    startStopAnimation();
  };

  const dealOneCard = () => {
    const randomCard =
      cardsArray[Math.floor(Math.random() * cardsArray.length)];
    const newCardsArray = cardsArray.filter(
      (element) => element.index !== randomCard.index
    );
    setCardsArray(newCardsArray);
    let cardsDrawnArray = cardsDrawn;
    cardsDrawnArray.length < 52 && cardsDrawnArray.push(randomCard);
    setCardsDrawn(cardsDrawnArray);
  };

  const arrange = () => {
    const sortCardsDrawn = cardsDrawn.sort(function (a, b) {
      return a.index - b.index;
    });
    setCardsDrawn(sortCardsDrawn);
    setSortComplete(sortComplete ? false : true);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="cards-container">
        {cardsArray &&
          cardsArray.map((card, index) => {
            return (
              <div
                className="cards-container__deck animated slideInDown"
                key={index}
              >
                <Card
                  suit={card.suit}
                  cardRanking={card.card}
                  color={card.color}
                  front={front}
                  className={className}
                />
              </div>
            );
          })}
      </div>
      <ActionsButtons
        shuffle={() => shuffle(cardsArray)}
        dealOneCard={() => dealOneCard()}
        arrange={() => arrange()}
        deckArray={deckArray}
        buttonsDisabled={buttonsDisabled}
      />
      <div className="cards-container">
        {cardsDrawn &&
          cardsDrawn.map((card, index) => {
            return (
              <div
                className="cards-container__deck animated slideInUp"
                key={index}
              >
                <Card suit={card.suit} cardRanking={card.card} front={true} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
