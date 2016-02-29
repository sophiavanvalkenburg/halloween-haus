var Controller = function(haus, renderer, mode_manager, the_story, sound_manager, time_manager){
  this.haus = haus;
  this.renderer = renderer;
  this.mode_manager = mode_manager;
  this.the_story = the_story;
  this.sound_manager = sound_manager;
  this.time_manager = time_manager;
};
Controller.prototype.setup = function(){
  this.setUpEventListeners();
  this.haus.setCurrentMap(Config.INITIAL_MAP);
  this.renderer.drawMap(this.haus);
};
Controller.prototype.updateRenderer = function(){
  this.renderer.drawMap(this.haus);
  this.renderer.updateCharacters(this.haus.getCharacters());
  this.renderer.updateTextDialog(this.haus.getTextDialog());
  this.renderer.updateChoiceDialog(this.haus.getChoiceDialog());
};
Controller.prototype.setUpEventListeners = function(){
  var controller = this; 
  window.addEventListener("keydown", function(e){
    controller.mode_manager.handleKeyEvent(e.which, controller);
    controller.updateRenderer();
  });
  window.addEventListener("tick", function(e){
    controller.handleTimeTickEvent();
  });
};
Controller.prototype.handleTimeTickEvent = function(){
  var currentTime = this.time_manager.getCounter();
  var characters = this.haus.getCharacters();
  for(var i=0; i<characters.length; i++){
    var ch = characters[i]
    ch.animate(this, currentTime);
  }  
  this.updateRenderer();
}
Controller.prototype.movePlayerLeft = function(){
  this.movePlayerByOffset(-1, 0);
}
Controller.prototype.movePlayerRight = function(){
  this.movePlayerByOffset(1, 0);
}
Controller.prototype.movePlayerUp = function(){
  this.movePlayerByOffset(0, -1);
}
Controller.prototype.movePlayerDown = function(){
  this.movePlayerByOffset(0, 1);
}
Controller.prototype.movePlayerByOffset = function(x_offset, y_offset){
  var map = this.haus.getCurrentMap();
  var player = this.haus.getPlayer();
  var tile_x = player.X() + x_offset;
  var tile_y = player.Y() + y_offset;
  player.setOrientationTowards(tile_x, tile_y);
  this.movePlayer(player, new MapLocation(map.getId(), tile_x, tile_y));
}
Controller.prototype.movePlayer = function(player, map_loc){
  var tile = this.haus.getTileOnMap(map_loc.mapIndex(), map_loc.X(), map_loc.Y());
  if (tile !== undefined && 
      tile.isAccessible() && 
      this.haus.getCharacterOnMap(tile.getPortalLoc()) === undefined
     ){
    player.setLocation(tile.getPortalLoc());
    var change_maps = this.haus.getCurrentMap().getId() !== player.mapIndex()
    if ( !player.isNPC() && change_maps){
      this.haus.setCurrentMap(player.mapIndex());
    }
  }
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
Controller.prototype.pauseTime = function(){
  this.time_manager.stopCounter();
}
Controller.prototype.unpauseTime = function(){
  this.time_manager.startCounter();
}

$(function(){
  var the_haus = new Haus();
  var map_loader = new MapLoader(the_haus);
  var renderer = new Renderer();
  var mode_manager = new InputModeManager();
  var the_story = new Story();
  var sound_manager = new SoundManager();
  var time_manager = new TimeManager()
  var controller = new Controller(the_haus, renderer, mode_manager, the_story, sound_manager, time_manager);
  map_loader.loadAllMaps(Config.mapfiles, function(){
    controller.setup();
    the_story.setup(controller);
    sound_manager.playMusic(Config.INITIAL_MUSIC);
    time_manager.startCounter();
  }); 
});

