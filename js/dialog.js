var DialogText = function(){
  this.activated = false;
  this.messages = [];
};
DialogText.prototype.isActivated = function(){
  return this.activated;
};
DialogText.prototype.setMessages = function(messages){
  this.messages = messages;
};
DialogText.prototype.start = function(){
  this.activated = true;
};
DialogText.prototype.end = function(){
  this.activated = false;
  this.messages = [];
};
DialogText.prototype.getCurrentMessage = function(){
  if (this.messages.length > 0){
    return this.messages[0];
  }
};
DialogText.prototype.goToNextMessage = function(){
  this.setMessages(this.messages.slice(1, this.messages.length));
};
DialogText.prototype.interactAction = function(controller){
  this.goToNextMessage();
  if (this.messages.length === 0){
    this.end();
    controller.haus.unsetInteractingObject();
  }
};
