var Mode = function(target_obj){
  this.type = Mode.MODE;
  this.target_obj = target_obj;
};
Mode.MODE = "mode";
Mode.TEXT_DIALOG = "text_dialog";
Mode.CHOICE_DIALOG = "choice_dialog";
Mode.MAP = "map";
Mode.START_SCREEN = "start_screen";
Mode.LEFT = 37;
Mode.UP = 38;
Mode.RIGHT = 39;
Mode.DOWN = 40;
Mode.SELECT = 90;
Mode.ENTER = 13;
Mode.MENU = 16;
Mode.INVENTORY = 73;

Mode.VALID_INPUTS = [
  Mode.LEFT,
  Mode.UP,
  Mode.RIGHT,
  Mode.DOWN,
  Mode.SELECT,
  Mode.ENTER,
  Mode.MENU,
  Mode.INVENTORY
];

Mode.createFactory = function(){
  return function(target_obj) { return new Mode(target_obj); };
}
Mode.prototype.leftArrowButtonHandler = function(){};
Mode.prototype.rightArrowButtonHandler = function(){};
Mode.prototype.downArrowButtonHandler = function(){};
Mode.prototype.upArrowButtonHandler = function(){};
Mode.prototype.selectButtonHandler = function(){};
Mode.prototype.menuButtonHandler = function(){};
Mode.prototype.defaultHandler = function(){};
Mode.prototype.clear = function(){};
Mode.prototype.initialize = function(){};
Mode.prototype.shouldEndMode = function(){
  return true;
};
Mode.prototype.eventHandler = function(key_code, controller){
  switch(key_code){
    case Mode.LEFT:
      this.leftArrowButtonHandler(controller);
      break;
    case Mode.RIGHT:
      this.rightArrowButtonHandler(controller);
      break;
    case Mode.UP:
      this.upArrowButtonHandler(controller);
      break;
    case Mode.DOWN:
      this.downArrowButtonHandler(controller);
      break;
    case Mode.SELECT:
      this.selectButtonHandler(controller);
      break;
    case Mode.ENTER:
      this.selectButtonHandler(controller);
      break;
    case Mode.MENU:
      this.menuButtonHandler(controller);
      break;
    case Mode.INVENTORY:
      this.menuButtonHandler(controller);
      break;
    default:
      this.defaultHandler(controller);
      break;
  }
};


var TextDialogMode = function(target_obj, messages, result_fn){
  Mode.call(this, target_obj);
  this.messages = messages;
  this.result_fn = result_fn;
  this.mode = Mode.TEXT_DIALOG;
};
TextDialogMode.createFactory = function(message_str, result_fn){
  if (result_fn === undefined){
    result_fn = function(obj){ obj.endInteracting();};
  }
  var messages = TextDialogMode.messageStringToArray(message_str);
  return function(target_obj) { return new TextDialogMode(target_obj, messages, result_fn); };
}
TextDialogMode.createCharacterTextFactory = function(name, message_str, result_fn){
  if (result_fn === undefined){
    result_fn = function(ch){ ch.endInteracting();};
  }
  var messages = TextDialogMode.messageStringToArray(message_str);
  var messages_with_name = messages.map(
    function(m){
        return Renderer.characterName(name) + ': "' + m + '"';
    }
  );
  return function(target_obj) { return new TextDialogMode(target_obj, messages_with_name, result_fn) };
}
TextDialogMode.messageStringToArray = function(message_str){
  if (message_str.length === 0){
    return [];
  }
  var words = message_str.split(" "); 
  var messages = [words[0]];
  for (var i=1; i<words.length; i++){
    var last_message = Renderer.removeSpecialNames(messages[messages.length-1]);
    var next_word = " " + Renderer.removeSpecialNames(words[i]);
    if ( (last_message + next_word).length <= Renderer.TEXT_DIALOG_CHAR_LIMIT){
        messages[messages.length-1] += " " + words[i];
    }else{
        messages.push(words[i]);
    }
  }
  return messages;
};
TextDialogMode.textArrayToModes = function(text_array){
  var modes = [];
  for (var i=0; i<text_array.length; i++){
    modes.push(TextDialogMode.createFactory(text_array[i], function(){}))
  }
  return modes;
}
TextDialogMode.prototype = new Mode();
TextDialogMode.prototype.constructor = TextDialogMode;
TextDialogMode.prototype.downArrowButtonHandler = function(controller){
  this.gotoNextMessage(controller);
};
TextDialogMode.prototype.selectButtonHandler = function(controller){
  this.gotoNextMessage(controller);
};
TextDialogMode.prototype.menuButtonHandler = function(controller){
  this.gotoNextMessage(controller);
}
TextDialogMode.prototype.gotoNextMessage = function(controller){
  controller.sound_manager.playSoundEffect(Labels.sounds.MENU_NAV);
  if (!this.shouldEndMode()){
    this.messages = this.messages.slice(1);
    this.initialize(controller);
  } 
}
TextDialogMode.prototype.shouldEndMode = function(){
  return this.messages === undefined || this.messages.length === 0;
}
TextDialogMode.prototype.initialize = function(controller){
  if (!this.shouldEndMode()){
    controller.setTextDialogMessage(this.messages[0]);
  }else if (this.result_fn !== undefined){
    this.result_fn(this.target_obj);
  }
}
TextDialogMode.prototype.clear = function(controller){
  controller.unsetTextDialogMessage();
}


