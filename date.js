function calculateDate(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      throw new Error('Hər iki giriş etibarlı Tarix obyektləri olmalıdır');
    }
  
    
    const timeDiff = date2 - date1;
  
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    return daysDiff;
  }
  
  module.exports = calculateDate;
  