import React from "react";

function Perfect({ dealersValue, cardsValue, handValue }) {
  if (handValue[0] === "A" || handValue[1] === "A") {
    console.log("We have a ace");
    if (dealersValue === 2 && cardsValue > 17) {
      console.log("Stand");
    } else if (dealersValue === 2 && cardsValue === 17) {
      console.log("Double");
    } else if (dealersValue === 2 && cardsValue < 17) {
      console.log("Hit");
    } else if (dealersValue === 3 && cardsValue > 18) {
      console.log("Stand");
    } else if (dealersValue === 3 && (cardsValue === 18 || cardsValue === 17)) {
      console.log("Double");
    } else if (dealersValue === 3 && cardsValue < 17) {
      console.log("Hit");
    } else if (
      dealersValue === 4 ||
      (dealersValue === 5 && (cardsValue === 20 || cardsValue === 19))
    ) {
      console.log("Stand");
    } else if (dealersValue === 4 || (dealersValue === 5 && cardsValue < 19)) {
      console.log("Double");
    } else if (dealersValue === 6 && cardsValue === 20) {
      console.log("Stand");
    } else if (dealersValue === 6 && cardsValue < 20) {
      console.log("Double");
    } else if (
      dealersValue === 7 ||
      dealersValue === 8 ||
      (dealersValue === 11 && cardsValue > 17)
    ) {
      console.log("Stand");
    } else if (
      dealersValue === 7 ||
      dealersValue === 8 ||
      (dealersValue === 11 && cardsValue < 18)
    ) {
      console.log("Hit");
    } else if (dealersValue === 9 || (dealersValue === 10 && cardsValue > 18)) {
      console.log("Stand");
    } else if (dealersValue === 9 || (dealersValue === 10 && cardsValue < 19)) {
      console.log("Stand");
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
      console.log("hit");
    } else if (
      (dealersValue === 2 || dealersValue === 3) &&
      (cardsValue === 9 || cardsValue === 10 || cardsValue === 11)
    ) {
      console.log("Double");
    } else if ((dealersValue === 2 || dealersValue === 3) && cardsValue > 12) {
      console.log("Stand");
    } else if (
      dealersValue === 4 &&
      (cardsValue === 5 ||
        cardsValue === 6 ||
        cardsValue === 7 ||
        cardsValue === 8)
    ) {
      console.log("hit");
    } else if (
      dealersValue === 4 &&
      (cardsValue === 9 || cardsValue === 10 || cardsValue === 11)
    ) {
      console.log("Double");
    } else if (dealersValue === 4 && cardsValue > 11) {
      console.log("stand");
    } else if (
      (dealersValue === 5 || dealersValue === 6) &&
      (cardsValue === 5 || cardsValue === 6 || cardsValue === 7)
    ) {
      console.log("Hit");
    } else if (
      (dealersValue === 5 || dealersValue === 6) &&
      (cardsValue === 8 ||
        cardsValue === 9 ||
        cardsValue === 10 ||
        cardsValue === 11)
    ) {
      console.log("Double");
    } else if ((dealersValue === 5 || dealersValue === 6) && cardsValue > 11) {
      console.log("Stand");
    } else if (
      (dealersValue === 7 || dealersValue === 8 || dealersValue === 9) &&
      cardsValue > 4 &&
      cardsValue < 10
    ) {
      console.log("Hit");
    } else if (
      (dealersValue === 7 || dealersValue === 8 || dealersValue === 9) &&
      (cardsValue === 10 || cardsValue === 11)
    ) {
      console.log("Double");
    } else if (
      (dealersValue === 7 || dealersValue === 8 || dealersValue === 9) &&
      cardsValue > 11 &&
      cardsValue < 17
    ) {
      console.log("Hit");
    } else if (
      (dealersValue === 7 || dealersValue === 8 || dealersValue === 9) &&
      cardsValue > 16
    ) {
      console.log("Stand");
    } else if (
      (dealersValue === 10 || dealersValue === 11) &&
      cardsValue > 4 &&
      cardsValue < 11
    ) {
      console.log("Hit");
    } else if (
      (dealersValue === 10 || dealersValue === 11) &&
      cardsValue === 11
    ) {
      console.log("Double");
    } else if (
      (dealersValue === 10 || dealersValue === 11) &&
      cardsValue > 11 &&
      cardsValue < 16
    ) {
      console.log("Hit");
    } else if (
      (dealersValue === 10 || dealersValue === 11) &&
      cardsValue === 16
    ) {
      console.log("Surrender");
    } else if (
      (dealersValue === 10 || dealersValue === 11) &&
      cardsValue > 16
    ) {
      console.log("Stand");
    }
  }

  return <div>Perfect</div>;
}

export default Perfect;
