var Canvas = function(){}

Canvas.drawMap = function(map, $div){
  var table = $("<table>");
  for (var y=0; y<=map.getMaxY(); y++){
    var row = $("<tr>");
    for (var x=0; x<=map.getMaxX(); x++){
      var cell = $("<td>");
      var tile = map.getTile(x, y);
      cell.append(this.drawTile(tile, x, y));
      row.append(cell);
    }
    table.append(row);
  }
  $div.append(table);
}

Canvas.drawTile = function(tile, x, y){
  var div = $("<div class='tile' data-x='"+x+"' data-y='"+y+"'>");
  if (tile === undefined){
    div.text("#");
  }else{
    console.log(tile);
    div.text(tile.getGraphic());
  }
  return div;
}
