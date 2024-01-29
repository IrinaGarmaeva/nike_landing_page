export const formatNumber = (number) => {
  if (number < 1000) {
    return number;
  } else {
    return Math.floor(number / 1000) + "k";
  }
};
