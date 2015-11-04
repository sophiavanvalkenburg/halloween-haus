var Canvas = function(haus){
  this.$container = $("#haus-container");
  this.$main_dialog = $("#haus-main-dialog");
  this.$main_dialog_text = $("#haus-main-dialog .dialog-text");
  this.$map = $("#haus-map");
  this.haus = haus;
}
Canvas.prototype.drawMap = function(){
  var $table = $("<table>");
  for (var y=0; y<=this.haus.map.getMaxY(); y++){
    var $row = $("<tr>");
    for (var x=0; x<=this.haus.map.getMaxX(); x++){
      var $cell = $("<td data-x='"+x+"' data-y='"+y+"'>");

      var tile = this.haus.map.getTile(x, y);
      var ch = this.haus.map.getCharacter(x, y);
      $cell.append(this.drawTile(tile));
      $cell.append(this.drawCharacter(ch));
      $row.append($cell);
    }
    $table.append($row);
  }
  this.$map.append($table);
}
Canvas.prototype.drawTile = function(tile){
  var $div = $("<div class='tile'>");
  if (tile === undefined){
    $div.text("#");
  }else{
    $div.text(tile.getGraphic());
  }
  return $div;
}
Canvas.prototype.drawCharacter = function(character){
  if (character === undefined){
    return;
  }
  var $div = $("<div id='"+character.name+"' class='character'>"); 
  $div.text(character.getGraphic());
  return $div;
}
Canvas.prototype.updateCharacter = function(character){
  if (character === undefined){
    return;
  }
  var $div = $("#"+character.name);
  var new_x = character.X();
  var new_y = character.Y();
  var $new_td = $("td[data-x='"+new_x+"'][data-y='"+new_y+"']");
  $new_td.append($div);
}
Canvas.prototype.updateMainDialog = function(){
  var dialog_text = this.haus.dialog;
  if (dialog_text.isActivated()){    
    this.$main_dialog.show();
    this.$main_dialog_text.text(dialog_text.getCurrentMessage());
  }else{
    this.$main_dialog.hide();
  }
}
