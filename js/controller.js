var Controller = function(haus, canvas, action_handler){
  this.haus = haus;
  this.canvas = canvas;
  this.action_handler = action_handler;
};
Controller.prototype.setup = function(){
  this.setUpEventListener();
  this.canvas.drawMap(this.haus);
};
Controller.prototype.updateCanvas = function(){
  this.canvas.updateCharacter(this.haus.getPlayer());
  //this.canvas.updateMainDialog(this.haus.getMainDialog());
};
Controller.prototype.setUpEventListener = function(){
  var controller = this; 
  window.addEventListener("keydown", function(e){
    controller.action_handler.handleKeyEvent(e.which, controller);
    controller.updateCanvas();
  });
};
Controller.prototype.movePlayerLeft = function(){
  this.movePlayer(-1, 0);
}
Controller.prototype.movePlayerRight = function(){
  this.movePlayer(1, 0);
}
Controller.prototype.movePlayerUp = function(){
  this.movePlayer(0, -1);
}
Controller.prototype.movePlayerDown = function(){
  this.movePlayer(0, 1);
}
Controller.prototype.movePlayer = function(x_offset, y_offset){
  var map = this.haus.getCurrentMap();
  var player = this.haus.getPlayer();
  var new_x = player.X() + x_offset;
  var new_y = player.Y() + y_offset;
  player.moveTo(map, new MapLocation(map.getId(), new_x, new_y));
}
Controller.prototype.selectObject = function(){
  var map = this.haus.getCurrentMap();
  var player = this.haus.getPlayer();
  var facing_obj = this.haus.getFacingObjectOnMap(map, player);
}


$(function(){
  var the_haus = new Haus();
  var canvas = new Canvas();
  var action_handler = new ActionHandler();
  var controller = new Controller(the_haus, canvas, action_handler);
  controller.setup();
});

/*
 *
 * var player = controller.haus.getPlayer();
    switch(e.which){
      case 37:
        controller.movementHandler(player.X() - 1, player.Y());
        break;
      case 38:
        controller.movementHandler(player.X(), player.Y() - 1);
        break;
      case 39:
        controller.movementHandler(player.X() + 1, player.Y());
        break;
      case 40:
        controller.movementHandler(player.X(), player.Y() + 1);
        break;
      case 90:
        controller.interactionHandler();
        break;
      default:
        console.log(player.name, "do nothing");
    }
*/
