const { add, subtract, multiply, divide } = require('./mathematicalFunctions');

describe('Mathematical Functions', () => {
    describe('add', () => {
      test('iki müsbət ədəd əlavə etməlidir', () => {
        expect(add(4, 5)).toBe(9);
      });
  
      test('müsbət ədəd və mənfi ədəd əlavə edilməlidir', () => {
        expect(add(9, -3)).toBe(6);
      });
    });
  
    describe('subtract', () => {
      test('iki müsbət ədədi çıxmaq lazımdır', () => {
        expect(subtract(7, 2)).toBe(5);
      });
  
      test('müsbət ədədi və mənfi ədədi çıxmalıdır', () => {
        expect(subtract(3, -3)).toBe(6);
      });
    });
  
    describe('multiply', () => {
      test('iki müsbət ədədi vurmaq lazımdır', () => {
        expect(multiply(5, 6)).toBe(30);
      });
  
      test('müsbət ədədi və mənfi ədədi vurmalıdır', () => {
        expect(multiply(2, -8)).toBe(-16);
      });
    });
  
    describe('divide', () => {
      test('iki müsbət ədədi bölmək lazımdır', () => {
        expect(divide(9, 3)).toBe(3);
      });
  
      test('müsbət ədədi mənfi ədədə bölmək lazımdır', () => {
        expect(divide(8, -2)).toBe(-4);
      });
    });
  });