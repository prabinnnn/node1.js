const convertString = (string) => {
  return string
    .split(" ")
    .map((word) => {
      let spliiter = word.split("");
      spliiter[0] = spliiter[0].toUpperCase(); // Fix the typo here
      return spliiter.join("");
    })
    .join(" ");
};

module.exports = { convertString };
