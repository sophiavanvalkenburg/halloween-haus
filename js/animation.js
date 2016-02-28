var AnimationManager = function(controller){
  this.counter = 0;
  this.counter_inc = Config.ANIMATION_COUNTER;
  this.counter_max = Config.ANIMATION_COUNTER_OVERFLOW;
  this.controller = controller;    
}

AnimationManager.prototype.startCounter = function(){
  self = this
    setTimeout(function(){
      self.incrementCounter(); 
      self.updateCharacters();
      self.startCounter();
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
AnimationManager.prototype.updateCharacters = function(){
  var characters = this.controller.haus.getCharacters();
  for(var i=0; i<characters.length; i++){
    var ch = characters[i]
      var new_orientation = ch.getOrientationAtTime(this.counter);
    var new_map_loc = ch.getLocationAtTime(this.counter);
    if (new_map_loc !== undefined){
      this.controller.movePlayer(ch, new_map_loc);
    }
    if (new_orientation !== undefined){
      ch.setOrientation(new_orientation);
    }
  }  
  this.controller.updateRenderer();
}
