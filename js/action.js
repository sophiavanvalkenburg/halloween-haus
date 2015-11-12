var Mode = function(){};
Mode.LEFT = 37;
Mode.UP = 38;
Mode.RIGHT = 39;
Mode.DOWN = 40;
Mode.SELECT = 90;
Mode.createFactory = function(){
  return function() { return new Mode(); };
}
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


var TextDialogMode = function(messages){
  Mode.call(this);
  this.messages = messages;
};
TextDialogMode.createFactory = function(messages){
  return function() { return new TextDialogMode(messages); };
}
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
    this.messages = this.messages.slice(1);
    this.initialize(controller);
  }
}
TextDialogMode.prototype.shouldEndMode = function(){
  return this.messages === undefined || this.messages.length === 0;
}
TextDialogMode.prototype.initialize = function(controller){
  if (!this.shouldEndMode()){
    controller.setTextDialogMessage(this.messages[0]);
  }
}
TextDialogMode.prototype.clear = function(controller){
  controller.unsetTextDialogMessage();
}


var ChoiceDialogMode = function(choices, message, select_fn){
  Mode.call(this);
  this.choices = choices;
  this.message = message;
  this.selected = 0;
  this.select_fn = select_fn;
  this.handled = false;
};
ChoiceDialogMode.createFactory = function(choices, message, select_fn){
  return function(){ return new ChoiceDialogMode(choices, message, select_fn); };
}
ChoiceDialogMode.prototype = new Mode();
ChoiceDialogMode.prototype.constructor = ChoiceDialogMode;
ChoiceDialogMode.prototype.initialize = function(controller){
  if (!this.shouldEndMode()){
    if (this.message !== undefined){
        controller.setTextDialogMessage(this.message);
    }
    controller.setChoiceDialogLabels(this.choices);
    controller.choiceDialogSelectItem(this.selected);
  }
}
ChoiceDialogMode.prototype.clear = function(controller){
  controller.unsetTextDialogMessage();
  controller.unsetChoiceDialogLabels();
}
ChoiceDialogMode.prototype.downArrowButtonHandler = function(controller){
  this.selected = this.selected === this.choices.length - 1 ? this.selected : this.selected + 1;
  controller.choiceDialogSelectItem(this.selected);
};
ChoiceDialogMode.prototype.upArrowButtonHandler = function(controller){
  this.selected = this.selected === 0 ? 0 : this.selected - 1;
  controller.choiceDialogSelectItem(this.selected);
};
ChoiceDialogMode.prototype.selectButtonHandler = function(controller, action_handler){
  this.select_fn(controller, action_handler, this.choices[this.selected])
  this.handled = true; 
};
ChoiceDialogMode.prototype.shouldEndMode = function(){
  return this.handled;
}


var MapMode = function(){
  Mode.call(this); 
  this.handled = false;
};
MapMode.createFactory = function(){
  return function() { return new MapMode(); };
}
MapMode.prototype = new Mode();
MapMode.prototype.constructor = MapMode;
MapMode.prototype.leftArrowButtonHandler = function(controller){
  controller.movePlayerLeft();
  this.handled = true;
}
MapMode.prototype.rightArrowButtonHandler = function(controller){
  controller.movePlayerRight();
  this.handled = true;
}
MapMode.prototype.downArrowButtonHandler = function(controller){
  controller.movePlayerDown();
  this.handled = true;
};
MapMode.prototype.upArrowButtonHandler = function(controller){
  controller.movePlayerUp();
  this.handled = true;
};
MapMode.prototype.selectButtonHandler = function(controller, action_handler){
  var target_obj = controller.selectFacingObject();
  action_handler.addModes(target_obj.getModeSequence()); 
  this.handled = true;
};
MapMode.prototype.shouldEndMode = function(){
  return this.handled === true;
}


var ActionHandler = function(){
  this.mode_queue = [];
};
ActionHandler.prototype.addModes = function(mode_factories){
  for (var i=0; i<mode_factories.length; i++){
    var create_mode_fn = mode_factories[i];
    this.mode_queue.push(create_mode_fn());
  }
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
    this.addModes([MapMode.createFactory()]);
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
