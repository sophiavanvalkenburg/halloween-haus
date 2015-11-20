var MapLoader = function(haus){
  this.haus = haus;
  this.load_jobs = 0;
}
MapLoader.prototype.loadAllMaps = function(mapfile_list, callback){
  for (var i = 0; i<mapfile_list.length; i++){
    this.startLoadMap(mapfile_list[i], callback);
  }
}
MapLoader.prototype.startLoadMap = function(file, callback){
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
MapLoader.prototype.convertToInt = function(str){
  var new_int = parseInt(str);
  if (isNaN(new_int)){
    return -1;
  }
  return new_int;
}
MapLoader.prototype.makeTileImageSrc = function(src){
  var png = src.split("/").slice(-1)[0];
  return "resources/images/tiles/"+png;
}
MapLoader.prototype.parseMetaData = function(data){
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
MapLoader.prototype.makeMapLocation = function(loc){
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
MapLoader.prototype.makeTileModes = function(tile_data){
  if (tile_data.messages.length > 0){
    return [
        TextDialogMode.createFactory(tile_data.messages)
      ];
  } else {
    return [];
  }
}
MapLoader.prototype.parseTileData = function(tile_data){
  var loc = this.makeMapLocation(tile_data.loc);
  var portal = this.makeMapLocation(tile_data.portal);
  var img_src = this.makeTileImageSrc(tile_data.graphic);
  var modes = this.makeTileModes(tile_data);
  return new Tile(loc, portal, tile_data.is_accessible, img_src, modes);
}
MapLoader.prototype.loadMap = function(data){
  var meta = this.parseMetaData(data);
  if (meta === undefined){
    return;
  }
  var tiles = [];
  for (var i=0; i<data.tiles.length; i++){
    tiles.push(this.parseTileData(data.tiles[i]));
  }
  this.haus.addMap( new MapState(meta.map_id, tiles) );
}
  
