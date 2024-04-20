const solve = (arr = []) => {
  const arrayReverse = arr.reverse();

  let countDirectionLeft = 0;
  let countDirectionRight = 0;

  const arrayDirections = arrayReverse.map((dir, index) => {
    if (index === 0) {
      const newDir = dir.replace(/^\w+/, "Begin");
      return newDir;
    }
    if (dir.split(" ")[0] === "Right") {
      let newDir = dir.replace(/^\w+/, "Left");
      countDirectionRight += 1;
      if (countDirectionRight > 1) {
        console.log(countDirectionRight);
        newDir = dir.replace(/^\w+/, "Right");
        return newDir;
      }
      return newDir;
    }
    if (dir.split(" ")[0] === "Left") {
      let newDir = dir.replace(/^\w+/, "Right");
      countDirectionLeft += 1;

      if (countDirectionLeft > 1) {
        console.log(countDirectionLeft);

        newDir = dir.replace(/^\w+/, "Left");
        return newDir;
      }
      return newDir;
    }
    if (dir.split(" ")[0] === "Begin") {
      const newDir = dir.replace(/^\w+/, "Left");
      return newDir;
    }
    return dir;
  });
  return arrayDirections;
};

export default solve;
