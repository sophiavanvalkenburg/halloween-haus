var BaseDialog = function(){
  this.activated = false;
}
BaseDialog.prototype.isActivated = function(){
  return this.activated;
};
BaseDialog.prototype.start = function(){
  this.activated = true;
};
BaseDialog.prototype.end = function(){
  this.activated = false;
}


var YesNoDialog = function(){
  BaseDialog.call(this)
  this.selected_yes = true;
};
YesNoDialog = new BaseDialog();
YesNoDialog.prototype.constructor = YesNoDialog;
YesNoDialog.prototype.selectedYes = function(){
  return this.selected_yes;
}
YesNoDialog.prototype.end = function(){
  this.selected_yes = true;
  BaseDialog.prototype.end.call(this);
};
YesNoDialog.prototype.interactAction = function(controller){
  controller.setSelectionResult(this.selected_yes);
  this.end();
  controller.haus.unsetInteractingObject();
};


var TextDialog = function(){
  BaseDialog.call(this);
  this.messages = [];
};
TextDialog.prototype = new BaseDialog();
TextDialog.prototype.constructor = TextDialog;
TextDialog.prototype.setMessages = function(messages){
  this.messages = messages;
};
TextDialog.prototype.end = function(){
  this.messages = [];
  BaseDialog.prototype.end.call(this);
};
TextDialog.prototype.getCurrentMessage = function(){
  if (this.messages.length > 0){
    return this.messages[0];
  }
};
TextDialog.prototype.goToNextMessage = function(){
  this.setMessages(this.messages.slice(1, this.messages.length));
};
TextDialog.prototype.interactAction = function(controller){
  this.goToNextMessage();
  if (this.messages.length === 0){
    this.end();
    controller.haus.unsetInteractingObject();
  }
};
