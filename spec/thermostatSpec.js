
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
    expect(thermostat._powerSavingMode).toBe(true);
  })

  it('Cannot exceed 25 on powerSavingMode', function() {
    thermostat.powerSavingModeOn()
    for(var i = 0; i < 6; i++) {
      thermostat.up()
    }
    expect(thermostat.temp()).toEqual(25)
  })

  it('Can turn powerSavingMode off', function () {
    thermostat.powerSavingModeOff()
    expect(thermostat._powerSavingMode).toEqual(false)

  })

  it('Cannot exceed 32 if powerSavingMode is off', function() {
    thermostat.powerSavingModeOff()
    for(var i = 0; i < 13; i++) {
      thermostat.up()
    }
    expect(thermostat.temp()).toEqual(32)
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
