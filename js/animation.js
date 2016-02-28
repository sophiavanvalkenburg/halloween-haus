var AnimationManager = function(){
  this.counter = 0;
  this.counter_inc = Config.ANIMATION_COUNTER;
  this.counter_max = Config.ANIMATION_COUNTER_OVERFLOW;
  this.controller = undefined;    
  this.stopped = false;
  this.tickEvent = new Event("tick");
}

AnimationManager.prototype.startCounter = function(){
  this.stopped = false;
  var am = this
  setTimeout(function(){
    if (!am.stopped){
      am.incrementCounter(); 
      this.dispatchEvent(am.tickEvent);
      am.startCounter();
    }
  }, this.counter_inc);
}
AnimationManager.prototype.incrementCounter = function(){
  this.counter++;
  if (this.counter % this.counter_max == 0){
    this.resetCounter();
  }
}
AnimationManager.prototype.resetCounter = function(){
  this.counter = 0;
}
AnimationManager.prototype.stopCounter = function(){
  this.stopped = true;
}
AnimationManager.prototype.getCounter = function(){
  return this.counter;
}

