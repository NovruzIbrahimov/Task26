const calculateDate = require('./date');

describe('calculateDate', () => {
    test('iki tarix arasındakı gün fərqini hesablamalıdır', () => {
        const date1 = new Date('2023-11-01');
        const date2 = new Date('2023-11-10');
    
        expect(calculateDate(date1, date2)).toBe(9);
      });

      test('eyni tarixlə olmalıdır', () => {
        const date1 = new Date('2023-11-10');
        const date2 = new Date('2023-11-10');
    
        expect(calculateDate(date1, date2)).toBe(0);
      });

      test('Qeyri-Tarix daxiletmələri üçün xəta atmalıdır', () => {
        const invalidDate = '2023-11-01';
    
        expect(() => {
          calculateDate(invalidDate, new Date());
        }).toThrow('Hər iki giriş etibarlı Tarix obyektləri olmalıdır');
      });
});