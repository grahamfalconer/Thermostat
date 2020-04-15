Thermostat = function(){
  this._temperature = 20;

};

Thermostat.prototype.temp = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {
  this._temperature += 1
}

Thermostat.prototype.down = function() {
  if(this._temperature > 10) {
    this._temperature--;
  }
}
