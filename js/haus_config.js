var Labels = {
  tiles: {
    FOUNTAIN: "fountain",
    KITCHEN_TABLE: "kitchen-table",
    MOVE_TILE: "player-start"
  },
  characters: {
    CALICO:   "calico",
    YOU:      "you",

    ABBY:     "abby",
    ADEL:     "adel",
    ALEKS:    "aleks",
    ALICE:    "alice",
    ALULA:    "alula",
    AMY:      "amy",
    ANGELICA: "angelica",
    BETHANY:  "bethany",
    BROOKE:   "brooke",
    FLO:      "flo",
    JAE:      "jae",
    LANYA:    "lanya",
    LEE:      "lee",
    LISA:     "lisa",
    MARTHA:   "martha",
    MIRI:     "miri",
    OLIVIA:    "olivia",
    PRODUCE:  "produce",
    SHERI:    "sheri",
    SKYLAR:   "skylar",
    SOPHIA:   "sophia",
    TAI:      "tai",
    TESS:     "tess",
    TOLA:     "tola",
    TORI:     "tori",
    VALERIE:  "valerie",
    XIAOWEN:  "xiaowen",
    XIAOYU:   "xiaoyu"
  }
}

var Config = {
  INITIAL_MAP: 0,
  mapfiles: [
    "resources/maps/normal/map0.json", 
    "resources/maps/normal/map1.json", 
    "resources/maps/normal/map11.json", 
    "resources/maps/normal/map12.json", 
    "resources/maps/normal/map2.json", 
    "resources/maps/normal/map21.json",
    "resources/maps/normal/map22.json",
    "resources/maps/normal/map23.json",
    "resources/maps/normal/map24.json",
    "resources/maps/normal/map31.json",
    "resources/maps/normal/map32.json",
    "resources/maps/normal/map33.json",
    "resources/maps/normal/map4.json",
    "resources/maps/normal/map5.json", 
    "resources/maps/normal/map6.json",
    "resources/maps/normal/map7.json",
    "resources/maps/normal/map8.json",
    "resources/maps/normal/map9.json",
    "resources/maps/normal/map91.json",
    "resources/maps/normal/map92.json",
    "resources/maps/normal/map93.json",
    "resources/maps/normal/map94.json",
    "resources/maps/normal/map95.json",
    "resources/maps/normal/map96.json",
    "resources/maps/normal/map10.json",
    "resources/maps/normal/map101.json",
    "resources/maps/normal/map102.json",
    "resources/maps/normal/map103.json",
    "resources/maps/normal/map104.json",
    "resources/maps/normal/map105.json",
    "resources/maps/normal/map106.json",
    "resources/maps/normal/map14.json",
    "resources/maps/normal/map141.json",
    "resources/maps/normal/map142.json",
    "resources/maps/normal/map143.json",
    "resources/maps/normal/map144.json",
    "resources/maps/normal/map145.json",
    "resources/maps/normal/map146.json",
    "resources/maps/normal/map147.json"
  ],
  player: new Character(
      Labels.characters.YOU,
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
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.CALICO, 
              "Meow!"
              )]
          }
        ],
        MapState.DOWN,
        false
      ),

    new Character(
      Labels.characters.ABBY,
      new MapLocation(4, 11, 14), 
      "resources/images/characters/abby.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.ABBY, 
              "... Drat! You made me lose points on love live!"
              )]
          }
        ],
        MapState.RIGHT,
        false
      ),
    new Character(
      Labels.characters.ADEL,
      new MapLocation(103, 11, 6), 
      "resources/images/characters/adel.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.ADEL, 
              "Check out the spooky details on this vest that ch(SHERI) made for me!"
              )]
          }
        ]
      ),
    new Character(
      Labels.characters.ALEKS,
      new MapLocation(6, 5, 11), 
      "resources/images/characters/aleks.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.ALEKS, 
              "That ... thing ... with the blue eyes is still out there in the world somewhere, I know it ..."
              )]
          }
        ],
        MapState.RIGHT
      ),
    new Character(
      Labels.characters.ALICE,
      new MapLocation(4, 12, 13), 
      "resources/images/characters/alice.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.ALICE, 
              "Noooo don't tell me any more spooky stories !!!"
              )]
          }
        ]
      ),
    new Character(
      Labels.characters.ALULA,
      new MapLocation(4, 13, 14), 
      "resources/images/characters/alula.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.ALULA, 
              "Don't judge me for my love of minions!"
              )]
          }
        ],
        MapState.LEFT
      ),
    new Character(
      Labels.characters.AMY,
      new MapLocation(22, 3, 9), 
      "resources/images/characters/amy.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.AMY, 
              "ch(XIAOYU) and I made the pusheen pumpkin! Check it out!"
              )]
          }
        ],
        MapState.LEFT
      ),
    new Character(
      Labels.characters.ANGELICA,
      new MapLocation(11, 9, 7), 
      "resources/images/characters/angelica.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.ANGELICA, 
              "Did you meet our cat friend yet? She is sooo cute!"
              )]
          }
        ], 
        MapState.LEFT
      ),
    new Character(
      Labels.characters.BETHANY,
      new MapLocation(6, 9, 11), 
      "resources/images/characters/bethany.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.BETHANY, 
              "Sometimes when I'm alone, I can hear footsteps outside my bedroom door ..."
              )]
          }
        ],
        MapState.LEFT
      ),
    new Character(
      Labels.characters.BROOKE,
      new MapLocation(32, 6, 14), 
      "resources/images/characters/brooke.png",
       [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.BROOKE, 
              "I think the first floor bathroom is haunted ..."
              )]
          }
        ]
      ),
    new Character(
      Labels.characters.FLO,
      new MapLocation(32, 6, 10), 
      "resources/images/characters/flo.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.FLO, 
              "I just flew in from DC."
              )]
          }
        ],
        MapState.LEFT
      ),
    new Character(
      Labels.characters.JAE,
      new MapLocation(14, 11, 9), 
      "resources/images/characters/jae.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.JAE, 
              "Hi, I'm ch(JAE) from konbanwa."
              )]
          }
        ],
        MapState.RIGHT
      ),
    new Character(
      Labels.characters.LANYA,
      new MapLocation(32, 5, 3), 
      "resources/images/characters/lanya.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createFactory(
              "&#9834;&#9835;&#9834; It's best not to disturb her while she plays."
              )]
          }
        ],
        MapState.RIGHT,
        false
      ),
    new Character(
      Labels.characters.LEE,
      new MapLocation(22, 7, 3), 
      "resources/images/characters/lee.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.LEE, 
              "Let me know if you want your picture taken!"
              )]
          }
        ]
      ),
    new Character(
      Labels.characters.LISA,
      new MapLocation(22, 1, 8), 
      "resources/images/characters/lisa.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.LISA, 
              "Come join our game!"
              )]
          }
        ],
        MapState.RIGHT
      ),
    new Character(
      Labels.characters.MARTHA,
      new MapLocation(11, 7, 5), 
      "resources/images/characters/martha.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.MARTHA, 
              "Welcome to the Haus! Be sure to try the Fortune Cake ... you might find something special."
              )]
          }
        ]
      ),
    new Character(
      Labels.characters.MIRI,
      new MapLocation(11, 11, 5), 
      "resources/images/characters/miri.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.MIRI, 
              "I'm glad I'm not sleeping in the living room after what happened last year!"
              )]
          }
        ],
        MapState.RIGHT
      ),
    new Character(
      Labels.characters.OLIVIA,
      new MapLocation(22, 5, 6), 
      "resources/images/characters/olivia.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.OLIVIA, 
              "Try some of these tarts! I made them myself!"
              )]
          }
        ],
        MapState.RIGHT
      ),
    new Character(
      Labels.characters.PRODUCE,
      new MapLocation(32, 10, 8), 
      "resources/images/characters/produce.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.PRODUCE, 
              "Come attend the ritual after dinner tonight!"
              )]
          }
        ],
        MapState.RIGHT
      ),
    new Character(
      Labels.characters.SHERI,
      new MapLocation(103, 9, 6), 
      "resources/images/characters/sheri.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.SHERI, 
              "I'm trying my best to be gothic for halloween, but I can't resist a little pink!"
              )]
          }
        ],
        MapState.LEFT
      ),
    new Character(
      Labels.characters.SKYLAR,
      new MapLocation(22, 10, 5), 
      "resources/images/characters/skylar.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.SKYLAR, 
              "I'm excited for Sunday Nunday tomorrow!"
              )]
          }
        ],
        MapState.LEFT
      ),
    new Character(
      Labels.characters.SOPHIA,
      new MapLocation(12, 14, 10), 
      "resources/images/characters/sophia.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.SOPHIA, 
              "I'm a cat and I looove DDR! Meow!"
              )]
          }
        ],
        MapState.LEFT
      ),
    new Character(
      Labels.characters.TAI,
      new MapLocation(11, 8, 5), 
      "resources/images/characters/tai.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.TAI, 
              "We went for a walk in the woods this morning. It was very beautiful."
              )]
          }
        ]
      ),
    new Character(
      Labels.characters.TESS,
      new MapLocation(22, 9, 9), 
      "resources/images/characters/tess.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.TESS, 
              "Dinner will be ready soon~"
              )]
          }
        ]
      ),
    new Character(
      Labels.characters.TOLA,
      new MapLocation(11, 9, 6), 
      "resources/images/characters/tola.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.TOLA, 
              "Meet my new friend ch(BUDDY)! He's a little spooky."
              )]
          }
        ],
        MapState.LEFT
      ),
    new Character(
      Labels.characters.TORI,
      new MapLocation(11, 7, 9), 
      "resources/images/characters/tori.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.TORI, 
              "AHHH! My throat hurts from all this yelling!"
              )]
          }
        ],
        MapState.UP
      ),
    new Character(
      Labels.characters.VALERIE,
      new MapLocation(101, 8, 13), 
      "resources/images/characters/valerie.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.VALERIE, 
              "I heard there's a ghost in our room that keeps opening and closing the closet door."
              )]
          }
        ],
        MapState.UP
      ),
    new Character(
      Labels.characters.XIAOWEN,
      new MapLocation(22, 1, 9), 
      "resources/images/characters/xiaowen.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.XIAOWEN, 
              "Whatever you do, don't talk to the ghosts."
              )]
          }
        ],
        MapState.RIGHT
      ),
    new Character(
      Labels.characters.XIAOYU,
      new MapLocation(22, 3, 8), 
      "resources/images/characters/xiaoyu.png",
      [
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.XIAOYU, 
              "... back-to-back ..."
              )]
          }
        ],
        MapState.LEFT
      ),
  ]
}