var ChoiceDialogMode = function(target_obj, choices, message, select_fn){
  Mode.call(this, target_obj);
  this.choices = choices;
  this.message = message;
  this.selected = 0;
  this.select_fn = select_fn;
  this.handled = false;
  this.type = Mode.CHOICE_DIALOG;
};
ChoiceDialogMode.createFactory = function(choices, message, select_fn){
  return function(target_obj){ return new ChoiceDialogMode(target_obj, choices, message, select_fn); };
}
ChoiceDialogMode.prototype = new Mode();
ChoiceDialogMode.prototype.constructor = ChoiceDialogMode;
ChoiceDialogMode.prototype.initialize = function(controller){
  if (!this.shouldEndMode()){
    if (this.message !== undefined){
        controller.setTextDialogMessage(this.message);
    }
    controller.setChoiceDialogLabels(this.choices);
    controller.choiceDialogSelectItem(this.selected);
  }
}
ChoiceDialogMode.prototype.clear = function(controller){
  controller.unsetTextDialogMessage();
  controller.unsetChoiceDialogLabels();
}
ChoiceDialogMode.prototype.downArrowButtonHandler = function(controller){
  controller.sound_manager.playSoundEffect(Labels.sounds.MENU_NAV);
  this.selected = this.selected === this.choices.length - 1 ? this.selected : this.selected + 1;
  controller.choiceDialogSelectItem(this.selected);
};
ChoiceDialogMode.prototype.upArrowButtonHandler = function(controller){
  controller.sound_manager.playSoundEffect(Labels.sounds.MENU_NAV);
  this.selected = this.selected === 0 ? 0 : this.selected - 1;
  controller.choiceDialogSelectItem(this.selected);
};
ChoiceDialogMode.prototype.rightArrowButtonHandler = function(controller){
  this.selectButtonHandler(controller);
}
ChoiceDialogMode.prototype.selectButtonHandler = function(controller){
  controller.sound_manager.playSoundEffect(Labels.sounds.MENU_SELECT);
  this.select_fn(controller, this.target_obj, this.choices[this.selected])
  this.handled = true; 
};
ChoiceDialogMode.prototype.shouldEndMode = function(){
  return this.handled;
}


