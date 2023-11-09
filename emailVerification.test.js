const ValidEmail = require('./emailVerification');

describe('ValidEmail', () => {

    test('etibarlı e-poçt ünvanı üçün doğru qayıtmalıdır', () => {
        expect(ValidEmail('test@example.com')).toBe(true);
        expect(ValidEmail('tom.cruise@gmail.com')).toBe(true);
      });

      test('etibarsız e-poçt ünvanı üçün false qaytarmalıdır', () => {
        expect(ValidEmail('tom.cruise')).toBe(false);
        expect(ValidEmail('user@')).toBe(false);
        expect(ValidEmail('tom@gmail.')).toBe(false);
        expect(ValidEmail('@gmail.com')).toBe(false);
      });

      test('qeyri-müəyyən giriş üçün false qaytarmalıdır', () => {
        expect(ValidEmail(null)).toBe(false);
        expect(ValidEmail(undefined)).toBe(false);
      });
});