import React, { useState, useEffect } from "react";
import "./SpeedCounting.css";

function SpeedCounting() {
  const [singleDeckID, setSingleDeckID] = useState();
  const [singleCard, setSingleCard] = useState([]);
  const [flip, setFlip] = useState(false);
  const [cardImage, setCardImage] = useState("");
  const [count, setCount] = useState(0);
  const [myCount, setMyCount] = useState("");
  const [right, setRight] = useState("");
  const [difficulty, setDifficulty] = useState(0);
  const [game, newGame] = useState(false);

  const singleDeck =
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  const drawSingleCard = `https://deckofcardsapi.com/api/deck/${singleDeckID}/draw/?count=1`;

  useEffect(() => {
    if (difficulty !== 0) {
      fetch(singleDeck)
        .then((res) => res.json())
        .then((deckid) => {
          setSingleDeckID(deckid.deck_id);
          setSingleCard([]);
          setCardImage("");
          setCount(0);
          setRight("");
        });
    }
  }, [difficulty]);

  useEffect(() => {
    if (drawSingleCard.length == 59) {
    } else {
      fetch(drawSingleCard)
        .then((res) => res.json())
        .then((card) => {
          setSingleCard(card);
          if (card.remaining < 4) {
          } else {
            setTimeout(() => setFlip((flip) => !flip), difficulty);

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

  console.log(difficulty);

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
      <h3>
        After you select your difficulty the dealer will deal out 49 cards. Then
        you can guess what the count is.
      </h3>
      <div className="chips__container">
        <div className="chips">
          <div
            onClick={() => setDifficulty(1500)}
            className="pokerchip blue"
          ></div>
          <div
            onClick={() => setDifficulty(800)}
            className="pokerchip red"
          ></div>
          <div
            onClick={() => setDifficulty(250)}
            className="pokerchip green"
          ></div>
        </div>
      </div>
      {/* <button onClick={dealDeck}>Start</button> */}
      <img className="card_image" src={cardImage} />
      <h3>What is the Count?</h3>
      <form onSubmit={submitGuess}>
        <input
          type="number"
          min="-3"
          max="3"
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
