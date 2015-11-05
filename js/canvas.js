var Canvas = function(haus){
  this.$container = $("#haus-container");
  this.$main_dialog = $("#haus-main-dialog");
  this.$main_dialog_text = $("#haus-main-dialog .dialog-text");
  this.$map = $("#haus-map");
  this.haus = haus;
};
Canvas.prototype.drawMapCell = function(x, y){
  var $cell = $("<td data-x='"+x+"' data-y='"+y+"'>");
  var tile = this.haus.map.getTile(x, y);
  var ch = this.haus.map.getCharacter(x, y);
  $cell.append(this.drawTile(tile));
  $cell.append(this.drawCharacter(ch));
  return $cell;
};
Canvas.prototype.drawMap = function(){
  var $table = $("<table>");
  for (var y=0; y<=this.haus.map.getMaxY(); y++){
    var $row = $("<tr>");
    for (var x=0; x<=this.haus.map.getMaxX(); x++){
       $cell = this.drawMapCell(x, y);
       $row.append($cell);
    }
    $table.append($row);
  }
  this.$map.append($table);
};
Canvas.prototype.drawTile = function(tile){
  var $div = $("<div class='tile'>");
  var graphic_loc;
  if (tile === undefined){
    graphic_loc = "resources/images/tiles/tile-black.png";
  }else{
    graphic_loc = tile.getGraphic();
  }
  $div.append(this.createImage(graphic_loc));
  return $div;
};
Canvas.prototype.orientObject = function(obj, obj_element){
  obj_element.removeClass("orientation-right").removeClass("orientation-left").removeClass("orientation-up").removeClass("orientation-down");
  var orientation_class = this.getOrientationClass(obj.getOrientation());
  if (orientation_class !== undefined){
    obj_element.addClass(orientation_class);
  }
};
Canvas.prototype.getOrientationClass = function(orientation){
  switch(orientation){
    case MapState.UP:
      return "orientation-up";
    case MapState.DOWN:
      return "orientation-down";
    case MapState.LEFT:
      return "orientation-left";
    case MapState.RIGHT:
      return "orientation-right";
  }
};
Canvas.prototype.drawCharacter = function(character){
  if (character === undefined){
    return;
  }
  var $div = $("<div id='"+character.name+"' class='character'>"); 
  var image = this.createImage(character.getGraphic());
  $div.append(image);
  this.orientObject(character, $div);
  return $div;
};
Canvas.prototype.updateCharacter = function(character){
  if (character === undefined){
    return;
  }
  var $div = $("#"+character.name);
  var new_x = character.X();
  var new_y = character.Y();
  var $new_td = $("td[data-x='"+new_x+"'][data-y='"+new_y+"']");
  $new_td.append($div);
  this.orientObject(character, $div);
};
Canvas.prototype.updateMainDialog = function(){
  var dialog_text = this.haus.dialog;
  if (dialog_text.isActivated()){    
    this.$main_dialog.show();
    this.$main_dialog_text.text(dialog_text.getCurrentMessage());
  }else{
    this.$main_dialog.hide();
  }
};
Canvas.prototype.createImage = function(filename){
  if (filename !== undefined){
    return $("<img src='"+filename+"'/>");
  }
};
