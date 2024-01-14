let title = (num) => {
  return string.split(" ").map((word) => {
    spliiter = spliiter.toLowerCase();
    return spliiter.join("-");
  });
};
const slugify = require("slugify", { lower: true });
slugify("some string");
console.log({ slugify });
