var StoryStates = {
    INIT: "init",
    RECIEVED_COIN: "recieved-coin",
    PLACED_COIN_ON_ALTAR: "placed-coin-on-altar",
    RETURNED_TO_LIVING:   "returned-to-living"
}

var Story = function(){
  this.controller = undefined;
  this.objects = {
    COIN: "coin"
  }
  this.played_states = [ StoryStates.INIT ];
}
Story.prototype.setup = function(controller){
  this.controller = controller;
  this.setupStoryModes();
}
Story.prototype.addPlayedState = function(state){
  this.played_states.push(state);
  this.triggerStoryEvent(state);
}
Story.prototype.getPlayedGameStates = function(){
  return this.played_states;
}
Story.prototype.setupStoryModes = function(){
  var the_story = this;

  var fortune_cake_tile = this.controller.haus.getTileWithLabel(Labels.tiles.FORTUNE_CAKE);
  fortune_cake_tile.addMode(
    StoryStates.INIT,
    ChoiceDialogMode.createFactory(
      ["Yes", "No"], 
      "Oh! You found a " + Renderer.objectName("coin") + ". Take it?",
      function(controller, target_obj, selected_item){
        if (selected_item === "Yes"){
            controller.mode_manager.addModes([ 
              TextDialogMode.createFactory(
                "You received a " + Renderer.objectName("coin") + ".",
                function(){
                  the_story.addPlayedState(StoryStates.RECIEVED_COIN);
                }
              )]);
            } 
      })
  );
  fortune_cake_tile.addMode(
      StoryStates.RECIEVED_COIN,
      TextDialogMode.createFactory("You should let others try it before getting seconds ...")
  );

  var produce = this.controller.haus.getCharacterWithLabel(Labels.characters.PRODUCE);
  produce.addMode(
    StoryStates.RECIEVED_COIN,
    TextDialogMode.createCharacterTextFactory(
      Labels.character_names.PRODUCE,
      "Oh! I can't take the " + Renderer.objectName("coin") + ". Place it at the altar of the dead as an offering."
    )
  );

  var altar_tile = the_story.controller.haus.getTileWithLabel(Labels.tiles.ALTAR_NORMAL_MODE);
  altar_tile.addMode(
      StoryStates.RECIEVED_COIN,
      ChoiceDialogMode.createFactory(
        [ "Yes", "No" ],
        "Place " + Renderer.objectName("coin") + " on the altar?",
        function(controller, target_obj, selected_item){
          if (selected_item === "Yes"){
            controller.mode_manager.addModes([
              TextDialogMode.createFactory(
                "He He He ...",
                function(){
                  the_story.addPlayedState(StoryStates.PLACED_COIN_ON_ALTAR);
                }
                )
              ])
          } 
        }
      )
  );

  var ghost_altar_tile = the_story.controller.haus.getTileWithLabel(Labels.tiles.ALTAR_GHOST_MODE);
  ghost_altar_tile.addMode(
      StoryStates.INIT,
      ChoiceDialogMode.createFactory(
        [ "Yes", "No" ],
        "Return to the land of the living?",
        function(controller, target_obj, selected_item){
          if (selected_item === "Yes"){
            the_story.addPlayedState(StoryStates.RETURNED_TO_LIVING);
          } 
        }
      )
  );
}
Story.prototype.triggerStoryEvent = function(state){
  switch(state){
    case StoryStates.RECIEVED_COIN: 
        this.controller.sound_manager.playSoundEffect(Labels.sounds.GET_ITEM);
        var player = this.controller.haus.getPlayer();
        player.addToInventory(this.objects.COIN);
        break; 
    case StoryStates.PLACED_COIN_ON_ALTAR:
        var player = this.controller.haus.getPlayer();
        var next_tile = this.controller.haus.getTileWithLabel(Labels.tiles.IN_FRONT_OF_GHOST_ALTAR);
        this.controller.movePlayer(player, next_tile.getLocation());
        this.controller.sound_manager.playMusic(Labels.sounds.GHOST);
        this.controller.sound_manager.playSoundEffect(Labels.sounds.ENTER_GHOST_MODE);
        break;
    case StoryStates.RETURNED_TO_LIVING:
        var player = this.controller.haus.getPlayer();
        var next_tile = this.controller.haus.getTileWithLabel(Labels.tiles.IN_FRONT_OF_NORMAL_ALTAR);
        this.controller.movePlayer(player, next_tile.getLocation());
        this.controller.sound_manager.playMusic(Labels.sounds.MAIN);
        this.controller.sound_manager.playSoundEffect(Labels.sounds.EXIT_GHOST_MODE);
        break;
  }
}
