const TriangleArea = require('./triangle');

describe('TriangleArea', () => {
    test('üçbucağın sahəsini hesablamalıdır', () => {
        expect(TriangleArea(3, 4, 5)).toBe(6);
      });

      test('mənfi tərəf olduqda səhv atmalıdır', () => {
        expect(() => {
          TriangleArea(-3, 4, 5);
        }).toThrow('Yan uzunluqlar müsbət ədədlər olmalıdır');
      });

      test('Yanlış yan uzunluqlar üçün səhv atmalıdır', () => {
        expect(() => {
          TriangleArea(1, 2, 3);
        }).toThrow('Üçbucaq üçün yan uzunluqlar yanlışdır');
      });
});