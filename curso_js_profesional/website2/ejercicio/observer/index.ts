interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subcribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitCoinPrice implements Subject {
  observers: Observer[] = [];
  constructor() {
    const el: HTMLInputElement = document.querySelector("#value");
    el.addEventListener("input", () => {
      this.notify(el.value);
    });
  }

  subcribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex((obs) => {
      return obs === observer;
    });

    this.observers.splice(index, 1);
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class priceDisplay implements Observer {
  private el: HTMLElement;
  constructor() {
    this.el = document.querySelector("#price");
  }
  update(data: any) {
    this.el.innerText = data;
  }
}

const value = new BitCoinPrice();
const display = new priceDisplay();

value.subcribe(display);

setTimeout(() => value.unsubscribe(display), 5000);
