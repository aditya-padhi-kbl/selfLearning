let wages = {
  baseSalary: 30000,
  overTime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + this.overTime * this.rate;
  }
};

export default wages;
