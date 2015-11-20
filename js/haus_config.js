var HausConfig = {
  mapfiles: [
    "resources/maps/map0.json", 
    "resources/maps/map1.json", 
    "resources/maps/map11.json", 
    "resources/maps/map12.json", 
    "resources/maps/map7.json"
  ],
  player: new PlayerCharacter("Sophia", "resources/images/characters/player.png", 0, 10, 7),
  characters: [
    new NonPlayerCharacter("Calico", "resources/images/characters/cat.png", 0, 13, 1, ["Meow!"])
  ]
}
