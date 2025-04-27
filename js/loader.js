class GameLoader{
  
  #haus;
  #preloaded_graphics;
  #load_jobs;

  constructor(haus){
    this.#haus = haus;
    this.#load_jobs = 0;
    this.#preloaded_graphics = [];
  }

  static convertToInt(str){
    const new_int = parseInt(str);
    if (isNaN(new_int)){
      return -1;
    }
    return new_int;
  }
  static makeTileImageSrc(src){
    const png = src.split("/").slice(-1)[0];
    return `resources/images/tiles/${png}`;
  }
  static makeMapLocation(loc){
    if (loc === undefined){
      return;
    }
    const map = GameLoader.convertToInt(loc.map);
    const x = GameLoader.convertToInt(loc.x);
    const y = GameLoader.convertToInt(loc.y);
    if (map === -1 || x === -1 || y === -1){
      return;
    }
    return new MapLocation(map, x, y);
  }
  static makeTileModes(tile_data){
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
  static parseTileData(tile_data){
    const loc = GameLoader.makeMapLocation(tile_data.loc);
    const portal = GameLoader.makeMapLocation(tile_data.portal);
    const img_src = GameLoader.makeTileImageSrc(tile_data.graphic);
    const modes = GameLoader.makeTileModes(tile_data);
    return new Tile(tile_data.label, loc, portal, tile_data.is_accessible, img_src, modes);
  }
  static parseMetaData(data){
    if (data === undefined || data.meta === undefined){
      return;
    }
    const res = GameLoader.convertToInt(data.meta.resolution);
    const cols = GameLoader.convertToInt(data.meta.num_columns);
    const rows = GameLoader.convertToInt(data.meta.num_rows);
    const map = GameLoader.convertToInt(data.meta.map_id);
    if (res === -1 || cols === -1 || rows === -1 || map === -1){
      return;
    }
    return {resolution: res, num_columns: cols, num_rows: rows, map_id: map, is_ghost_map: data.meta.is_ghost_map};
  }

  loadGame(callback){
    this.preloadGraphicsFromList();
    this.preloadMapObjects(Config.characters);
    for (let mapfile of Config.mapfiles){
      this.startLoadMap(mapfile, callback);
    } 
  }
  startLoadMap(file, callback){
    this.#load_jobs++;
    $.getJSON(file, (json) => {
      this.loadMap(json);
      this.#load_jobs--;
      if (this.#load_jobs === 0){
        callback();
      }
    });
  }
  loadMap(data){
    const meta = GameLoader.parseMetaData(data);
    if (meta === undefined){
      return;
    }
    const tiles = [];
    for (let tile of data.tiles){
      tiles.push(GameLoader.parseTileData(tile));
    }
    //this.preloadMapObjects(tiles);
    this.#haus.addMap( new MapState(meta.map_id, tiles, meta.is_ghost_map));
  }
  preloadMapObjects(objs){
    for (let obj of objs){
      const src = obj.getGraphic();
      this.preloadGraphic(src);
    }
  }
  preloadGraphicsFromList(){
    for (let url of Config.preload){
      this.preloadGraphic(url);
    }
  }
  preloadGraphic(url){
    if (Config.DEBUG === true){
      return;
    }
    const graphic = new Image();
    graphic.src = url;
    this.#preloaded_graphics.push(graphic);
  }
  
}