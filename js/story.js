var StoryStates = {
    INIT: "init",
    RECIEVED_COIN: "recieved-coin",
    PLACED_COIN_ON_ALTAR: "placed-coin-on-altar",
    RETURNED_TO_LIVING:   "returned-to-living",
    RECEIVED_KEY: "received-key",
    RECEIVED_MUSHROOM: "received-mushroom",
    GAVE_MUSHROOM_TO_TESS: "gave-mushroom-to-tess",
    RECEIVED_BUTTON: "received-button",
    RECEIVED_BONES: "received-bones",
    GAVE_BONES_TO_PRODUCE: "gave-bones-to-produce",
    RECEIVED_CREEPY_DOLL: "received-creepy-doll",
    GAVE_DOLLY_TO_GHOST_38: "gave-dolly-to-ghost-38",
    RECEIVED_MAP: "received-map",
    GAVE_MAP_TO_GHOST_30: "gave-map-to-ghost-30",
    RECEIVED_LOCK_OF_HAIR: "received-lock-of-hair",
    GAVE_LOCK_OF_HAIR_TO_MARTHA: "gave-lock-of-hair-to-martha",
    RECEIVED_WINE: "received-wine",
    GAVE_WINE_TO_ALICE: "gave-wine-to-alice",
    RECEIVED_ANTIQUE_RING: "received-antique-ring",
    RECEIVED_LIFE_PRESERVER: "received-life-preserver",
    GAVE_LIFE_PRESERVER_TO_GHOST_14: "gave-life-preserver-to-ghost-14",
    RECEIVED_WEDDING_RING: "received-wedding-ring",
    GAVE_WEDDING_RING_TO_COUPLE: "gave-wedding-ring-to-couple",
    RECEIVED_CORSAGE: "received-corsage",
    GAVE_CORSAGE_TO_SHERI: "gave-corsage-to-sheri",
    RECEIVED_THIMBLE: "received-thimble",
    RECEIVED_FORTUNE_BADGE: "received-fortune-badge"
}

