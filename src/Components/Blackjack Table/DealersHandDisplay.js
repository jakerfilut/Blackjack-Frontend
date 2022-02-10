import React from "react";

function DealersHandDisplay({ dealersHand }) {
  const mapDealersHand = dealersHand.map((card) => {
    return (
      <div key={Math.random()} className="Card__Spacing">
        <img className="Card__image" src={card.image} />
      </div>
    );
  });
  return <div className="HandContainer">Dealers Hand{mapDealersHand}</div>;
}

export default DealersHandDisplay;
