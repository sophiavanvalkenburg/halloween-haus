var StoryEvent = function(name, event_fn){
  this.event_fn = event_fn;
  this.name = name; 
}
StoryEvent.prototype.trigger = function(){
  this.event_fn();
}

var Story = function(controller){
  this.controller = controller;
  this.objects = {
    COIN: "coin"
  }
  this.events = {};
}
Story.prototype.setup = function(){
  this.setupStoryEvents();
  this.setupStoryModes();
}
Story.prototype.triggerEvent = function(event){
  event.trigger();
}
Story.prototype.setupStoryModes = function(){
  var the_story = this;
  var map7 = this.controller.haus.getMap(7);
  var fountain_tile = map7.getTile(5, 5);
  fountain_tile.addMode(
    ChoiceDialogMode.createFactory(
      ["Yes", "No"], 
      "Look! There's a coin. Take it?",
      function(controller, mode_manager, selected_item){
        if (selected_item === "Yes"){
            the_story.triggerEvent(the_story.events.receiveCoinFromFountain);
        } 
      })
  )
}
Story.prototype.setupStoryEvents = function(){
  var the_story = this;
  this.events = {

    receiveCoinFromFountain: 
    new StoryEvent("receive-coin-from-fountain",
      function(){
        the_story.controller.mode_manager.addModes([ 
          TextDialogMode.createFactory(
            ["You received a COIN."],
            function(){
              the_story.triggerEvent(the_story.events.movePlayerAfterReceivingCoin);              
            }
        )]);
        var player = the_story.controller.haus.getPlayer();
        player.addToInventory(the_story.objects.COIN);

        var map11 = the_story.controller.haus.getMap(11);
        var table_tile = map11.getTile(7, 8);
        table_tile.addMode(
            ChoiceDialogMode.createFactory(
              ["Yes", "No"], 
              "Place coin on table?",
              function(controller, mode_manager, selected_item){
                if (selected_item === "Yes"){
                    the_story.triggerEvent(the_story.events.placeCoinOnKitchenTable);
                } 
              })
          );
      }),

    movePlayerAfterReceivingCoin:
    new StoryEvent("move-player-after-receiving-coin",
      function(){
        var player = the_story.controller.haus.getPlayer();
        var map0 = the_story.controller.haus.getMap(0);
        var tile = map0.getTile(10, 7);
        player.moveTo(tile);
        the_story.controller.haus.setCurrentMap(player.mapIndex());
      }),

    placeCoinOnKitchenTable:
    new StoryEvent("place-coin-on-kitchen-table",
      function(){
        var player = the_story.controller.haus.getPlayer();
        player.removeFromInventory(the_story.objects.COIN);
      })

  }
}
