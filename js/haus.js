var Haus = function(){
  var tiles = [
    new Tile(new MapLocation(0, 0, 0), undefined, true, ""),
    new Tile(new MapLocation(0, 0, 1), undefined, true, ""),
    new Tile(new MapLocation(0, 1, 0), undefined, true, ""),
    new Tile(new MapLocation(0, 2, 0), undefined, true, ""),
    new Tile(new MapLocation(0, 2, 1), undefined, false, "resources/images/tiles/fuschia-flower.png"),
    new Tile(new MapLocation(0, 2, 5), undefined, true, ""),
    new Tile(new MapLocation(0, 2, 6), undefined, true, ""),
    new Tile(new MapLocation(0, 2, 7), new MapLocation(1, 5, 4), true, "resources/images/tiles/portal.png"),
    new Tile(new MapLocation(0, 3, 0), undefined, true, ""),
    new Tile(new MapLocation(0, 3, 1), undefined, true, ""),
    new Tile(new MapLocation(0, 4, 1), undefined, true, ""),
    new Tile(new MapLocation(0, 4, 2), undefined, true, ""),
    new Tile(new MapLocation(0, 5, 2), undefined, true, ""),
    new Tile(new MapLocation(0, 6, 2), undefined, true, ""),
    new Tile(new MapLocation(0, 7, 2), undefined, true, ""),
    new Tile(new MapLocation(0, 0, 2), undefined, true, ""),
    new InteractiveTile(
        new MapLocation(0, 8, 2), undefined, false, "resources/images/tiles/tile-red.png", 
        [ 
          TextDialogMode.createFactory(["This is an interactive tile.", "This is the next message."])
        ]
    ),
    new Tile(new MapLocation(0, 0, 3), undefined, true, ""),
    new Tile(new MapLocation(0, 1, 3), undefined, true, ""),
    new Tile(new MapLocation(0, 2, 3), undefined, true, ""),
    new Tile(new MapLocation(0, 2, 4), undefined, true, ""),
    new Tile(new MapLocation(0, 3, 4), undefined, true, ""),
    new Tile(new MapLocation(0, 4, 4), undefined, true, ""),
    new Tile(new MapLocation(0, 5, 4), undefined, true, ""),
    new Tile(new MapLocation(0, 0, 7), undefined, false, "resources/images/tiles/tile-black.png"),
    new Tile(new MapLocation(0, 11, 0), undefined, false, "resources/images/tiles/tile-black.png"),
    new InteractiveTile(
        new MapLocation(0, 6, 4), undefined, false, "resources/images/tiles/tile-blue.png", 
        [
            TextDialogMode.createFactory(["I'm also an interactive tile."]),
            ChoiceDialogMode.createFactory(["Yes", "Maybe", "No"], "Do you like me?", function(controller, action_handler, selected_item){
                if (selected_item === "Yes"){
                    action_handler.addModes([ TextDialogMode.createFactory(["You're making me blush!"])]);
                } else if (selected_item === "No"){
                    action_handler.addModes([ TextDialogMode.createFactory(["Well I don't like you either."])]);
                } else {
                    action_handler.addModes([ TextDialogMode.createFactory(["Ummm... Okay."])]);
                }
            })
        ]
   ),  
    new Tile(new MapLocation(1, 0, 7), undefined, false, "resources/images/tiles/tile-black.png"),
    new Tile(new MapLocation(1, 11, 0), undefined, false, "resources/images/tiles/tile-black.png"),
    new Tile(new MapLocation(1, 5, 3), new MapLocation(0, 2, 6), true, "resources/images/tiles/portal.png"),
    new Tile(new MapLocation(1, 5, 4), undefined, true, ""),
    new Tile(new MapLocation(1, 5, 5), undefined, true, "")
  ];
  this.player = new PlayerCharacter("Sophia", "resources/images/characters/player-test.png", 0);
  this.characters = [ this.player ];
  this.num_characters = this.characters.length;
  this.maps = [
    new MapState(0, tiles),
    new MapState(1, tiles)
  ];
  this.interacting_obj = undefined;
  this.text_dialog = new TextDialog();
  this.choice_dialog = new ChoiceDialog();
  this.current_map = -1;
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
Haus.prototype.getTextDialog = function(){
  return this.text_dialog;
};
Haus.prototype.getChoiceDialog = function(){
  return this.choice_dialog;
}
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
