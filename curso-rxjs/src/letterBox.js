import { fromEvent } from "rxjs";

const letterRow = document.getElementsByClassName("letter-row");
const onKeyDown$ = fromEvent(document, "keydown");
const onKeyDownErase$ = fromEvent(document, "keydown");
let letterIndex = 0;
let letterRowIndex = 0;
let arrLetter = [];

const insertLetter = {
  next: (e) => {
    const pressedKey = e.key.toUpperCase();
    if (
      pressedKey.length === 1 &&
      pressedKey.match(/[a-z]/i) &&
      arrLetter.length <= 4
    ) {
      arrLetter.push(pressedKey);
      let letterBox =
        Array.from(letterRow)[letterRowIndex].children[letterIndex];
      letterBox.textContent = pressedKey;
      letterBox.classList.add("filled-letter");
      letterIndex++;
    }
  },
};

const erase = {
  next: (e) => {
    const pressedKey = e.key;
    if (pressedKey === "Backspace" && arrLetter.length !== 0) {
      arrLetter.slice(letterIndex - 1, 1);
      let letterBox =
        Array.from(letterRow)[letterRowIndex].children[letterIndex - 1];
      letterBox.textContent = "";
      letterBox.classList.remove("filled-letter");
      letterIndex--;
    }
  },
};

onKeyDown$.subscribe(insertLetter);
onKeyDownErase$.subscribe(erase);
