var TimeManager = function(){
  this.counter_inc = Config.TIME_COUNTER;
  this.tickEvent = new Event("tick");
}

TimeManager.prototype.startCounter = function(){
  this.stopped = false;
  var tm = this
  setTimeout(function(){
    if (!tm.stopped){
      this.dispatchEvent(tm.tickEvent);
      tm.startCounter();
    }
  }, this.counter_inc);
}
