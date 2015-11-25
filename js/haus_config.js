var Labels = {
  tiles: {
    FOUNTAIN: "fountain",
    KITCHEN_TABLE: "kitchen-table",
    MOVE_TILE: "player-start"
  },
  characters: {
    CALICO: "calico",
    SOPHIA: "sophia"
  }
}

var Config = {
  mapfiles: [
    "resources/maps/map0.json", 
    "resources/maps/map1.json", 
    "resources/maps/map11.json", 
    "resources/maps/map12.json", 
    "resources/maps/map7.json"
  ],
  player: new Character(
      Labels.characters.SOPHIA,
      new MapLocation(0, 10, 7), 
      "resources/images/characters/player.png"
      ),
  characters: [
    new Character(
        Labels.characters.CALICO, 
        new MapLocation(0, 13, 1),
        "resources/images/characters/cat-move.gif", 
        [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(Labels.characters.CALICO, "Meow!")]
          }
        ]
      ),
  ]
}
