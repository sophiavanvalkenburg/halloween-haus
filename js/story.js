var StoryStates = {
    INIT: "init",
    PLAYER_RECIEVED_COIN: "player-recieved-coin",
    PLAYER_PLACED_COIN_ON_KITCHEN_TABLE: "player-placed-coin-on-kitchen-table"
}

var Story = function(controller){
  this.controller = controller;
  this.objects = {
    COIN: "coin"
  }
  this.events = {};
}
Story.prototype.setup = function(){
  this.setupStoryModes();
}
Story.prototype.setCurrentGameState = function(state){
  this.controller.haus.setCurrentGameState(state);
  this.triggerStoryEvent(state);
}
Story.prototype.setupStoryModes = function(){
  var the_story = this;

  var fountain_tile = this.controller.haus.getTileOnMap(7, 5, 5);
  fountain_tile.addMode(
    StoryStates.INIT,
    ChoiceDialogMode.createFactory(
      ["Yes", "No"], 
      "Look! There's a coin. Take it?",
      function(controller, mode_manager, selected_item){
        if (selected_item === "Yes"){
            mode_manager.addModes([ 
              TextDialogMode.createFactory(
                ["You received a COIN."],
                function(){
                  the_story.setCurrentGameState(StoryStates.PLAYER_RECIEVED_COIN);
                }
              )]);
            } 
      })
  );

  var table_tile = the_story.controller.haus.getTileOnMap(11, 7, 8);
  table_tile.addMode(
    StoryStates.PLAYER_RECIEVED_COIN,
    ChoiceDialogMode.createFactory(
      ["Yes", "No"], 
      "Place coin on table?",
      function(controller, mode_manager, selected_item){
        if (selected_item === "Yes"){
            the_story.setCurrentGameState(StoryStates.PLAYER_PLACED_COIN_ON_KITCHEN_TABLE);
        } 
      })
  );
}
Story.prototype.triggerStoryEvent = function(state){
  switch(state){
    case StoryStates.PLAYER_RECIEVED_COIN: 
        var player = this.controller.haus.getPlayer();
        player.addToInventory(this.objects.COIN);
        var tile = this.controller.haus.getTileOnMap(0, 10, 7);
        player.setLocation(tile.getPortalLoc());
        this.controller.haus.setCurrentMap(player.mapIndex());
        break; 
    case StoryStates.PLAYER_PLACED_COIN_ON_KITCHEN_TABLE:
        var player = this.controller.haus.getPlayer();
        console.log(player.hasItem(this.objects.COIN));
        player.removeFromInventory(this.objects.COIN);
        console.log(player.hasItem(this.objects.COIN));
        break;
  }
}
