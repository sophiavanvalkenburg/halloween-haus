var Haus = function(){
  this.map1_tiles = [
    new Tile(0, 0, true, ""),
    new Tile(0, 1, true, ""),
    new Tile(1, 0, true, ""),
    new Tile(2, 0, true, ""),
    new Tile(2, 1, false, "resources/images/tiles/fuschia-flower.png"),
    new Tile(2, 5, true, ""),
    new Tile(2, 6, true, ""),
    new PortalTile(2, 7, undefined, "resources/images/tiles/portal.png"),
    new Tile(3, 0, true, ""),
    new Tile(3, 1, true, ""),
    new Tile(4, 1, true, ""),
    new Tile(4, 2, true, ""),
    new Tile(5, 2, true, ""),
    new Tile(6, 2, true, ""),
    new Tile(7, 2, true, ""),
    new Tile(0, 2, true, ""),
    new InteractiveTile(8, 2, false, "resources/images/tiles/tile-red.png", ["This is an interactive tile.", "This is the next message."]),
    new Tile(0, 3, true, ""),
    new Tile(1, 3, true, ""),
    new Tile(2, 3, true, ""),
    new Tile(2, 4, true, ""),
    new Tile(3, 4, true, ""),
    new Tile(4, 4, true, ""),
    new Tile(5, 4, true, ""),
    new Tile(0, 7, false, "resources/images/tiles/tile-black.png"),
    new Tile(11, 0, false, "resources/images/tiles/tile-black.png"),
    new InteractiveTile(6, 4, false, "resources/images/tiles/tile-blue.png", ["I'm also an interactive tile."])
  ];
  this.map2_tiles = [
    new Tile(0, 7, false, "resources/images/tiles/tile-black.png"),
    new Tile(11, 0, false, "resources/images/tiles/tile-black.png"),
    new PortalTile(5, 3, undefined, "resources/images/tiles/tile-portal.png"),
    new Tile(5, 4, true, "")
  ];
  this.player = new PlayerCharacter("Sophia", "resources/images/characters/player-test.png");
  this.map1_characters = [
    this.player
  ];
  this.map = new MapState(this.map1_tiles, this.map1_characters);
  this.map2 = new MapState(this.map2_tiles, []);
  this.interacting_obj = undefined;
  this.dialog = new DialogText();
};
Haus.prototype.executeInteractHandler = function(){
  if (this.interacting_obj === undefined){
    var facing_obj = this.map.getFacingObject(this.player);
    if (facing_obj !== undefined && 
        facing_obj.interactAction !== undefined){
      this.interacting_obj = facing_obj;
      this.interacting_obj.interactAction(this);
    }
  }else{
    this.interacting_obj.interactAction(this);
  }
};
Haus.prototype.executeMovementHandler = function(x, y, canvas){
  if (this.interacting_obj === undefined){
    this.player.moveTo(this.map, x, y);
    canvas.updateCharacter(this.player);
  }
};
Haus.prototype.setInteractingObject = function(new_obj){
  this.interacting_obj = new_obj;
};
Haus.prototype.unsetInteractingObject = function(){
  this.interacting_obj = undefined;
};

function setUpEventListeners(haus, canvas){
  window.addEventListener("keydown", function(e){
    switch(e.which){
      case 37:
        haus.executeMovementHandler(haus.player.X() - 1, haus.player.Y(), canvas);
        break;
      case 38:
        haus.executeMovementHandler(haus.player.X(), haus.player.Y() - 1, canvas);
        break;
      case 39:
        haus.executeMovementHandler(haus.player.X() + 1, haus.player.Y(), canvas);
        break;
      case 40:
        haus.executeMovementHandler(haus.player.X(), haus.player.Y() + 1, canvas);
        break;
      case 88:
        console.log(haus.player.name, "X button");
        break;
      case 90:
        haus.executeInteractHandler();
        canvas.updateMainDialog();
        break;
      default:
        console.log(haus.player.name, "do nothing");
    }
  });
}

$(function(){
  var the_haus = new Haus();
  var canvas = new Canvas(the_haus);
  setUpEventListeners(the_haus, canvas);
  canvas.drawMap();
});
