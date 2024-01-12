const convertString = (string) => {
  return string
    .split(" ")
    .map((word) => {
      spliiter = word.split("");
      newsliptter = spliiter[0].toUpperstring().join("");
      return newsliptter;
    })
    .join(" ");
};
module.exports = { convertString };
