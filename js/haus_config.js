var Labels = {
  tiles: {
    FOUNTAIN: "fountain",
    KITCHEN_TABLE: "kitchen-table",
    MOVE_TILE: "player-start"
  },
  characters: {
    CALICO: "calico",
    SOPHIA: "sophia",
    YOU:    "you",
    ALULA:  "alula",
    MARTHA: "martha",
    BROOKE: "brooke",
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
    "resources/maps/map101.json",
    "resources/maps/map102.json",
    "resources/maps/map103.json",
    "resources/maps/map104.json",
    "resources/maps/map105.json",
    "resources/maps/map106.json",
    "resources/maps/map14.json",
    "resources/maps/map141.json",
    "resources/maps/map142.json",
    "resources/maps/map143.json",
    "resources/maps/map144.json",
    "resources/maps/map145.json",
    "resources/maps/map146.json",
    "resources/maps/map147.json"
  ],
  player: new Character(
      Labels.characters.YOU,
      new MapLocation(0, 10, 7), 
      "resources/images/characters/player.png"
      ),
  characters: [
    new Character(
      Labels.characters.SOPHIA,
      new MapLocation(12, 14, 10), 
      "resources/images/characters/sophia.png"
      ),
    new Character(
      Labels.characters.MARTHA,
      new MapLocation(11, 7, 5), 
      "resources/images/characters/martha.png"
      ),
    new Character(
      Labels.characters.BROOKE,
      new MapLocation(32, 6, 14), 
      "resources/images/characters/brooke.png"
      ),
    new Character(
      Labels.characters.ALULA,
      new MapLocation(4, 13, 14), 
      "resources/images/characters/alula.png"
      ),
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
