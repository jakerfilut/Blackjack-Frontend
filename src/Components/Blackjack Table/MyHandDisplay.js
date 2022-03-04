import React, { useEffect } from "react";
import Buttons from "./Buttons";

function MyHandDisplay({
  myHand,
  hitMe,
  stand,
  split,
  // myFirstHandValue,
  // mySecondHandValue,
  double,
  surrender,
}) {
  const mapMyHand = myHand.map((card) => {
    return (
      <div key={Math.random()} className="Card__Spacing">
        <img className="Card__image" src={card.image} />
      </div>
    );
  });

  return (
    <div className="HandContainer">
      <div className="hand__btn__container">
        <Buttons
          hitMe={hitMe}
          stand={stand}
          split={split}
          double={double}
          surrender={surrender}
        />
      </div>
      <div className="Hand__Cards_Container">{mapMyHand}</div>
    </div>
  );
}

export default MyHandDisplay;
