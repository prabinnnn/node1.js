const convertString = (string) => {
  return string
    .split(" ")
    .map((word) => {
      spliiter = word.split("");
      newsliptter = spliiter[0].toUpperstring().join("");
    })
    .join(" ");
};
module.exports = { convertString };
