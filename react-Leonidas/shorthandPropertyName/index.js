const price = 2700;
const mac = {
  price,
  get finalPrice() {
    return this.price * 1.16;
  },
  set offer(offer) {
    this.price -= offer;
  },
  getPrice() {
    console.log(this.price);
  },
  *discount(offer) {
    let price = this.finalPrice;
    while (true) {
      yield (price -= offer);
    }
  },
};

window.price.textContent = mac.price;
mac.offer = 500;
window.offer.textContent = mac.price;
window["final-price"].textContent = mac.finalPrice;

const makeAndOffer = mac.discount(15);
window["make-offer"].addEventListener("click", () => {
  window["final-price"].textContent = makeAndOffer.next().value;
});
