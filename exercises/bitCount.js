const solve = (n = 1234) => {
  return n.toString(2).split("0").join("").length;
};
export default solve;
