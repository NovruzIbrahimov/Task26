function TriangleArea(a, b, c) {

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Yan uzunluqlar müsbət ədədlər olmalıdır');
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Üçbucaq üçün yan uzunluqlar yanlışdır');
    }
    const s = (a + b + c) / 2;

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  
    return area;
  }
  
  module.exports = TriangleArea;
  