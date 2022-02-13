import React, { useState, useEffect } from "react";

function Perfect({
  strat,
  dealersValue,
  cardsValue,
  handValue,
  setPerfectStrat,
  perfectStrat,
  myStrat,
  dealersHandValue,
}) {
  const [perfStra, updatePerfStra] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (handValue.length < 2 || myStrat == "") {
      setMessage("");
    } else {
      if (perfectStrat == myStrat) {
        console.log("Correct Strat");
        setMessage(`${myStrat} was the Correct`);
        console.log(perfectStrat);
        console.log(myStrat);
      } else {
        console.log("wrong Strat");
        setMessage(`Incorrect. The correct answer was ${perfectStrat}`);
        console.log(perfectStrat);
        console.log(myStrat);
      }
    }
    updatePerfStra(perfStra + 1);
  }, [strat]);

  useEffect(() => {
    // console.log("giveValue");
    if (cardsValue > 21 || myStrat == "Double") {
    } else {
      if (handValue[0] === "A" || (handValue[1] === "A" && handValue == 2)) {
        if (dealersValue === 2 && cardsValue > 17) {
          setPerfectStrat("Stand");
        } else if (dealersValue === 2 && cardsValue === 17) {
          setPerfectStrat("Double");
        } else if (dealersValue === 2 && cardsValue < 17) {
          setPerfectStrat("Hit");
        } else if (dealersValue === 3 && cardsValue > 18) {
          setPerfectStrat("Stand");
        } else if (
          dealersValue === 3 &&
          (cardsValue === 18 || cardsValue === 17)
        ) {
          setPerfectStrat("Double");
        } else if (dealersValue === 3 && cardsValue < 17) {
          setPerfectStrat("Hit");
        } else if (
          dealersValue === 4 ||
          (dealersValue === 5 && (cardsValue === 20 || cardsValue === 19))
        ) {
          setPerfectStrat("Stand");
        } else if (
          dealersValue === 4 ||
          (dealersValue === 5 && cardsValue < 19)
        ) {
          setPerfectStrat("Double");
        } else if (dealersValue === 6 && cardsValue === 20) {
          setPerfectStrat("Stand");
        } else if (dealersValue === 6 && cardsValue < 20) {
          setPerfectStrat("Double");
        } else if (
          dealersValue === 7 ||
          dealersValue === 8 ||
          (dealersValue === 11 && cardsValue > 17)
        ) {
          setPerfectStrat("Stand");
        } else if (
          dealersValue === 7 ||
          dealersValue === 8 ||
          (dealersValue === 11 && cardsValue < 18)
        ) {
          setPerfectStrat("Hit");
        } else if (
          dealersValue === 9 ||
          (dealersValue === 10 && cardsValue > 18)
        ) {
          setPerfectStrat("Stand");
        } else if (
          dealersValue === 9 ||
          (dealersValue === 10 && cardsValue < 19)
        ) {
          setPerfectStrat("Hit");
        }
      } else {
        if (
          (dealersValue === 2 || dealersValue === 3) &&
          (cardsValue === 5 ||
            cardsValue === 6 ||
            cardsValue === 7 ||
            cardsValue === 8 ||
            cardsValue === 12)
        ) {
          setPerfectStrat("Hit");
        } else if (
          (dealersValue === 2 || dealersValue === 3) &&
          (cardsValue === 9 || cardsValue === 10 || cardsValue === 11)
        ) {
          setPerfectStrat("Double");
        } else if (
          (dealersValue === 2 || dealersValue === 3) &&
          cardsValue > 12
        ) {
          setPerfectStrat("Stand");
        } else if (
          dealersValue === 4 &&
          (cardsValue === 5 ||
            cardsValue === 6 ||
            cardsValue === 7 ||
            cardsValue === 8)
        ) {
          setPerfectStrat("Hit");
        } else if (
          dealersValue === 4 &&
          (cardsValue === 9 || cardsValue === 10 || cardsValue === 11)
        ) {
          setPerfectStrat("Double");
        } else if (dealersValue === 4 && cardsValue > 11) {
          setPerfectStrat("Stand");
        } else if (
          (dealersValue === 5 || dealersValue === 6) &&
          (cardsValue === 5 || cardsValue === 6 || cardsValue === 7)
        ) {
          setPerfectStrat("Hit");
        } else if (
          (dealersValue === 5 || dealersValue === 6) &&
          (cardsValue === 8 ||
            cardsValue === 9 ||
            cardsValue === 10 ||
            cardsValue === 11)
        ) {
          setPerfectStrat("Double");
        } else if (
          (dealersValue === 5 || dealersValue === 6) &&
          cardsValue > 11
        ) {
          setPerfectStrat("Stand");
        } else if (
          (dealersValue === 7 || dealersValue === 8 || dealersValue === 9) &&
          cardsValue > 4 &&
          cardsValue < 10
        ) {
          setPerfectStrat("Hit");
        } else if (
          (dealersValue === 7 || dealersValue === 8 || dealersValue === 9) &&
          (cardsValue === 10 || cardsValue === 11)
        ) {
          setPerfectStrat("Double");
        } else if (
          (dealersValue === 7 || dealersValue === 8 || dealersValue === 9) &&
          cardsValue > 11 &&
          cardsValue < 17
        ) {
          setPerfectStrat("Hit");
        } else if (
          (dealersValue === 7 || dealersValue === 8 || dealersValue === 9) &&
          cardsValue > 16
        ) {
          setPerfectStrat("Stand");
        } else if (
          (dealersValue === 10 || dealersValue === 11) &&
          //   cardsValue > 4 &&
          cardsValue < 11
        ) {
          setPerfectStrat("Hit");
        } else if (
          (dealersValue === 10 || dealersValue === 11) &&
          cardsValue === 11
        ) {
          setPerfectStrat("Double");
        } else if (
          (dealersValue === 10 || dealersValue === 11) &&
          cardsValue > 11 &&
          cardsValue < 16
        ) {
          setPerfectStrat("Hit");
        } else if (
          (dealersValue === 10 || dealersValue === 11) &&
          cardsValue === 16
        ) {
          if (handValue[2]) {
            setPerfectStrat("Hit");
          } else {
            setPerfectStrat("Surrender");
          }
        } else if (
          (dealersValue === 10 || dealersValue === 11) &&
          cardsValue > 16
        ) {
          setPerfectStrat("Stand");
        }
      }
    }
  }, [perfStra]);

  return (
    <div>
      Perfect
      <br></br>
      {message}
    </div>
  );
}

export default Perfect;
