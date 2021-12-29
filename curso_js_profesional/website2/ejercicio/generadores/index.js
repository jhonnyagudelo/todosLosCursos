function* simpleGenerator() {
  console.log("Generadores start");
  yield;
  console.log("Generadores end");
}

//const gen = simpleGenerator();
//

function* idMaker() {
  let id = 1;
  while (true) {
    yield id;
    id = id + 1;
  }
}

function* idMakerWhitReset() {
  let id = 1;
  let reset;
  while (true) {
    reset = yield id;
    if (reset) {
      id = 1;
    } else {
      id = id + 1;
    }
  }
}

function* fibonacci() {
  let a = 1;
  let b = 2;
  while (true) {
    const nextNumber = a + b;
    a = b;
    b = nextNumber;
    yield nextNumber;
  }
}
