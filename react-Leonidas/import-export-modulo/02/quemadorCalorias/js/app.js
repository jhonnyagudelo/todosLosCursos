import store from "./store.js";
import { BURN } from "./actions/index.js";

store.susbcribe(() => {
  console.log(store.getState().presente);
  window.clicksP.textContent = `Haz dado ${store.getState().presente} clics`;
  window.clicksL.textContent = `Te faltan ${store.getState().faltante} clics`;
  window.result.textContent = `Haz quemado ${store.getState().burn} y faltan 
  ${store.getState().burnComienzo} calorias`;
});

const burn = () => {
  store.dispach({
    type: BURN,
    payload: 1.42,
  });
};

window.burn.addEventListener("click", burn);