var Story = function(){
  this.controller = undefined;
  this.played_states = [ StoryStates.INIT ];
}
Story.prototype.setup = function(controller){
  this.controller = controller;
  this.setupStoryModes();
}
Story.prototype.addPlayedState = function(state){
  this.played_states.push(state);
  this.triggerStoryEvent(state);
}
Story.prototype.getPlayedGameStates = function(){
  return this.played_states;
}
Story.prototype.setupStoryModes = function(){
  var the_story = this;

  var fortune_cake_tile = this.controller.haus.getTileWithLabel(Labels.tiles.FORTUNE_CAKE);
  fortune_cake_tile.addMode(
    StoryStates.INIT,
    ChoiceDialogMode.createFactory(
      ["Yes", "No"], 
      "Oh! You found a " + Renderer.objectName("coin") + ". Take it?",
      function(controller, target_obj, selected_item){
        if (selected_item === "Yes"){
            controller.mode_manager.addModes([ 
              TextDialogMode.createFactory(
                "You received a " + Renderer.objectName("coin") + ".",
                function(){
                  the_story.addPlayedState(StoryStates.RECIEVED_COIN);
                }
              )]);
            } 
      })
  );
  fortune_cake_tile.addMode(
      StoryStates.RECIEVED_COIN,
      TextDialogMode.createFactory("You should let others try it before getting seconds ...")
  );

  var produce = this.controller.haus.getCharacterWithLabel(Labels.characters.PRODUCE);
  produce.addModes([
    {
        state: StoryStates.RECIEVED_COIN,
        modes: [
            TextDialogMode.createCharacterTextFactory(
              Labels.character_names.PRODUCE,
              "Oh! I can't take the " + Renderer.objectName("coin") + ". Place it at the altar of the dead as an offering."
            )
        ]
    },
    {
        state: StoryStates.RECEIVED_BONES,
        modes: [
            TextDialogMode.createCharacterTextFactory(
              Labels.character_names.PRODUCE,
              "Woah ... where did you get those " + Renderer.objectName("bones") + "!?",
              function(){}
            ),
            ChoiceDialogMode.createFactory(
              [ "OK", "Nope" ],
              Renderer.characterName(Labels.character_names.PRODUCE) + ": Let's place them on the table for our ritual.",
              function(controller, target_obj, selected_item){
                if (selected_item === "OK"){
                  controller.mode_manager.addModes([
                    TextDialogMode.createCharacterTextFactory(
                      Labels.character_names.PRODUCE,
                      "Great! ... Here, you can take this " + Renderer.objectName("creepy doll") + " we found in the woods.",
                      function(){
                        the_story.addPlayedState(StoryStates.GAVE_BONES_TO_PRODUCE);
                        the_story.addPlayedState(StoryStates.RECEIVED_CREEPY_DOLL);
                        target_obj.endInteracting();
                      }
                    )
                  ])
                }else{
                  controller.mode_manager.addModes([
                    TextDialogMode.createCharacterTextFactory(
                      Labels.character_names.PRODUCE,
                      "OK, well, maybe later!",
                      function(){ 
                        target_obj.endInteracting();
                      }
                    )
                  ])
                } 
              }
            )
        ]
    },
    {
        state: StoryStates.GAVE_BONES_TO_PRODUCE,
        modes: [
          TextDialogMode.createCharacterTextFactory(
            Labels.character_names.PRODUCE,
            "Come attend the ritual later tonight!"
          )
        ]
    }
  ]);

  var altar_tile = the_story.controller.haus.getTileWithLabel(Labels.tiles.ALTAR_NORMAL_MODE);
  altar_tile.addMode(
      StoryStates.RECIEVED_COIN,
      ChoiceDialogMode.createFactory(
        [ "Yes", "No" ],
        "Place " + Renderer.objectName("coin") + " on the altar?",
        function(controller, target_obj, selected_item){
          if (selected_item === "Yes"){
            controller.mode_manager.addModes([
              TextDialogMode.createFactory(
                "He He He ...",
                function(){
                  the_story.addPlayedState(StoryStates.PLACED_COIN_ON_ALTAR);
                }
                )
              ])
          } 
        }
      )
  );

  var ghost_altar_tile = the_story.controller.haus.getTileWithLabel(Labels.tiles.ALTAR_GHOST_MODE);
  ghost_altar_tile.addMode(
      StoryStates.INIT,
      ChoiceDialogMode.createFactory(
        [ "Yes", "No" ],
        "Return to the land of the living?",
        function(controller, target_obj, selected_item){
          if (selected_item === "Yes"){
            the_story.addPlayedState(StoryStates.RETURNED_TO_LIVING);
          } 
        }
      )
  );

  var key_item = the_story.controller.haus.getItemWithLabel(Labels.items.KEY);
  key_item.addMode(
      StoryStates.INIT,
      TextDialogMode.createFactory(
        "It's an old rusty " + Renderer.objectName("key") + ". Looks like it hasn't been used in a very long time ...",
        function(){
          the_story.addPlayedState(StoryStates.RECEIVED_KEY);
        }
      )
  );

  var mushroom_item = the_story.controller.haus.getItemWithLabel(Labels.items.MUSHROOM);
  mushroom_item.addMode(
      StoryStates.INIT,
      TextDialogMode.createFactory(
        "What a beautiful looking " + Renderer.objectName("mushroom") + "! Maybe one of your friends would like it.",
        function(){
          the_story.addPlayedState(StoryStates.RECEIVED_MUSHROOM);
        }
      )
  );

  var tess = this.controller.haus.getCharacterWithLabel(Labels.characters.TESS);
  tess.addModes(
      [
        {
          state: StoryStates.RECEIVED_MUSHROOM,
          modes: [
            TextDialogMode.createCharacterTextFactory(
              Labels.characters.TESS,
              "Oh wow, what a beautiful mushroom!!",
              function(){}
            ),
            ChoiceDialogMode.createFactory(
              [ "Yes", "No" ],
              Renderer.characterName(Labels.characters.TESS) + ": Can I have it for my collection?",
              function(controller, target_obj, selected_item){
                if (selected_item === "Yes"){
                  controller.mode_manager.addModes([
                    TextDialogMode.createCharacterTextFactory(
                      Labels.characters.TESS,
                      "Thank you so much for the mushroom! Here, let me give you this " + Renderer.objectName("button") + " in exchange!",
                      function(){
                        the_story.addPlayedState(StoryStates.GAVE_MUSHROOM_TO_TESS);
                        the_story.addPlayedState(StoryStates.RECEIVED_BUTTON);
                        target_obj.endInteracting();
                      }
                    )
                  ])
                }else{
                  controller.mode_manager.addModes([
                    TextDialogMode.createCharacterTextFactory(
                      Labels.characters.TESS,
                      "Aww... ok... Well let me know if you change your mind.",
                      function(){ 
                        target_obj.endInteracting();
                      }
                    )
                  ])
                } 
              }
            )
          ]
        },
        {
            state: StoryStates.GAVE_MUSHROOM_TO_TESS,
            modes: [
                TextDialogMode.createCharacterTextFactory(
                  Labels.characters.TESS,
                  "Thank you for the mushroom!"
              )
            ]
        }
      ]
  );

  var bones_tile = this.controller.haus.getTileWithLabel(Labels.tiles.BONES);
  bones_tile.addMode(
    StoryStates.INIT,
    ChoiceDialogMode.createFactory(
      ["Yes", "No"], 
      "Should you take some as a souvenir?",
      function(controller, target_obj, selected_item){
        if (selected_item === "Yes"){
            controller.mode_manager.addModes([ 
              TextDialogMode.createFactory(
                "You took some " + Renderer.objectName("bones") + ".",
                function(){
                  the_story.addPlayedState(StoryStates.RECEIVED_BONES);
                }
              )]);
        }else{
            controller.mode_manager.addModes([
              TextDialogMode.createFactory(
                "Well ... that would be a bit morally questionable ... Right?",
                function(){}
              ),
              TextDialogMode.createFactory(
                "... ...",
                function(){ target_obj.endInteracting();}
              )
            ])
        } 
    })
  )
  bones_tile.addMode(
    StoryStates.RECEIVED_BONES,
    TextDialogMode.createFactory(
      "It's best not to disturb the " + Renderer.objectName("bones") + " any more."
    )
  );

  var ghost_38 = this.controller.haus.getCharacterWithLabel(Labels.characters.GHOST_38);
  ghost_38.addModes([
    {
      state: StoryStates.RECEIVED_CREEPY_DOLL,
      modes:[
        TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "OMG! That's MY " + Renderer.objectName("dolly") + "!",
            function(){}
        ),
        ChoiceDialogMode.createFactory(
              [ "Sure!", "Suck it." ],
              Renderer.characterName(Labels.character_names.GHOST) + ": Will you give it back?",
              function(controller, target_obj, selected_item){
                if (selected_item === "Sure!"){
                  controller.mode_manager.addModes([
                    TextDialogMode.createCharacterTextFactory(
                      Labels.character_names.GHOST,
                      "Thank you so much!!! Here, I found this old " + Renderer.objectName("map") + " lying around, perhaps it will help you.",
                      function(){
                        the_story.addPlayedState(StoryStates.GAVE_DOLLY_TO_GHOST_38);
                        the_story.addPlayedState(StoryStates.RECEIVED_MAP);
                        target_obj.endInteracting();
                      }
                    )
                  ])
                }else{
                  controller.mode_manager.addModes([
                    TextDialogMode.createCharacterTextFactory(
                      Labels.character_names.GHOST,
                      "WAAAAH SO MEAN!!!",
                      function(){ 
                        target_obj.endInteracting();
                      }
                    )
                  ])
                } 
              }
            )
      ]
    },
    {
      state: StoryStates.GAVE_DOLLY_TO_GHOST_38,
      modes: [
        TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "I'm happy now that I have my " + Renderer.objectName("dolly")+ "!"
        )
      ]
    }
  ])

  var ghost_30 = this.controller.haus.getCharacterWithLabel(Labels.characters.GHOST_30);
  ghost_30.addModes([
    {
      state: StoryStates.RECEIVED_MAP,
      modes:[
        TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "Is that a map? Maybe it will help me find my way back!",
            function(){}
        ),
        ChoiceDialogMode.createFactory(
              [ "Sure!", "Too bad." ],
              Renderer.characterName(Labels.character_names.GHOST) + ": Can I use it?",
              function(controller, target_obj, selected_item){
                if (selected_item === "Sure!"){
                  controller.mode_manager.addModes([
                    TextDialogMode.createCharacterTextFactory(
                      Labels.character_names.GHOST,
                      "Thanks!! Hmm... I don't have anything to give you in return...",
                      function(){}
                    ),
                    TextDialogMode.createCharacterTextFactory(
                      Labels.character_names.GHOST,
                      "Well, here's a " + Renderer.objectName("lock of hair") + " from when I was alive...",
                      function(){
                        the_story.addPlayedState(StoryStates.GAVE_MAP_TO_GHOST_30);
                        the_story.addPlayedState(StoryStates.RECEIVED_LOCK_OF_HAIR);
                        target_obj.endInteracting();
                      }
                    )
                  ])
                }else{
                  controller.mode_manager.addModes([
                    TextDialogMode.createCharacterTextFactory(
                      Labels.character_names.GHOST,
                      "You should know better than to mock the dead. I know where you sleep.",
                      function(){ 
                        target_obj.endInteracting();
                      }
                    )
                  ])
                } 
              }
            )
      ]
    },
    {
      state: StoryStates.GAVE_MAP_TO_GHOST_30,
      modes: [
        TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "I can find my way home now..."
        )
      ]
    }
  ])

}
Story.prototype.addItemToInventory = function(item){
  this.controller.sound_manager.playSoundEffect(Labels.sounds.GET_ITEM);
  var player = this.controller.haus.getPlayer();
  player.addToInventory(item);
  this.controller.haus.removeItemFromMap(item);
  this.controller.updateRenderer();
}
Story.prototype.removeItemFromInventory = function(item){
  var player = this.controller.haus.getPlayer();
  player.removeFromInventory(item);
}
Story.prototype.triggerStoryEvent = function(state){
  switch(state){
    case StoryStates.RECIEVED_COIN: 
        this.addItemToInventory(Labels.items.COIN);
        break; 
    case StoryStates.PLACED_COIN_ON_ALTAR:
        var player = this.controller.haus.getPlayer();
        var next_tile = this.controller.haus.getTileWithLabel(Labels.tiles.IN_FRONT_OF_GHOST_ALTAR);
        this.controller.movePlayer(player, next_tile.getLocation());
        this.controller.sound_manager.playMusic(Labels.sounds.GHOST);
        this.controller.sound_manager.playSoundEffect(Labels.sounds.ENTER_GHOST_MODE);
        break;
    case StoryStates.RETURNED_TO_LIVING:
        var player = this.controller.haus.getPlayer();
        var next_tile = this.controller.haus.getTileWithLabel(Labels.tiles.IN_FRONT_OF_NORMAL_ALTAR);
        this.controller.movePlayer(player, next_tile.getLocation());
        this.controller.sound_manager.playMusic(Labels.sounds.MAIN);
        this.controller.sound_manager.playSoundEffect(Labels.sounds.EXIT_GHOST_MODE);
        break;
    case StoryStates.RECEIVED_KEY:
        this.addItemToInventory(Labels.items.KEY);
        locked_door_tile = this.controller.haus.getTileWithLabel(Labels.tiles.LOCKED_DOOR);
        locked_door_portal_tile = this.controller.haus.getTileWithLabel(Labels.tiles.LOCKED_DOOR_PORTAL);
        locked_door_tile.is_accessible = true;
        locked_door_portal_tile.is_accessible = true;
        break;
    case StoryStates.RECEIVED_MUSHROOM:
        this.addItemToInventory(Labels.items.MUSHROOM);
        break;
    case StoryStates.GAVE_MUSHROOM_TO_TESS:
        this.removeItemFromInventory(Labels.items.MUSHROOM);
        break;
    case StoryStates.RECEIVED_BUTTON:
        this.addItemToInventory(Labels.items.BUTTON);
        break;
    case StoryStates.RECEIVED_BONES:
        this.addItemToInventory(Labels.items.BONES);
        break;
    case StoryStates.GAVE_BONES_TO_PRODUCE:
        this.removeItemFromInventory(Labels.items.BONES);
        break;
    case StoryStates.RECEIVED_CREEPY_DOLL:
        this.addItemToInventory(Labels.items.CREEPY_DOLL);
        break;
    case StoryStates.GAVE_DOLLY_TO_GHOST_38:
        this.removeItemFromInventory(Labels.items.CREEPY_DOLL);
        break;
    case StoryStates.RECEIVED_MAP:
        this.addItemToInventory(Labels.items.MAP);
        break;
    case StoryStates.GAVE_MAP_TO_GHOST_30:
        this.removeItemFromInventory(Labels.items.MAP);
        break;
    case StoryStates.RECEIVED_LOCK_OF_HAIR:
        this.addItemToInventory(Labels.items.LOCK_OF_HAIR);
        break;
  }
}
