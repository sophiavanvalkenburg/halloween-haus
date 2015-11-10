var Controller = function(haus, canvas, action_handler){
  this.haus = haus;
  this.canvas = canvas;
  this.action_handler = action_handler;
};
Controller.prototype.setup = function(){
  this.setUpEventListener();
  this.canvas.drawMap(this.haus);
};

//this.canvas.updateMainDialog(this.haus.getMainDialog());
Controller.prototype.getActionTarget = function(){
  var map = this.haus.getCurrentMap();
  var player = this.haus.getPlayer();
  return this.haus.getFacingObjectOnMap(map, player);
};
Controller.prototype.setUpEventListener = function(){
  var controller = this; 
  window.addEventListener("keydown", function(e){
    controller.action_handler.handleKeyEvent(e.which, controller);
  });
};



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
