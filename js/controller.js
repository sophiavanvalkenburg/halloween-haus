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
  start_screen_modes = [Mode.createFactory()].concat(
    TextDialogMode.textArrayToModes(Config.START_SCREEN_TEXT_DESCRIPTION)
  );
  start_screen_modes.push(StartScreenMode.createFactory());
  this.mode_manager.addModesAndHandleEvent(
      this,
      Mode.NULL_INPUT, 
      start_screen_modes
  );
  this.updateRenderer();
}
Controller.prototype.updateRenderer = function(){
  this.renderer.drawMap(this.haus);
  this.renderer.updateCharacters(this.haus.getCharacters());
  this.renderer.updateItems(this.haus.getItems());
  this.renderer.updateTextDialog(this.haus.getTextDialog());
  this.renderer.updateChoiceDialog(this.haus.getChoiceDialog());
};
Controller.prototype.setUpEventListeners = function(){
  var controller = this; 
  window.addEventListener("keydown", function(e){
    controller.mode_manager.handleKeyEvent(e.which, controller);
    controller.updateRenderer();
    e.stopPropagation();
  });
  window.addEventListener("tick", function(e){
    controller.handleTimeTickEvent();
  });
  $("#mute-btn").on("click", function(){
    $(this).blur();
    controller.handleMuteButtonClickEvent();
  });
  $("#credits-btn").on("click", function(){
    $(this).blur();
    controller.handleCreditsButtonClickEvent();
  });
  $("#how-to-btn").on("click", function(){
    $(this).blur();
    controller.handleHowToButtonClickEvent();
  });
};
Controller.prototype.handleHowToButtonClickEvent = function(){
  if (this.mode_manager.modeQueueIsEmpty()){
    this.mode_manager.addModes([Mode.createFactory()]);
    var instructions = TextDialogMode.textArrayToModes(Config.HOW_TO);
    this.mode_manager.addModesAndHandleEvent(this, Mode.SELECT, instructions);
  }
  this.updateRenderer();
}
Controller.prototype.handleCreditsButtonClickEvent = function(){
  if (this.mode_manager.modeQueueIsEmpty()){
    this.mode_manager.addModes([Mode.createFactory()]);
    var credits = TextDialogMode.textArrayToModes(Config.CREDITS);
    this.mode_manager.addModesAndHandleEvent(this, Mode.SELECT, credits);
  }
  this.updateRenderer();
}
Controller.prototype.handleMuteButtonClickEvent = function(){
  this.sound_manager.toggleMute();
}
Controller.prototype.handleTimeTickEvent = function(){
  var characters = this.haus.getCharacters();
  for(var i=0; i<characters.length; i++){
    var ch = characters[i]
    ch.animate(this);
  }  
  this.updateRenderer();
}
Controller.prototype.movePlayerLeft = function(){
  return this.movePlayerByOffset(-1, 0);
}
Controller.prototype.movePlayerRight = function(){
  return this.movePlayerByOffset(1, 0);
}
Controller.prototype.movePlayerUp = function(){
  return this.movePlayerByOffset(0, -1);
}
Controller.prototype.movePlayerDown = function(){
  return this.movePlayerByOffset(0, 1);
}
Controller.prototype.movePlayerByOffset = function(x_offset, y_offset){
  var map = this.haus.getCurrentMap();
  var player = this.haus.getPlayer();
  var tile_x = player.X() + x_offset;
  var tile_y = player.Y() + y_offset;
  player.setOrientationTowards(tile_x, tile_y);
  return this.movePlayer(player, new MapLocation(map.getId(), tile_x, tile_y));
}
Controller.prototype.movePlayer = function(player, map_loc){
  var tile = this.haus.getTileOnMap(map_loc.mapIndex(), map_loc.X(), map_loc.Y());
  if (tile !== undefined && 
      tile.isAccessible() && 
      this.haus.getCharacterOnMap(tile.getPortalLoc()) === undefined &&
      this.haus.getItemOnMap(tile.getPortalLoc()) === undefined
     ){
    player.setLocation(tile.getPortalLoc());
    var change_maps = this.haus.getCurrentMap().getId() !== player.mapIndex()
    if ( !player.isNPC() && change_maps){
      this.haus.setCurrentMap(player.mapIndex());
    }
    return true;
  }
  return false;
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
Controller.prototype.startGame = function(){
  this.renderer.hideStartScreen();
  this.renderer.showMap();
  this.sound_manager.playMusic(Labels.sounds.MAIN);
  this.time_manager.startCounter();
}

$(function(){
  var the_haus = new Haus();
  var game_loader = new GameLoader(the_haus);
  var renderer = new Renderer();
  var mode_manager = new InputModeManager();
  var the_story = new Story();
  var sound_manager = new SoundManager();
  var time_manager = new TimeManager()
  var controller = new Controller(the_haus, renderer, mode_manager, the_story, sound_manager, time_manager);
  game_loader.loadGame(function(){
    renderer.hideLoadingImage();
    renderer.showStartScreen();
    controller.setup();
    the_story.setup(controller);
    sound_manager.playMusic(Config.INITIAL_MUSIC);
  }); 
});

