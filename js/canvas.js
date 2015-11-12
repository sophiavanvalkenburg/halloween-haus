var Canvas = function(){
  this.$container = $("#haus-container");
  this.$text_dialog = $("#haus-main-dialog");
  this.$text_dialog_text = $("#haus-main-dialog .dialog-text");
  this.$choice_dialog = $("#haus-choice-dialog");
  this.$map = $("#haus-map");
  this.current_map_index = -1;
};
Canvas.prototype.drawMapCell = function(haus, map, map_loc){
  var x = map_loc.X();
  var y = map_loc.Y();
  var $cell = $("<td data-x='"+x+"' data-y='"+y+"'>");
  var tile = map.getTile(x, y);
  var ch = haus.getCharacterOnMap(map_loc);
  $cell.append(this.drawTile(tile));
  $cell.append(this.drawCharacter(ch));
  return $cell;
};
Canvas.prototype.clearMap = function(){
  this.$map.html("");
}
Canvas.prototype.drawMap = function(haus){
  var map = haus.getCurrentMap();
  if (map.getId() === this.current_map_index){
    return;
  }
  this.current_map_index = map.getId();
  this.clearMap();
  var $table = $("<table>");
  for (var y=0; y<=map.getMaxY(); y++){
    var $row = $("<tr>");
    for (var x=0; x<=map.getMaxX(); x++){
       var map_loc = new MapLocation(map.getId(), x, y)
       $cell = this.drawMapCell(haus, map, map_loc);
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
Canvas.prototype.updateTextDialog = function(text_dialog){
  if (text_dialog.hasMessage()){
    this.$text_dialog_text.text(text_dialog.getMessage());
    this.$text_dialog.show();
  }else{
    this.$text_dialog.hide();
    this.$text_dialog_text.text("");
  }
};
Canvas.prototype.drawChoiceList = function(choice_labels, selected_label){
  var $selected_icon = ">";
  var $table = $("<table>");
  for (var i=0; i<choice_labels.length; i++){
    var $choice_row = $("<tr>");
    var label = choice_labels[i];
    $icon = label === selected_label ? $selected_icon : undefined;
    $choice_row.append($("<td>").append($icon));
    $choice_row.append($("<td>"+label+"</td>"));
    $table.append($choice_row);
  }
  this.$choice_dialog.html("");
  this.$choice_dialog.append($table);
}
Canvas.prototype.updateChoiceDialog = function(choice_dialog){
  if (choice_dialog.hasChoices()){
    var choice_labels = choice_dialog.getChoiceLabels();
    this.drawChoiceList(choice_labels, choice_dialog.getSelectedLabel());
    this.$choice_dialog.css('display', 'inline-block');
  }else{
    this.$choice_dialog.hide();
    this.$choice_dialog.html("");
  }
}
Canvas.prototype.createImage = function(filename){
  if (filename !== undefined){
    return $("<img src='"+filename+"'/>");
  }
};
