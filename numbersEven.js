function EvenNumbers(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Daxiletmə massiv deyil');
    }
  
    return arr.filter((number) => number % 2 === 0);
  }
  
  module.exports = EvenNumbers;
  