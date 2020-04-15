Thermostat = function(){
  this._temperature = 20;
  this._powerSavingMode = true;
};

Thermostat.prototype.temp = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {

  // pwer saving on and temperature == 25 -> do nothing
  //power saving off increment
  //power saving on and temp is bellow 25 increment

  if((this._powerSavingMode  === true && this._temperature <25) || (!this._powerSavingMode && this._temperature <32)) {
    this._temperature += 1
  }
}
/* else if (!this._powerSavingMode   {
  this._temperature +=1
} */
Thermostat.prototype.down = function() {
  if(this._temperature > 10) {
    this._temperature--;
  }
}

Thermostat.prototype.powerSavingModeOn = function() {
  this._powerSavingMode = true;
}

Thermostat.prototype.powerSavingModeOff = function() {
  this._powerSavingMode = false
}

Thermostat.prototype.getUsage = function() {
  console.log(this._temperature)
  if(this._temperature < 18) {
    return "Low"
  } else if(this._temperature < 25) {
    return "Medium"
  } else
    return "High"
}

//make a variable for thermostat called power saving mode
//set that to false
