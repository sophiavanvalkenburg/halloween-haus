var Haus = function(){
  this.tiles = [
    new Tile(0, 0, true, ""),
    new Tile(0, 1, true, ""),
    new Tile(1, 0, true, ""),
    new InteractiveTile(1, 1, false, "X", ["This is an interactive tile."])
  ];
  this.player = new PlayerCharacter("Sophia", "S")
  this.characters = [
    this.player
  ];
  this.map = new Map(this.tiles, this.characters);
}

function setUpEventListeners(haus, canvas){
  window.addEventListener("keydown", function(e){
    switch(e.which){
      case 37:
        haus.player.moveTo(haus.map, haus.player.X() - 1, haus.player.Y());
        break;
      case 38:
        haus.player.moveTo(haus.map, haus.player.X(), haus.player.Y() - 1);
        break;
      case 39:
        haus.player.moveTo(haus.map, haus.player.X() + 1, haus.player.Y());
        break;
      case 40:
        haus.player.moveTo(haus.map, haus.player.X(), haus.player.Y() + 1);
        break;
      case 88:
        console.log(haus.player.name, "X button");
        break;
      case 90:
        //var facing_obj = haus.map.getFacingObject(haus.player);
        console.log(haus.player.name, "Z button");
        break;
      default:
        console.log(haus.player.name, "do nothing");
    }
    canvas.updateCharacter(haus.player);
  });
}

$(function(){
  var the_haus = new Haus();
  var canvas = new Canvas(the_haus.map, $("#haus-map"));
  setUpEventListeners(the_haus, canvas);
  canvas.drawMap(the_haus.map, $("#haus-map"));
});
