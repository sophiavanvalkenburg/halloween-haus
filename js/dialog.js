var Dialog = function(){
  this.activated = false;
  this.messages = [];
}
Dialog.prototype.setMessages = function(messages){
  this.messages = messages;
}
Dialog.prototype.start = function(){
  this.activated = true;
}
Dialog.prototype.end = function(){
  this.activated = false;
}
Dialog.prototype.goToNextMessage = function(){
  this.setMessages(this.messages.slice(1, this.messages.length))
}
Dialog.prototype.interactAction = function(the_haus){
  console.log(this.messages);
  this.goToNextMessage();
  if (this.messages.length === 0){
    this.end();
    the_haus.unsetInteractingObject();
  }
}
