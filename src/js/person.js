function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
};

Person.prototype.calculate_bmi = function() {
    this.bmiValue = 26.01;
  }
 
 
  if (typeof module !== 'undefined' && module.exports) {
      module.exports = Person;
  }


