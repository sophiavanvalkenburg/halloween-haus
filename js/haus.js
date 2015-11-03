var Haus = function(){
  this.tiles = [
    new Tile(0, 0, true, ""),
    new Tile(0, 1, true, ""),
    new Tile(1, 0, true, ""),
    new InteractiveTile(1, 1, false, "X", ["This is an interactive tile."])
  ];
  this.map = new Map(this.tiles);
}

$(function(){
  var the_haus = new Haus();
  Canvas.drawMap(the_haus.map, $("#haus-map"));
});
