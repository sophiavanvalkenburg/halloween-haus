var StoryEvent = new function(name, event_fn){
  this.event_fn = event_fn;
  this.name = name; 
}
StoryEvent.prototype.trigger = function(){
  this.event_fn();
}

var Story = new function(controller){
  this.controller = controller;
  this.objects = {
    COIN: "coin"
  }
  this.setupStoryEvents();
}
Story.prototype.setupStoryEvents = function(){
  var controller = this.controller;
  var objects = this.objects;
  this.events = {

    receiveCoinFromFountain: 
    new StoryEvent("receive-coin-from-fountain",
      function(){
        var player = controller.haus.getPlayer();
        player.addToInventory(objects.COIN);
      }),

    movePlayerAfterReceivingCoin:
    new StoryEvent("move-player-after-receiving-coin",
      function(){
        var player = controller.haus.getPlayer();
        var next_map = controller.haus.getMap(0);
        var next_tile = next_map.getTile(10, 7);
        player.moveTo(next_tile);
      }),   

    placeCoinOnKitchenTable:
    new StoryEvent("place-coin-on-kitchen-table",
      function(){
        var player = controller.haus.getPlayer();
        player.removeFromInventory(objects.COIN);
      })

  }
}
