const getRandomNumber = (from, to) => {
  if (from === to) {
    return from;
  }

  if (from > to) {
    return Math.floor(Math.random() * (from - to + 1) + to);
  }

  return Math.floor(Math.random() * (to - from + 1) + from);
};

const getRandomFloatNumber = (from, to, decimalPlacesCount) => {
  let multiplier = 10;
  multiplier **= decimalPlacesCount;
  return getRandomNumber(from * multiplier, to * multiplier) / multiplier;
};

getRandomNumber(6, 10);
getRandomFloatNumber(3, 1, 0);
