const EvenNumbers = require('./numbersEven');

describe('EvenNumbers', () => {

      test('yalnız cüt ədədləri olan massivi qaytarmalıdır', () => {
        const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expOutput = [2, 4, 6, 8, 10];
    
        expect(EvenNumbers(Array)).toEqual(expOutput);
      });

      test('boş massivi idarə etməlidir', () => {
        const Array = [];
        const expOutput = [];
    
        expect(EvenNumbers(Array)).toEqual(expOutput);
      });

      test('mənfi cüt ədədləri idarə etməlidir', () => {
        const Array = [-2, -4, -6, -8, -10];
        const expOutput = [-2, -4, -6, -8, -10];
    
        expect(EvenNumbers(Array)).toEqual(expOutput);
      });

      test('massiv olmayan giriş üçün xəta atmalıdır', () => {
        const invalidInput = 'massiv deyil';
    
        expect(() => {
          EvenNumbers(invalidInput);
        }).toThrow('Daxiletmə massiv deyil');
      });
});