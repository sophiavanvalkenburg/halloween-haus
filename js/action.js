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
Mode.prototype.clear = function(){};
Mode.prototype.initialize = function(){};
Mode.prototype.shouldEndMode = function(){
  return true;
};
Mode.prototype.eventHandler = function(key_code, controller, action_handler){
  switch(key_code){
    case Mode.LEFT:
      this.leftArrowButtonHandler(controller, action_handler);
      break;
    case Mode.RIGHT:
      this.rightArrowButtonHandler(controller, action_handler);
      break;
    case Mode.UP:
      this.upArrowButtonHandler(controller, action_handler);
      break;
    case Mode.DOWN:
      this.downArrowButtonHandler(controller, action_handler);
      break;
    case Mode.SELECT:
      this.selectButtonHandler(controller, action_handler);
      break;
    default:
      this.defaultHandler(controller, action_handler);
      break;
  }
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
    this.environment.messages = this.environment.messages.slice(1);
    this.initialize(controller);
  }
}
TextDialogMode.prototype.shouldEndMode = function(){
  return this.environment.messages === undefined || this.environment.messages.length === 0;
}
TextDialogMode.prototype.initialize = function(controller){
  if (!this.shouldEndMode()){
    controller.setTextDialogMessage(this.environment.messages[0]);
  }
}
TextDialogMode.prototype.clear = function(controller){
  controller.unsetTextDialogMessage();
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


var MapMode = function(){
  Mode.call(this, {handled: false});
};
MapMode.prototype = new Mode();
MapMode.prototype.constructor = MapMode;
MapMode.prototype.leftArrowButtonHandler = function(controller){
  controller.movePlayerLeft();
  this.environment.handled = true;
}
MapMode.prototype.rightArrowButtonHandler = function(controller){
  controller.movePlayerRight();
  this.environment.handled = true;
}
MapMode.prototype.downArrowButtonHandler = function(controller){
  controller.movePlayerDown();
  this.environment.handled = true;
};
MapMode.prototype.upArrowButtonHandler = function(controller){
  controller.movePlayerUp();
  this.environment.handled = true;
};
MapMode.prototype.selectButtonHandler = function(controller, action_handler){
  var target_obj = controller.selectFacingObject();
  action_handler.addModes(target_obj.getModeSequence()); 
  this.environment.handled = true;
};
MapMode.prototype.shouldEndMode = function(){
  return this.environment.handled === true;
}


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
};
ActionHandler.prototype.gotoNextMode = function(){
  this.mode_queue = this.mode_queue.slice(1);
  return this.currentMode();
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
    curr_mode.eventHandler(key_code, controller, this);
    if (curr_mode.shouldEndMode()){
      curr_mode.clear(controller);
      var next_mode = this.gotoNextMode();
      if (next_mode !== undefined){
        next_mode.initialize(controller);
      }
    }
  }
};
