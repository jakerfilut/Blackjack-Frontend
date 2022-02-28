import React, { useState, useEffect } from "react";

function Perfect({
  strat,
  dealersValue,
  cardsValue,
  handValue,
  setPerfectStrat,
  perfectStrat,
  myStrat,
  updateMyStrat,
  dealersHandValue,
  onn,
}) {
  const [perfStra, updatePerfStra] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (handValue.length < 2 || myStrat == "" || cardsValue == 21) {
      setMessage("");
    } else {
      // if (cardsValue == 21) {
      //   setMessage(`BlackJack`);
      // }
      if (perfectStrat == myStrat) {
        console.log("Correct Strat");
        setMessage(`${myStrat} was Correct`);
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
    if (
      cardsValue > 21 ||
      myStrat == "Double" ||
      myStrat == "Stand" ||
      myStrat == "Split"
    ) {
    } else if (handValue[0] === handValue[1] && handValue.length === 2) {
      console.log("split time");
      if (
        (dealersValue === 2 || dealersValue === 3 || dealersValue === 4) &&
        (handValue[0] === "A" || handValue[0] === 2 || handValue[0] === 3)
      ) {
        setPerfectStrat("Split");
      } else if (
        (dealersValue === 2 || dealersValue === 3 || dealersValue === 4) &&
        handValue[0] === 4
      ) {
        setPerfectStrat("Hit");
      } else if (
        (dealersValue === 2 || dealersValue === 3 || dealersValue === 4) &&
        (handValue[0] === 6 ||
          handValue[0] === 7 ||
          handValue[0] === 8 ||
          handValue[0] === 9)
      ) {
        setPerfectStrat("Split");
      } else if (
        (dealersValue === 2 || dealersValue === 3 || dealersValue === 4) &&
        handValue[0] === 0
      ) {
        setPerfectStrat("Stand");
      } else if (
        (dealersValue === 2 || dealersValue === 3 || dealersValue === 4) &&
        handValue[0] === 4
      ) {
        setPerfectStrat("Hit");
      } else if (
        (dealersValue === 5 || dealersValue === 6) &&
        (handValue[0] < 10 || handValue[0] === "A")
      ) {
        setPerfectStrat("Split");
      } else if (
        (dealersValue === 5 || dealersValue === 6) &&
        handValue[0] === 0
      ) {
        setPerfectStrat("Stand");
      } else if (
        dealersValue === 7 &&
        (handValue[0] === "A" ||
          handValue[0] === 2 ||
          handValue[0] === 3 ||
          handValue[0] === 7 ||
          handValue[0] === 8)
      ) {
        setPerfectStrat("Split");
      } else if (
        dealersValue === 7 &&
        (handValue[0] === 4 || handValue[0] === 6)
      ) {
        setPerfectStrat("Hit");
      } else if (
        dealersValue === 7 &&
        (handValue[0] === 9 || handValue[0] === 0)
      ) {
        setPerfectStrat("Stand");
      } else if (
        (dealersValue === 8 || dealersValue === 9 || dealersValue === 10) &&
        (handValue[0] === "A" || handValue[0] === 8)
      ) {
        setPerfectStrat("Split");
      } else if (
        (dealersValue === 8 || dealersValue === 9 || dealersValue === 10) &&
        (handValue[0] === 2 ||
          handValue[0] === 3 ||
          handValue[0] === 4 ||
          handValue[0] === 5 ||
          handValue[0] === 6 ||
          handValue[0] === 7)
      ) {
        setPerfectStrat("Hit");
      } else if (
        (dealersValue === 8 || dealersValue === 9) &&
        handValue[0] === 9
      ) {
        setPerfectStrat("Split");
      } else if (
        (dealersValue === 8 || dealersValue === 9) &&
        handValue[0] === 0
      ) {
        setPerfectStrat("Stand");
      } else if (
        dealersValue === 0 &&
        (handValue[0] === 9 || handValue[0] === 0)
      ) {
        setPerfectStrat("Stand");
      } else if (dealersValue === 11 && handValue[0] === "A") {
        setPerfectStrat("Split");
      } else if (
        dealersValue === 11 &&
        (handValue[0] === 2 ||
          handValue[0] === 3 ||
          handValue[0] === 4 ||
          handValue[0] === 5 ||
          handValue[0] === 6 ||
          handValue[0] === 7)
      ) {
        setPerfectStrat("Hit");
      } else if (dealersValue === 11 && handValue[0] === 8) {
        setPerfectStrat("Surrender");
      } else if (
        dealersValue === 11 &&
        (handValue[0] === 9 || handValue[0] === 0)
      ) {
        setPerfectStrat("Stand");
      }
    } else if (
      (handValue[0] === "A" || handValue[1] === "A") &&
      handValue.length < 3
    ) {
      console.log("Ace");
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
        (dealersValue === 7 || dealersValue === 8 || dealersValue === 11) &&
        cardsValue > 17
      ) {
        setPerfectStrat("Stand");
      } else if (
        (dealersValue === 7 || dealersValue === 8 || dealersValue === 11) &&
        cardsValue < 18
      ) {
        setPerfectStrat("Hit");
      } else if (
        (dealersValue === 9 || dealersValue === 10) &&
        cardsValue > 18
      ) {
        setPerfectStrat("Stand");
      } else if (
        (dealersValue === 9 || dealersValue === 10) &&
        cardsValue < 19
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
        if (handValue.length === 2) {
          setPerfectStrat("Double");
        } else {
          setPerfectStrat("Hit");
        }
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
        if (handValue.length === 2) {
          setPerfectStrat("Double");
        } else {
          setPerfectStrat("Hit");
        }
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
        if (handValue.length === 2) {
          setPerfectStrat("Double");
        } else {
          setPerfectStrat("Hit");
        }
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
        if (handValue.length === 2) {
          setPerfectStrat("Double");
        } else {
          setPerfectStrat("Hit");
        }
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
        if (handValue.length === 2) {
          setPerfectStrat("Double");
        } else {
          setPerfectStrat("Hit");
        }
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
        setPerfectStrat("Surrender");
      } else if (
        (dealersValue === 10 || dealersValue === 11) &&
        cardsValue > 16
      ) {
        setPerfectStrat("Stand");
      }
    }
  }, [perfStra]);

  return <h1 className="betting_num">{message}</h1>;
}

export default Perfect;
