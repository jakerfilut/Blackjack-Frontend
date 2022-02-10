import React, { useEffect } from "react";

function MyHandDisplay({ myHand, hitMe, stand, split, split1, split2 }) {
  const mapMyHand = myHand.map((card) => {
    return (
      <div key={Math.random()} className="Card__Spacing">
        <img className="Card__image" src={card.image} />
      </div>
    );
  });

  return (
    <div className="Hand__Container">
      <button onClick={hitMe}>Hit me</button>
      <button onClick={stand}>Stand</button>
      <button onClick={split}>Split</button>
      My Hand{mapMyHand}
      <br></br>
    </div>
  );
}

export default MyHandDisplay;
