var Mode = function(environment){
  this.environment = environment;
};
Mode.LEFT = 37;
Mode.UP = 38;
Mode.RIGHT = 39;
Mode.DOWN = 40;
Mode.SELECT = 90;
Mode.prototype.leftArrowButtonHandler = function(){};
Mode.prototype.rightArrowButtonHandler = function(){};
Mode.prototype.downArrowButtonHandler = function(){};
Mode.prototype.upArrowButtonHandler = function(){};
Mode.prototype.selectButtonHandler = function(){};
Mode.prototype.defaultHandler = function(){};
Mode.prototype.shouldEndMode = function(){
  return true;
};
//Mode.prototype.initialize = function(){};
Mode.prototype.eventHandler = function(key_code, controller){
  switch(key_code){
    case Mode.LEFT:
      this.leftArrowButtonHandler(controller);
      break;
    case Mode.RIGHT:
      this.rightArrowButtonHandler(controller);
      break;
    case Mode.UP:
      this.upArrowButtonHandler(controller);
      break;
    case Mode.DOWN:
      this.downArrowButtonHandler(controller);
      break;
    case Mode.SELECT:
      this.selectButtonHandler(controller);
      break;
    default:
      this.defaultHandler(controller);
      break;
  }
  return this.shouldEndMode();
};


var TextDialogMode = function(environment){
  Mode.call(this, environment);
};
TextDialogMode.prototype = new Mode();
TextDialogMode.prototype.constructor = TextDialogMode;
TextDialogMode.prototype.downArrowButtonHandler = function(controller){
  this.gotoNextMessage(controller);
};
TextDialogMode.prototype.selectButtonHandler = function(controller){
  this.gotoNextMessage(controller);
};
TextDialogMode.prototype.gotoNextMessage = function(controller){
  if (!this.shouldEndMode()){
    controller.setTextDialogMessage(this.environment.messages[0]);
    this.environment.messages = this.environment.messages.slice(1);
  }
}
TextDialogMode.shouldEndMode = function(){
  return this.environment.messages === undefined || this.environment.messages.length === 0;
}


var ChoiceDialogMode = function(environment){
  Mode.call(this, environment);
};
ChoiceDialogMode.prototype = new Mode();
ChoiceDialogMode.prototype.constructor = ChoiceDialogMode;
ChoiceDialogMode.prototype.downArrowButtonHandler = function(controller){
  controller.choiceDialogSelectBelow();
};
ChoiceDialogMode.prototype.upArrowButtonHandler = function(controller){
  controller.choiceDialogSelectAbove();
};
ChoiceDialogMode.prototype.selectButtonHandler = function(controller){
  controller.choiceDialogSelect();
};


var MapMode = function(environment){
  Mode.call(this, environment);
};
MapMode.prototype = new Mode();
MapMode.prototype.constructor = MapMode;
MapMode.prototype.leftArrowButtonHandler = function(controller){
  controller.movePlayerLeft();
}
MapMode.prototype.rightArrowButtonHandler = function(controller){
  controller.movePlayerRight();
}
MapMode.prototype.downArrowButtonHandler = function(controller){
  controller.movePlayerDown();
};
MapMode.prototype.upArrowButtonHandler = function(controller){
  controller.movePlayerUp();
};
MapMode.prototype.selectButtonHandler = function(controller){
  controller.selectObject();
};


var ActionHandler = function(){
  this.mode_queue = [];
};
ActionHandler.prototype.addModes = function(modes){
  this.mode_queue = this.mode_queue.concat(modes);
};
ActionHandler.prototype.currentMode = function(){
  if (!this.modeQueueIsEmpty()){
    return this.mode_queue[0];
  }
  return undefined;
};
ActionHandler.prototype.gotoNextMode = function(){
  this.mode_queue = this.mode_queue.slice(1);
};
ActionHandler.prototype.modeQueueIsEmpty = function(){
  return this.mode_queue.length === 0;
};
ActionHandler.prototype.handleKeyEvent = function(key_code, controller){
  if (this.modeQueueIsEmpty()){
    this.addModes([new MapMode()]);
  }
  var curr_mode = this.currentMode();
  if (curr_mode !== undefined){
    var should_end_mode = curr_mode.eventHandler(key_code, controller);
    if (should_end_mode){
      this.gotoNextMode(); 
    }
  }
};
