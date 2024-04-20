const solve = (array) => {
  let [numerator, denominator] = array;
  // Función para encontrar el MCD
  function mcd(a, b) {
    return b === 0 ? a : mcd(b, a % b);
  }

  // Calcula el MCD de numerador y denominador
  let divisor = mcd(numerator, denominator);

  // Divide el numerador y el denominador por el MCD
  numerator /= divisor;
  denominator /= divisor;

  // Retorna la fracción simplificada
  return [numerator, denominator];
};
export default solve;
