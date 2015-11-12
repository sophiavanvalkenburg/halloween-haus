var Controller = function(haus, canvas, mode_manager){
  this.haus = haus;
  this.canvas = canvas;
  this.mode_manager = mode_manager;
};
Controller.prototype.setup = function(){
  this.setUpEventListener();
  this.haus.setCurrentMap(0);
  this.canvas.drawMap(this.haus);
};
Controller.prototype.updateCanvas = function(){
  this.canvas.updateCharacter(this.haus.getPlayer());
  this.canvas.updateTextDialog(this.haus.getTextDialog());
  this.canvas.updateChoiceDialog(this.haus.getChoiceDialog());
  this.canvas.drawMap(this.haus);
};
Controller.prototype.setUpEventListener = function(){
  var controller = this; 
  window.addEventListener("keydown", function(e){
    controller.mode_manager.handleKeyEvent(e.which, controller);
    controller.updateCanvas();
  });
};
Controller.prototype.movePlayerLeft = function(){
  this.movePlayer(-1, 0);
}
Controller.prototype.movePlayerRight = function(){
  this.movePlayer(1, 0);
}
Controller.prototype.movePlayerUp = function(){
  this.movePlayer(0, -1);
}
Controller.prototype.movePlayerDown = function(){
  this.movePlayer(0, 1);
}
Controller.prototype.movePlayer = function(x_offset, y_offset){
  var map = this.haus.getCurrentMap();
  var player = this.haus.getPlayer();
  var tile_x = player.X() + x_offset;
  var tile_y = player.Y() + y_offset;
  player.setOrientationTowards(tile_x, tile_y);
  var tile = map.getTile(tile_x, tile_y);
  player.moveTo(tile);
  this.haus.setCurrentMap(player.mapIndex());
}
Controller.prototype.selectFacingObject = function(){
  var map = this.haus.getCurrentMap();
  var player = this.haus.getPlayer();
  return this.haus.getFacingObjectOnMap(map, player);
}
Controller.prototype.setTextDialogMessage = function(message){
  var dialog = this.haus.getTextDialog();
  dialog.setMessage(message);
}
Controller.prototype.unsetTextDialogMessage = function(){
  var dialog = this.haus.getTextDialog();
  dialog.unsetMessage();
}
Controller.prototype.setChoiceDialogLabels = function(labels){
  var dialog = this.haus.getChoiceDialog();
  dialog.setChoices(labels);
}
Controller.prototype.unsetChoiceDialogLabels = function(){
  var dialog = this.haus.getChoiceDialog();
  dialog.unsetChoices();
}
Controller.prototype.choiceDialogSelectItem = function(item_index){
  var dialog = this.haus.getChoiceDialog();
  dialog.selectChoice(item_index);
}


$(function(){
  var the_haus = new Haus();
  var canvas = new Canvas();
  var mode_manager = new InputModeManager();
  var controller = new Controller(the_haus, canvas, mode_manager);
  controller.setup();
});

