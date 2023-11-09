function reverseText(text) {
    if (typeof text !== 'string') {
      throw new Error('Giriş string deyil');
    }
  
    return text.split('').reverse().join('');
  }
  
  module.exports = reverseText;
  