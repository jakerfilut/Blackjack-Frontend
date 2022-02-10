import React, { useState, useEffect } from "react";

function SpeedCounting() {
  const [singleDeckID, setSingleDeckID] = useState();
  const [singleCard, setSingleCard] = useState([]);
  const [flip, setFlip] = useState(false);
  const [cardImage, setCardImage] = useState("");
  const [count, setCount] = useState(0);
  const [myCount, setMyCount] = useState("");
  const [right, setRight] = useState("");

  const singleDeck =
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  const drawSingleCard = `https://deckofcardsapi.com/api/deck/${singleDeckID}/draw/?count=1`;

  function dealDeck() {
    fetch(singleDeck)
      .then((res) => res.json())
      .then((deckid) => {
        setSingleDeckID(deckid.deck_id);
        setSingleCard([]);
        setCardImage("");
        setCount(0);
        setRight("");
        setFlip(!flip);
      });
  }

  useEffect(() => {
    if (drawSingleCard.length == 59) {
    } else {
      fetch(drawSingleCard)
        .then((res) => res.json())
        .then((card) => {
          setSingleCard(card);
          if (card.remaining < 4) {
          } else {
            setTimeout(() => setFlip((flip) => !flip), 50);

            if (card.cards[0].code[0] === "2") {
              setCount(count + 1);
            } else if (card.cards[0].code[0] === "3") {
              setCount(count + 1);
            } else if (card.cards[0].code[0] === "4") {
              setCount(count + 1);
            } else if (card.cards[0].code[0] === "5") {
              setCount(count + 1);
            } else if (card.cards[0].code[0] === "6") {
              setCount(count + 1);
            } else if (card.cards[0].code[0] === "0") {
              setCount(count - 1);
            } else if (card.cards[0].code[0] === "J") {
              setCount(count - 1);
            } else if (card.cards[0].code[0] === "Q") {
              setCount(count - 1);
            } else if (card.cards[0].code[0] === "K") {
              setCount(count - 1);
            } else if (card.cards[0].code[0] === "A") {
              setCount(count - 1);
            }
          }
          setCardImage(card.cards[0].image);
        });
    }
  }, [flip]);

  function submitGuess(e) {
    e.preventDefault();
    if (myCount == count) {
      console.log("correct");
      setMyCount("");
      setRight("Correct");
    } else {
      console.log("Wrong");
      setMyCount("");
      setRight(`Sadly that is Wrong. The right answer is ${count} `);
    }
  }

  return (
    <div>
      SpeedCounting
      <button onClick={dealDeck}>Start</button>
      <img src={cardImage} />
      <form onSubmit={submitGuess}>
        <input
          type="text"
          value={myCount}
          onChange={(e) => setMyCount(e.target.value)}
        />
      </form>
      {right}
      {/* {count} */}
    </div>
  );
}

export default SpeedCounting;
