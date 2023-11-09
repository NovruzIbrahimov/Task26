const reverseText = require('./textReverse');

describe('reverseText', () => {

    test('boş olmayan sətri tərsinə çevirməlidir', () => {
        const Text = 'Hello, GarageAcademy!';
        const expOutput = '!ymedacAegaraG ,olleH';
    
        expect(reverseText(Text)).toEqual(expOutput);
      });

      test('boş sətri tərsinə çevirməlidir', () => {
        const Text = '';
        const expOutput = '';
    
        expect(reverseText(Text)).toEqual(expOutput);
      });

      test('should throw an error for a non-string input', () => {
        const invalidInput = 567;
    
        expect(() => {
          reverseText(invalidInput);
        }).toThrow('Giriş string deyil');
      });
      
});