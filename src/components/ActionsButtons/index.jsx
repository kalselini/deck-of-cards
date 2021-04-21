import React from "react";
import PropTypes from "prop-types";

import "./actionButtons.scss";

const ActionsButtons = (props) => {

  const { buttonsDisabled } = props;

  return (
    <div style={{ margin: "40px auto", textAlign: "center" }}>
      <button disabled={buttonsDisabled} onClick={() => props.shuffle()}>Shuffle</button>
      <button disabled={buttonsDisabled} onClick={() => props.dealOneCard()}>Deal one card</button>
      <button disabled={buttonsDisabled} onClick={() => props.arrange()}>Arrange</button>
    </div>
  );
};

ActionsButtons.propTypes = {
  shuffle: PropTypes.func,
  dealOneCard: PropTypes.func,
  flip: PropTypes.func,
};

export default ActionsButtons;
