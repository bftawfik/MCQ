export const joinClassesWithSpace = (...classNames) =>
  classNames.filter((className) => className).join(" ");

export const shuffleArray = (array) => array.sort(() => 0.5 - Math.random());
