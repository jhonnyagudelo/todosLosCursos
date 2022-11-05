import { Observable } from "rxjs";

const numbers$ = new Observable((subscriber) => {
  subscriber.next(Math.round(Math.random() * 1000));
});

const observable1 = {
  next: (number) => {
    console.log(number);
  },
};

const observable2 = {
  next: (number) => {
    console.log(number);
  },
};

numbers$.subscribe(observable1);
numbers$.subscribe(observable2);
