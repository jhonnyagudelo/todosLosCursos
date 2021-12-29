const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`moneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(15);

const moneyBox1 = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`Money: $${saveCoins}`);
  };

  return countCoins;
};

let myMoneyBox = moneyBox1();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
