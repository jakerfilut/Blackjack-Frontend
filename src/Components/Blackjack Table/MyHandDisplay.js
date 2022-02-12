import React, { useEffect } from "react";
import Buttons from "./Buttons";

function MyHandDisplay({
  myHand,
  hitMe,
  stand,
  split,
  myFirstHandValue,
  mySecondHandValue,
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
    <div className="Hand__Container">
      <Buttons
        hitMe={hitMe}
        stand={stand}
        split={split}
        double={double}
        surrender={surrender}
      />
      My Hand{mapMyHand}
      <br></br>
      {myFirstHandValue}
      <br></br>
      {mySecondHandValue}
      <br></br>
    </div>
  );
}

export default MyHandDisplay;