var MapMode = function(){
  Mode.call(this); 
  this.handled = false;
  this.type = Mode.MAP;
};
MapMode.createFactory = function(){
  return function() { return new MapMode(); };
}
MapMode.prototype = new Mode();
MapMode.prototype.constructor = MapMode;
MapMode.prototype.leftArrowButtonHandler = function(controller){
  controller.movePlayerLeft();
  this.handled = true;
}
MapMode.prototype.rightArrowButtonHandler = function(controller){
  controller.movePlayerRight();
  this.handled = true;
}
MapMode.prototype.downArrowButtonHandler = function(controller){
  controller.movePlayerDown();
  this.handled = true;
};
MapMode.prototype.upArrowButtonHandler = function(controller){
  controller.movePlayerUp();
  this.handled = true;
};
MapMode.prototype.selectButtonHandler = function(controller){
  var target_obj = controller.selectFacingObject();
  if (target_obj !== undefined){
    var played_states = controller.the_story.getPlayedGameStates();
    target_obj.startInteracting(controller);
    var mode_seq = target_obj.getModeSequence(played_states);
    if (mode_seq.length > 0){
      controller.sound_manager.playSoundEffect(Labels.sounds.MENU_NAV);
      controller.mode_manager.addModes(mode_seq, target_obj); 
    }
  }
  this.handled = true;
};
MapMode.prototype.menuButtonHandler = function(controller){
  var player = controller.haus.getPlayer();
  var items = player.getFormattedInventory();
  var text_array = ["~Inventory~"];
  if (items.length > 0){
    text_array = text_array.concat(items);
  }else{
    text_array.push("No items.");
  }
  dialog_modes = TextDialogMode.textArrayToModes(text_array);
  controller.sound_manager.playSoundEffect(Labels.sounds.MENU_NAV);
  controller.mode_manager.addModes(dialog_modes);
  this.handled = true;
}
MapMode.prototype.shouldEndMode = function(){
  return this.handled === true;
}


var StartScreenMode = function(){
  var choices = ["Start Game", "How To Play", "Credits"];
  var select_fn = function(controller, target, choice){
    if (choice == "Start Game"){
      controller.startGame();
    } else if (choice == "How To Play"){
      var instructions = TextDialogMode.textArrayToModes(Config.HOW_TO);
      controller.mode_manager.addModes(instructions);
      controller.mode_manager.addModes([StartScreenMode.createFactory()]);
    } else if (choice == "Credits"){
      var credits = TextDialogMode.textArrayToModes(Config.CREDITS);
      controller.mode_manager.addModes(credits);
      controller.mode_manager.addModes([StartScreenMode.createFactory()]);
    }
  }
  var message = Config.START_SCREEN_CHOICE_MESSAGE;
  ChoiceDialogMode.call(this, undefined, choices, message, select_fn); 
  this.type = Mode.START_SCREEN;
}
StartScreenMode.createFactory = function(){
  return function() { return new StartScreenMode(); };
}
StartScreenMode.prototype = new ChoiceDialogMode();
StartScreenMode.prototype.constructor = StartScreenMode;


var InputModeManager = function(){
  this.mode_queue = [];
};
InputModeManager.prototype.addModes = function(mode_factories, target_obj){
  for (var i=0; i<mode_factories.length; i++){
    var create_mode_fn = mode_factories[i];
    this.mode_queue.push(create_mode_fn(target_obj));
  }
};
InputModeManager.prototype.addModesAndHandleEvent = function(controller, mode_event, mode_factories, target_obj){
  this.addModes(mode_factories, target_obj);
  this.handleKeyEvent(mode_event, controller);
}
InputModeManager.prototype.currentMode = function(){
  if (!this.modeQueueIsEmpty()){
    return this.mode_queue[0];
  }
};
InputModeManager.prototype.gotoNextMode = function(){
  this.mode_queue = this.mode_queue.slice(1);
  return this.currentMode();
};
InputModeManager.prototype.modeQueueIsEmpty = function(){
  return this.mode_queue.length === 0;
};
InputModeManager.prototype.handleKeyEvent = function(key_code, controller){
  if (!Mode.VALID_INPUTS.includes(key_code)) return;
  if (this.modeQueueIsEmpty()){
    this.addModes([MapMode.createFactory()]);
  }
  var curr_mode = this.currentMode();
  if (curr_mode !== undefined){
    curr_mode.eventHandler(key_code, controller, this);
    if (curr_mode.shouldEndMode()){
      curr_mode.clear(controller);
      var next_mode = this.gotoNextMode();
      if (next_mode !== undefined){
        next_mode.initialize(controller);
      }
    }
  }
};
