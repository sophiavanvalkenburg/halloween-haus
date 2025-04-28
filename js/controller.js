class Controller {

  constructor(haus, renderer, mode_manager, the_story, sound_manager, time_manager){
    this.haus = haus;
    this.renderer = renderer;
    this.mode_manager = mode_manager;
    this.sound_manager = sound_manager;
    this.the_story = the_story;
    this.time_manager = time_manager;
  }

  setup(){
    this.setUpEventListeners();
    this.haus.setCurrentMap(Config.INITIAL_MAP);
    let start_screen_modes = [
      Mode.createFactory(), 
      TextDialogMode.createFactory(Config.START_SCREEN_WELCOME_TEXT, () => {
        this.sound_manager.playMusic(Config.INITIAL_MUSIC);
      })
    ]
    start_screen_modes = start_screen_modes.concat(
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
  updateRenderer(){
    this.renderer.drawMap(this.haus);
    this.renderer.updateCharacters(this.haus.getCharacters());
    this.renderer.updateItems(this.haus.getItems());
    this.renderer.updateTextDialog(this.haus.getTextDialog());
    this.renderer.updateChoiceDialog(this.haus.getChoiceDialog());
  }
  uiButtonHandlerWrapper(buttonElem, handler){
    $(buttonElem).blur();
    handler.call(this);
    this.updateRenderer();
  }
  setUpEventListeners(){
    var controller = this; 
    window.addEventListener("keydown", function(e){
      controller.mode_manager.handleKeyEvent(e.key, controller);
      controller.updateRenderer();
      e.stopPropagation();
    });
    window.addEventListener("tick", function(e){
      controller.handleTimeTickEvent();
    });
    $("#up-btn").on("click", function(){
      controller.uiButtonHandlerWrapper(this, function(){
        controller.mode_manager.handleKeyEvent(Mode.UP, controller);
      });
    });
    $("#down-btn").on("click", function(){
      controller.uiButtonHandlerWrapper(this, function(){
        controller.mode_manager.handleKeyEvent(Mode.DOWN, controller);
      });
    })
    $("#left-btn").on("click", function(){
      controller.uiButtonHandlerWrapper(this, function(){
        controller.mode_manager.handleKeyEvent(Mode.LEFT, controller);
      });
    })
    $("#right-btn").on("click", function(){
      controller.uiButtonHandlerWrapper(this, function(){
        controller.mode_manager.handleKeyEvent(Mode.RIGHT, controller);
      });
    })
    $("#select-btn").on("click", function(){
      controller.uiButtonHandlerWrapper(this, function(){
        controller.mode_manager.handleKeyEvent(Mode.SELECT, controller);
      });
    })
    $("#inventory-btn").on("click", function(){
      controller.uiButtonHandlerWrapper(this, function(){
        controller.mode_manager.handleKeyEvent(Mode.INVENTORY, controller);
      });
    })
    $("#mute-btn").on("click", function(){
      controller.uiButtonHandlerWrapper(this, controller.handleMuteButtonClickEvent);
    });
    $("#credits-btn").on("click", function(){
      controller.uiButtonHandlerWrapper(this, controller.handleCreditsButtonClickEvent);
    });
    $("#how-to-btn").on("click", function(){
      controller.uiButtonHandlerWrapper(this, controller.handleHowToButtonClickEvent);
    });
  }
  handleHowToButtonClickEvent(){
    if (this.mode_manager.modeQueueIsEmpty()){
      this.mode_manager.addModes([Mode.createFactory()]);
      const instructions = TextDialogMode.textArrayToModes(Config.HOW_TO);
      this.mode_manager.addModesAndHandleEvent(this, Mode.SELECT, instructions);
    }
  }
  handleCreditsButtonClickEvent(){
    if (this.mode_manager.modeQueueIsEmpty()){
      this.mode_manager.addModes([Mode.createFactory()]);
      const credits = TextDialogMode.textArrayToModes(Config.CREDITS);
      this.mode_manager.addModesAndHandleEvent(this, Mode.SELECT, credits);
    }
  }
  handleMuteButtonClickEvent(){
    this.sound_manager.toggleMute();
  }
  handleTimeTickEvent(){
    for(let ch of this.haus.getCharacters()){
      ch.animate(this);
    }  
    this.updateRenderer();
  }
  movePlayerLeft(){
    return this.movePlayerByOffset(-1, 0);
  }
  movePlayerRight(){
    return this.movePlayerByOffset(1, 0);
  }
  movePlayerUp(){
    return this.movePlayerByOffset(0, -1);
  }
  movePlayerDown(){
    return this.movePlayerByOffset(0, 1);
  }
  movePlayerByOffset(x_offset, y_offset){
    const map = this.haus.getCurrentMap();
    const player = this.haus.getPlayer();
    const tile_x = player.X() + x_offset;
    const tile_y = player.Y() + y_offset;
    player.setOrientationTowards(tile_x, tile_y);
    return this.movePlayer(player, new MapLocation(map.getId(), tile_x, tile_y));
  }
  movePlayer(player, map_loc){
    const tile = this.haus.getTileOnMap(map_loc.mapIndex(), map_loc.X(), map_loc.Y());
    if (tile !== undefined && 
        tile.isAccessible() && 
        this.haus.getCharacterOnMap(tile.getPortalLoc()) === undefined &&
        this.haus.getItemOnMap(tile.getPortalLoc()) === undefined
       ){
      player.setLocation(tile.getPortalLoc());
      const change_maps = this.haus.getCurrentMap().getId() !== player.mapIndex()
      if ( !player.isNPC() && change_maps){
        this.haus.setCurrentMap(player.mapIndex());
      }
      return true;
    }
    return false;
  }
  selectFacingObject(){
    const map = this.haus.getCurrentMap();
    const player = this.haus.getPlayer();
    return this.haus.getFacingObjectOnMap(map, player);
  }
  setTextDialogMessage(message){
    const dialog = this.haus.getTextDialog();
    dialog.setMessage(message);
  }
  unsetTextDialogMessage(){
    const dialog = this.haus.getTextDialog();
    dialog.unsetMessage();
  }
  setChoiceDialogLabels(labels){
    const dialog = this.haus.getChoiceDialog();
    dialog.setChoices(labels);
  }
  unsetChoiceDialogLabels(){
    const dialog = this.haus.getChoiceDialog();
    dialog.unsetChoices();
  }
  choiceDialogSelectItem(item_index){
    const dialog = this.haus.getChoiceDialog();
    dialog.selectChoice(item_index);
  }
  startGame(){
    this.renderer.hideStartScreen();
    this.renderer.showMap();
    this.sound_manager.playMusic(Labels.sounds.MAIN);
    this.time_manager.startCounter();
  }
}

$(function(){
  const the_haus = new Haus();
  const game_loader = new GameLoader(the_haus);
  const renderer = new Renderer();
  const mode_manager = new InputModeManager();
  const the_story = new Story();
  const sound_manager = new SoundManager();
  const time_manager = new TimeManager()
  const controller = new Controller(the_haus, renderer, mode_manager, the_story, sound_manager, time_manager);
  game_loader.loadGame().then(() => {
    renderer.hideLoadingImage();
    renderer.showStartScreen();
    controller.setup();
    the_story.setup(controller);
  }); 
});

