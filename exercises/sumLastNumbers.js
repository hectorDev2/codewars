const solve = (array = [19, 5, 42, 2, 77]) => {
  const newArray = array.sort((a, b) => a - b);
  console.log(newArray);
  return newArray[0] + newArray[1];
};
export default solve;
