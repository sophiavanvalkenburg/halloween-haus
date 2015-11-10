var TextDialog = function(){
  this.message = undefined;
};
TextDialog.prototype.unsetMessage = function(){
  this.message = undefined;
}
TextDialog.prototype.setMessage = function(message){
  this.message = message;
};
TextDialog.prototype.getMessage = function(){
  return this.message;
};
