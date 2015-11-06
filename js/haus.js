var Haus = function(){
  var map0_tiles = [
    new Tile(0, 0, true, ""),
    new Tile(0, 1, true, ""),
    new Tile(1, 0, true, ""),
    new Tile(2, 0, true, ""),
    new Tile(2, 1, false, "resources/images/tiles/fuschia-flower.png"),
    new Tile(2, 5, true, ""),
    new Tile(2, 6, true, ""),
    new PortalTile(2, 7, new MapLocation(1, 5, 4), "resources/images/tiles/portal.png"),
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
  var map1_tiles = [
    new Tile(0, 7, false, "resources/images/tiles/tile-black.png"),
    new Tile(11, 0, false, "resources/images/tiles/tile-black.png"),
    new PortalTile(5, 3, new MapLocation(0, 2, 6), "resources/images/tiles/portal.png"),
    new Tile(5, 4, true, ""),
    new Tile(5, 5, true, "")
  ];
  this.player = new PlayerCharacter("Sophia", "resources/images/characters/player-test.png", 0);
  this.characters = [ this.player ];
  this.num_characters = this.characters.length;
  this.maps = [
    new MapState(0, map0_tiles),
    new MapState(1, map1_tiles)
  ];
  this.interacting_obj = undefined;
  this.main_dialog = new DialogText();
  this.current_map = 0;
};
Haus.prototype.getCurrentMap = function(){
  return this.getMap(this.current_map);
};
Haus.prototype.setCurrentMap = function(map_index){
  this.current_map = map_index;
};
Haus.prototype.getMap = function(map_index){
  return this.maps[map_index];
};
Haus.prototype.getPlayer = function(){
  return this.player;
};
Haus.prototype.getMainDialog = function(){
  return this.main_dialog;
};
Haus.prototype.getInteractingObject = function(){
  return this.interacting_obj;
};
Haus.prototype.setInteractingObject = function(obj){
  this.interacting_obj = obj;
};
Haus.prototype.unsetInteractingObject = function(){
  this.interacting_obj = undefined;
};
Haus.prototype.getCharacterOnMap = function(map_loc){
  // don't store a character grid because it's very sparse
  for (var i=0; i<this.num_characters; i++){
    var ch = this.characters[i];
    if (ch.mapIndex() == map_loc.mapIndex() && 
        ch.X() === map_loc.X() && ch.Y() === map_loc.Y()){
      return ch;
    }
  }
};
Haus.prototype.getFacingObjectOnMap = function(map, character){
  if (map.getId() !== character.mapIndex()){
    return undefined;
  }
  var facing_loc = character.getFacingLocation();
  var facing_obj = this.getCharacterOnMap(facing_loc);
  if (facing_obj === undefined){    
    facing_obj = map.getTile(facing_loc.X(), facing_loc.Y());
  }
  return facing_obj;
};
