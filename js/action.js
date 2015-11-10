var ActionMode = function(target){
  this.target = target;
};
ActionMode.LEFT = 37;
ActionMode.UP = 38;
ActionMode.RIGHT = 39;
ActionMode.DOWN = 40;
ActionMode.SELECT = 90;
ActionMode.prototype.leftArrowButtonHandler = function(){};
ActionMode.prototype.rightArrowButtonHandler = function(){};
ActionMode.prototype.downArrowButtonHandler = function(){};
ActionMode.prototype.upArrowButtonHandler = function(){};
ActionMode.prototype.selectButtonHandler = function(){};
ActionMode.prototype.defaultHandler = function(){};
ActionMode.prototype.eventHandler = function(key_code, controller){
  switch(key_code){
    case ActionMode.LEFT:
      this.leftArrowButtonHandler(controller);
      break;
    case ActionMode.RIGHT:
      this.rightArrowButtonHandler(controller);
      break;
    case ActionMode.UP:
      this.upArrowButtonHandler(controller);
      break;
    case ActionMode.DOWN:
      this.downArrowButtonHandler(controller);
      break;
    case ActionMode.SELECT:
      this.selectButtonHandler(controller);
      break;
    default:
      this.defaultHandler(controller);
      break;
  }
};


var TextDialogActionMode = function(target){
  ActionMode.call(this, target);
};
TextDialogActionMode.prototype = new ActionMode();
TextDialogActionMode.prototype.constructor = TextDialogActionMode;
TextDialogActionMode.prototype.downArrowButtonHandler = function(controller){
  controller.textDialogGotoNextMessage();
};
TextDialogActionMode.prototype.selectButtonHandler = function(controller){
  controller.textDialogGotoNextMessage();
};


var ChoiceDialogActionMode = function(target){
  ActionMode.call(this, target);
};
ChoiceDialogActionMode.prototype = new ActionMode();
ChoiceDialogActionMode.prototype.constructor = ChoiceDialogActionMode;
ChoiceDialogActionMode.prototype.downArrowButtonHandler = function(controller){
  controller.choiceDialogSelectBelow();
};
ChoiceDialogActionMode.prototype.upArrowButtonHandler = function(controller){
  controller.choiceDialogSelectAbove();
};
ChoiceDialogActionMode.prototype.selectButtonHandler = function(controller){
  controller.choiceDialogSelect();
};


var MapActionMode = function(target){
  ActionMode.call(this, target);
};
MapActionMode.prototype = new ActionMode();
MapActionMode.prototype.constructor = MapActionMode;
MapActionMode.prototype.leftArrowButtonHandler = function(controller){
  controller.movePlayerLeft(this.target);
}
MapActionMode.prototype.rightArrowButtonHandler = function(controller){
  controller.movePlayerRight(this.target);
}
MapActionMode.prototype.downArrowButtonHandler = function(controller){
  controller.movePlayerDown(this.target);
};
MapActionMode.prototype.upArrowButtonHandler = function(controller){
  controller.movePlayerUp(this.target);
};
MapActionMode.prototype.selectButtonHandler = function(controller){
  controller.objectSelect(this.target);
};


var ActionHandler = function(){
  this.action_queue = [];
};
ActionHandler.prototype.addActions = function(actions){
  this.action_queue = this.action_queue.concat(actions);
};
ActionHandler.prototype.nextAction = function(){
  var next = this.action_queue[0];
  this.action_queue = this.action_queue.slice(1);
  return next;
};
ActionHandler.prototype.actionQueueIsEmpty = function(){
  return this.action_queue.length === 0;
};
ActionHandler.prototype.handleKeyEvent = function(key_code, controller){
  if (this.actionQueueIsEmpty()){
    var target = controller.getActionTarget();
    this.addActions(target.getActionSequence());
  }
  this.nextAction().eventHandler(key_code, controller);
};
