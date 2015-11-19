var Story = new function(controller){
  this.controller = controller;
  this.objects = {
    COIN: "coin"
  }
}
Story.prototype.receiveCoinFromFountain = function(){
  var player = this.controller.haus.getPlayer();
  player.addToInventory(this.objects.COIN);
}

Story.prototype.movePlayerAfterReceivingCoin = function(){
  var player = this.controller.haus.getPlayer();
  var next_map = this.controller.haus.getMap(0);
  var next_tile = next_map.getTile(10, 7);
  player.moveTo(next_tile);
}

Story.prototype.placeCoinOnKitchenTable = function(){
  var player = this.controller.haus.getPlayer();
  player.removeFromInventory(StoryObjects.COIN);
}
