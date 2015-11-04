var Haus = function(){
  this.tiles = [
    new Tile(0, 0, true, ""),
    new Tile(0, 1, true, ""),
    new Tile(1, 0, true, ""),
    new InteractiveTile(1, 1, false, "X", ["This is an interactive tile.", "This is the next message."])
  ];
  this.player = new PlayerCharacter("Sophia", "S")
  this.characters = [
    this.player
  ];
  this.map = new Map(this.tiles, this.characters);
  this.interacting_obj;
  this.dialog = new DialogText();
}
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
}
Haus.prototype.executeMovementHandler = function(x, y, canvas){
  if (this.interacting_obj === undefined){
    this.player.moveTo(this.map, x, y);
    canvas.updateCharacter(this.player);
  }
}
Haus.prototype.setInteractingObject = function(new_obj){
  this.interacting_obj = new_obj;
}
Haus.prototype.unsetInteractingObject = function(){
  this.interacting_obj = undefined;
}

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
