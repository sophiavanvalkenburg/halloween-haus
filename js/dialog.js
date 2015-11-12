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
TextDialog.prototype.hasMessage = function(){
  return this.message !== undefined;
}


var ChoiceDialog = function(){
  this.choices = [];
  this.selected = undefined;
}
ChoiceDialog.prototype.hasChoices = function(){
  return this.choices.length !== 0;
}
ChoiceDialog.prototype.unsetChoices = function(){
  this.choices = [];
}
ChoiceDialog.prototype.setChoices = function(choices){
  this.choices = choices;
}
ChoiceDialog.prototype.getChoiceLabels = function(){
  var labels = [];
  for (var i=0; i<this.choices.length; i++){
    var choice = this.choices[i];
    if (choice !== undefined){
      labels.push(choice);
    }
  }
  return labels;
}
ChoiceDialog.prototype.selectChoice = function(item_index){
  this.selected = item_index;
}
ChoiceDialog.prototype.getSelectedLabel = function(){
  return this.choices[this.selected];
}
