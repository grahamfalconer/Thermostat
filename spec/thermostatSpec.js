
describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('It starts at 20 degrees', function() {
    expect(thermostat.temp()).toBe(20);
  });

  it('temperature increases with up function', function() {
    thermostat.up()
    expect(thermostat.temp()).toEqual(21);
  });

  it('temperature decreases with down function', function() {
    thermostat.down()
    expect(thermostat.temp()).toEqual(19);
  });

  it('It never goes lower than 10', function() {
    for(var i = 0; i < 11; i++) {
      thermostat.down()
    }
    expect(thermostat.temp()).toEqual(10)
  })

  it('Can turn powerSavingMode on', function() {
    thermostat.powerSavingModeOn()
    expect(thermostat.powerSavingMode).toBe(true);
  })
});



/*
describe('Fizzbuzz', function() {
  var fizzbuzz;
  describe('know when a number is', function(){
    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
*/
