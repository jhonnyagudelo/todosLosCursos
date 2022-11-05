import { fromEvent } from "rxjs";
//const onMouseMove$ = fromEvent(document, "mousemove");
const onKeyDown$ = fromEvent(document, "keydown");
const observadorMouse = {
  next: (e) => {
    console.log(e.key);
  },
};

onKeyDown$.subscribe(observadorMouse);
