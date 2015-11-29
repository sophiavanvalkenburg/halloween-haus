var StoryStates = {
    INIT: "init",
    PLAYER_RECIEVED_COIN: "player-recieved-coin",
    PLAYER_PLACED_COIN_ON_KITCHEN_TABLE: "player-placed-coin-on-kitchen-table"
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

  var fountain_tile = this.controller.haus.getTileWithLabel(Labels.tiles.FOUNTAIN);
  fountain_tile.addMode(
    StoryStates.INIT,
    ChoiceDialogMode.createFactory(
      ["Yes", "No"], 
      "Look! There's a " + Renderer.objectName("coin") + ". Take it?",
      function(controller, target_obj, selected_item){
        if (selected_item === "Yes"){
            controller.mode_manager.addModes([ 
              TextDialogMode.createFactory(
                "You received a " + Renderer.objectName("coin") + ".",
                function(){
                  the_story.addPlayedState(StoryStates.PLAYER_RECIEVED_COIN);
                }
              )]);
            } 
      })
  );
  fountain_tile.addMode(
      StoryStates.PLAYER_RECIEVED_COIN,
      TextDialogMode.createFactory("This fountain looks like it hasn't been used for a long time...")
  );

  var table_tile = the_story.controller.haus.getTileWithLabel(Labels.tiles.KITCHEN_TABLE);
  table_tile.addMode(
      StoryStates.PLAYER_RECIEVED_COIN,
      ChoiceDialogMode.createFactory(
        ["Yes", "No"], 
        "Place " + Renderer.objectName("coin") + " on table?",
        function(controller, target_obj, selected_item){
          if (selected_item === "Yes"){
              the_story.addPlayedState(StoryStates.PLAYER_PLACED_COIN_ON_KITCHEN_TABLE);
          } 
        })
  );
  table_tile.addMode(StoryStates.PLAYER_PLACED_COIN_ON_KITCHEN_TABLE, undefined)

  var cat = this.controller.haus.getCharacterWithName(Labels.characters.CALICO);
  cat.addMode(
    StoryStates.PLAYER_PLACED_COIN_ON_KITCHEN_TABLE,
    TextDialogMode.createCharacterTextFactory(Labels.characters.CALICO, "Purr...")
  );
}
Story.prototype.triggerStoryEvent = function(state){
  switch(state){
    case StoryStates.PLAYER_RECIEVED_COIN: 
        var player = this.controller.haus.getPlayer();
        player.addToInventory(this.objects.COIN);
        var next_tile = this.controller.haus.getTileWithLabel(Labels.tiles.MOVE_TILE);
        this.controller.movePlayer(player, next_tile.getLocation());
        break; 
    case StoryStates.PLAYER_PLACED_COIN_ON_KITCHEN_TABLE:
        var player = this.controller.haus.getPlayer();
        player.removeFromInventory(this.objects.COIN);
        break;
  }
}
