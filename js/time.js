var TimeManager = function(){
  this.counter = 0;
  this.counter_inc = Config.TIME_COUNTER;
  this.counter_max = Config.TIME_COUNTER_OVERFLOW;
  this.controller = undefined;    
  this.stopped = false;
  this.tickEvent = new Event("tick");
}

TimeManager.prototype.startCounter = function(){
  this.stopped = false;
  var tm = this
  setTimeout(function(){
    if (!tm.stopped){
      tm.incrementCounter(); 
      this.dispatchEvent(tm.tickEvent);
      tm.startCounter();
    }
  }, this.counter_inc);
}
TimeManager.prototype.incrementCounter = function(){
  this.counter++;
  if (this.counter % this.counter_max == 0){
    this.resetCounter();
  }
}
TimeManager.prototype.resetCounter = function(){
  this.counter = 0;
}
TimeManager.prototype.stopCounter = function(){
  this.stopped = true;
}
TimeManager.prototype.getCounter = function(){
  return this.counter;
}
