var Controller = function(haus, canvas){
  this.haus = haus;
  this.canvas = canvas;
};
Controller.prototype.setup = function(){
  this.setUpEventListeners();
  this.canvas.drawMap(this.haus.getCurrentMap());
};
Controller.prototype.interactionHandler = function(){
  var map = this.haus.getCurrentMap();
  if (this.haus.getInteractingObject() === undefined){
    var facing_obj = map.getFacingObject(this.haus.getPlayer());
    if (facing_obj !== undefined && 
        facing_obj.interactAction !== undefined){
      this.haus.setInteractingObject(facing_obj);
      facing_obj.interactAction(this);
    }
  }else{
    this.haus.getInteractingObject().interactAction(this);
  }
  this.canvas.updateMainDialog(this.haus.getMainDialog());
};
Controller.prototype.movementHandler = function(x, y){
  if (this.haus.getInteractingObject() === undefined){
    var map = this.haus.getCurrentMap();
    var player = this.haus.getPlayer();
    player.moveTo(map, x, y);
    this.canvas.updateCharacter(player);
  }
};
Controller.prototype.setUpEventListeners = function(){
  var controller = this; 
  window.addEventListener("keydown", function(e){
    var player = controller.haus.getPlayer();
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
      case 88:
        console.log(player.name, "X button");
        break;
      case 90:
        controller.interactionHandler();
        break;
      default:
        console.log(player.name, "do nothing");
    }
  });
};

$(function(){
  var the_haus = new Haus();
  var canvas = new Canvas();
  var controller = new Controller(the_haus, canvas);
  controller.setup();
});
