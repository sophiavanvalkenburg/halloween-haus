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
  TextDialog.call(this);
  this.choices = [];
}
ChoiceDialog.prototype = new TextDialog();
ChoiceDialog.prototype.constructor = ChoiceDialog;
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
    var choice_obj = this.choices[i];
    if (choice_obj.label !== undefined){
      labels.push(choice_obj.label);
    }
  }
  return labels;
}
ChoiceDialog.prototype.choiceOutcomeForLabel = function(label){
  for (var i=0; i<this.choices.length; i++){
    var choice_obj = this.choices[i];
    if (choice_obj.label === label){
      return choice_obj.outcome;
    }
  }
}
