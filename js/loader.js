var GameLoader = function(haus){
  this.haus = haus;
  this.load_jobs = 0;
  this.preloaded_graphics = [];
}
GameLoader.prototype.loadGame = function(callback){
  this.preloadGraphicsFromList();
  this.preloadMapObjects(Config.characters);
  var mapfile_list = Config.mapfiles;
  for (var i = 0; i<mapfile_list.length; i++){
    this.startLoadMap(mapfile_list[i], callback);
  } 
}
GameLoader.prototype.startLoadMap = function(file, callback){
  this.load_jobs++;
  the_loader = this;
  $.getJSON(file, function(json){
    the_loader.loadMap(json);
    the_loader.load_jobs--;
    if (the_loader.load_jobs === 0){
      callback();
    }
  });
}
GameLoader.prototype.convertToInt = function(str){
  var new_int = parseInt(str);
  if (isNaN(new_int)){
    return -1;
  }
  return new_int;
}
GameLoader.prototype.makeTileImageSrc = function(src){
  var png = src.split("/").slice(-1)[0];
  return "resources/images/tiles/"+png;
}
GameLoader.prototype.parseMetaData = function(data){
  if (data === undefined || data.meta === undefined){
    return;
  }
  var res = this.convertToInt(data.meta.resolution);
  var cols = this.convertToInt(data.meta.num_columns);
  var rows = this.convertToInt(data.meta.num_rows);
  var map = this.convertToInt(data.meta.map_id);
  if (res === -1 || cols === -1 || rows === -1 || map === -1){
    return;
  }
  return {resolution: res, num_columns: cols, num_rows: rows, map_id: map};
}
GameLoader.prototype.makeMapLocation = function(loc){
  if (loc === undefined){
    return;
  }
  var map = this.convertToInt(loc.map);
  var x = this.convertToInt(loc.x);
  var y = this.convertToInt(loc.y);
  if (map === -1 || x === -1 || y === -1){
    return;
  }
  return new MapLocation(map, x, y);
}
GameLoader.prototype.makeTileModes = function(tile_data){
  if (tile_data.messages.length > 0){
    return [
            {
              state: StoryStates.INIT,
              modes: [TextDialogMode.createFactory(tile_data.messages)]
            }
        ];
  } else {
    return [];
  }
}
GameLoader.prototype.parseTileData = function(tile_data){
  var loc = this.makeMapLocation(tile_data.loc);
  var portal = this.makeMapLocation(tile_data.portal);
  var img_src = this.makeTileImageSrc(tile_data.graphic);
  var modes = this.makeTileModes(tile_data);
  return new Tile(tile_data.label, loc, portal, tile_data.is_accessible, img_src, modes);
}
GameLoader.prototype.loadMap = function(data){
  var meta = this.parseMetaData(data);
  if (meta === undefined){
    return;
  }
  var tiles = [];
  for (var i=0; i<data.tiles.length; i++){
    tiles.push(this.parseTileData(data.tiles[i]));
  }
  this.preloadMapObjects(tiles);
  this.haus.addMap( new MapState(meta.map_id, tiles));
}
GameLoader.prototype.preloadMapObjects = function(objs){
  for (var i=0; i<objs.length; i++){
    var src = objs[i].getGraphic();
    this.preloadGraphic(src);
  }
}
GameLoader.prototype.preloadGraphicsFromList = function(){
  for (var i=0; i<Config.preload.length; i++){
    this.preloadGraphic(Config.preload[i]);
  }
}
GameLoader.prototype.preloadGraphic = function(url){
  if (Config.DEBUG === true){
    return;
  }
  var graphic = new Image();
  graphic.src = url;
  this.preloaded_graphics.push(graphic);
}
  
