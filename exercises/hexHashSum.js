const solve = (code) => {
  let res = 0;
  code
    .split("")
    .map((char) => char.charCodeAt(0).toString(16))
    .join("")
    .split("")
    .map((char) => {
      if (Number(char)) {
        res += Number(char);
      }
    });
  return res;
};
export default solve;
