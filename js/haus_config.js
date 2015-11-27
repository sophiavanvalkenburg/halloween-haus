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
    "resources/maps/map2.json", 
    "resources/maps/map21.json",
    "resources/maps/map22.json",
    "resources/maps/map23.json",
    "resources/maps/map24.json",
    "resources/maps/map31.json",
    "resources/maps/map32.json",
    "resources/maps/map33.json",
    "resources/maps/map4.json",
    "resources/maps/map5.json", 
    "resources/maps/map6.json",
    "resources/maps/map7.json",
    "resources/maps/map8.json",
    "resources/maps/map9.json",
    "resources/maps/map91.json",
    "resources/maps/map92.json",
    "resources/maps/map93.json",
    "resources/maps/map94.json",
    "resources/maps/map95.json",
    "resources/maps/map96.json",
    "resources/maps/map10.json",
    "resources/maps/map14.json",
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
