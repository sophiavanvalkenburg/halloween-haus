var Labels = {
  sounds: {
    /********* MUSIC ***************/
    OPENING: "opening",
    MAIN: "main",
    GHOST: "ghost"
  },
  channels: {
    MUSIC: "music",
    EFFECTS: "sound_effects"
  },
  tiles: {
    FORTUNE_CAKE: "fortune-cake",
    ALTAR_NORMAL_MODE: "altar-normal-mode",
    ALTAR_GHOST_MODE: "altar-ghost-mode",
    IN_FRONT_OF_NORMAL_ALTAR: "in-front-of-normal-altar",
    IN_FRONT_OF_GHOST_ALTAR: "in-front-of-ghost-altar"
  },
  character_names: {
    PRODUCE: "high priestess produce"
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
    BUDDY:    "buddy",
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
  ANIMATION_COUNTER: 1000,
  ANIMATION_COUNTER_OVERFLOW: 60,
  INITIAL_MAP: 0,
  INITIAL_MUSIC: Labels.sounds.MAIN,
  sounds: {
    channels: {
      MUSIC: { 
        label: Labels.channels.MUSIC,
        volume: 0.3,
      },
      EFFECTS: {
        label: Labels.channels.EFFECTS,
      }
    },
    files: [
      /********* MUSIC ***************/
      { 
        label: Labels.sounds.MAIN, 
        src: "resources/sounds/Gunday Monday - This Is Halloween Chiptune.mp3",
        loop: true
      },
      { 
        label: Labels.sounds.OPENING, 
        src: "resources/sounds/132-pokemon-tower.mp3",
        loop: true
      },
      { 
        label: Labels.sounds.GHOST, 
        src: "resources/sounds/131-lavender-town-s-theme.mp3",
        loop: true
      },
    ]
  },
  mapfiles: [
    /******** NORMAL MODE **********/
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
    "resources/maps/normal/map147.json",
    /******** GHOST MODE **********/
    "resources/maps/ghost/gmap0.json", 
    "resources/maps/ghost/gmap1.json", 
    "resources/maps/ghost/gmap11.json", 
    "resources/maps/ghost/gmap12.json", 
    "resources/maps/ghost/gmap2.json", 
    "resources/maps/ghost/gmap21.json",
    "resources/maps/ghost/gmap22.json",
    "resources/maps/ghost/gmap23.json",
    "resources/maps/ghost/gmap24.json",
    "resources/maps/ghost/gmap31.json",
    "resources/maps/ghost/gmap32.json",
    "resources/maps/ghost/gmap33.json",
    "resources/maps/ghost/gmap4.json",
    "resources/maps/ghost/gmap5.json", 
    "resources/maps/ghost/gmap6.json",
    "resources/maps/ghost/gmap7.json",
    "resources/maps/ghost/gmap8.json",
    "resources/maps/ghost/gmap9.json",
    "resources/maps/ghost/gmap91.json",
    "resources/maps/ghost/gmap92.json",
    "resources/maps/ghost/gmap93.json",
    "resources/maps/ghost/gmap94.json",
    "resources/maps/ghost/gmap95.json",
    "resources/maps/ghost/gmap96.json",
    "resources/maps/ghost/gmap10.json",
    "resources/maps/ghost/gmap101.json",
    "resources/maps/ghost/gmap102.json",
    "resources/maps/ghost/gmap103.json",
    "resources/maps/ghost/gmap104.json",
    "resources/maps/ghost/gmap105.json",
    "resources/maps/ghost/gmap106.json",
    "resources/maps/ghost/gmap14.json",
    "resources/maps/ghost/gmap141.json",
    "resources/maps/ghost/gmap142.json",
    "resources/maps/ghost/gmap143.json",
    "resources/maps/ghost/gmap144.json",
    "resources/maps/ghost/gmap145.json",
    "resources/maps/ghost/gmap146.json",
    "resources/maps/ghost/gmap147.json"

  ],
  player: new Character(
      {
        label:    Labels.characters.YOU,
        map_loc:  new MapLocation(0, 10, 7), 
        graphic:  "resources/images/characters/player.png"
      }
      ),
  characters: [
    new Character(
        {
          label:    Labels.characters.CALICO, 
          map_loc:  new MapLocation(0, 13, 1),
          graphic:  "resources/images/characters/cat-move.gif", 
          modes:    [
            {
              state: StoryStates.INIT, 
              modes: [TextDialogMode.createCharacterTextFactory(
                Labels.characters.CALICO, 
                "Meow!"
                )]
            }
          ],
          initial_orientation:    MapState.DOWN,
          interacts_with_player:  false,
          animation: {
            total_seconds: 20,
            instructions: {
              1: { movement: { y: 1 } },
              2: { movement: { y: 1 } },
              3: { orientation: MapState.LEFT },
              4: { movement: { x: -1 } },
              5: { orientation: MapState.UP },
              6: { movement: { y: -1 } },
              7: { orientation: MapState.RIGHT },
              8: { movement: { x: 1 } },
              9: { orientation: MapState.UP },
              10: { map_loc: new MapLocation(0, 13, 1) },
              11: { orientation: MapState.DOWN },
            }
          }
        }
      ),

    new Character(
        {
          label:    Labels.characters.ABBY,
          map_loc:  new MapLocation(33, 11, 2), 
          graphic:  "resources/images/characters/abby.png",
          modes:    [
              {
                state: StoryStates.INIT, 
                modes: [TextDialogMode.createCharacterTextFactory(
                  Labels.characters.ABBY, 
                  "... Drat! You made me lose points on love live!"
                  )]
              }
            ],
          initial_orientation:    MapState.RIGHT,
          interacts_with_player:  false
        }
      ),
    new Character(
        {
          label:    Labels.characters.ADEL,
          map_loc:  new MapLocation(103, 11, 6), 
          graphic:  "resources/images/characters/adel.png",
          modes:  [
              {
                state: StoryStates.INIT, 
                modes: [TextDialogMode.createCharacterTextFactory(
                  Labels.characters.ADEL, 
                  "Check out the spooky details on this vest that ch(SHERI) made for me!"
                  )]
              }
            ]
        }
      ),
    new Character(
        {
      label:	Labels.characters.ALEKS,
      map_loc:	new MapLocation(6, 5, 11), 
      graphic: "resources/images/characters/aleks.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.ALEKS, 
              "That ... thing ... with the blue eyes is still out there in the world somewhere, I know it ..."
              )]
          }
        ],
        initial_orientation: MapState.RIGHT
 }),
    new Character( {
      label:	Labels.characters.ALICE,
      map_loc:	new MapLocation(33, 12, 1), 
      graphic: "resources/images/characters/alice.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.ALICE, 
              "Noooo don't tell me any more spooky stories !!!"
              )]
          }
        ]
 }),
    new Character( {
      label:	Labels.characters.ALULA,
      map_loc:	new MapLocation(33, 13, 2), 
      graphic: "resources/images/characters/alula.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.ALULA, 
              "Don't judge me for my love of minions!"
              )]
          }
        ],
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.AMY,
      map_loc:	new MapLocation(4, 4, 7), 
      graphic: "resources/images/characters/amy.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.AMY, 
              "Hey... are you following us??"
              )]
          }
        ],
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.ANGELICA,
      map_loc:	new MapLocation(11, 9, 8), 
      graphic: "resources/images/characters/angelica.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.ANGELICA, 
              "Did you meet our cat friend yet? She is sooo cute!"
              )]
          }
        ], 
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.BETHANY,
      map_loc:	new MapLocation(6, 9, 11), 
      graphic: "resources/images/characters/bethany.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.BETHANY, 
              "Sometimes when I'm alone, I can hear footsteps outside my bedroom door ..."
              )]
          }
        ],
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.BROOKE,
      map_loc:	new MapLocation(32, 6, 14), 
      graphic: "resources/images/characters/brooke.png",
       modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.BROOKE, 
              "I think the first floor bathroom is haunted ..."
              )]
          }
        ]
 }),
  new Character( {
      label:	Labels.characters.BUDDY,
      map_loc:	new MapLocation(11, 9, 7), 
      graphic: "resources/images/characters/buddy.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createFactory(
              "A cute doll that is some combination of jack o'lantern, devil, and ghost.",
              function(){}
              ),
            TextDialogMode.createFactory(
              "... ... ...",
              function(){}
              ),
            TextDialogMode.createFactory(
              "It's odd, but you can't help feeling like ch(BUDDY) is listening to every word you say..."
              )]
          }
        ], 
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.FLO,
      map_loc:	new MapLocation(32, 6, 10), 
      graphic: "resources/images/characters/flo.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.FLO, 
              "I just flew in from DC."
              )]
          }
        ],
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.JAE,
      map_loc:	new MapLocation(14, 11, 9), 
      graphic: "resources/images/characters/jae.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.JAE, 
              "Hi, I'm ch(JAE) from konbanwa."
              )]
          }
        ],
        initial_orientation: MapState.RIGHT
 }),
    new Character( {
      label:	Labels.characters.LANYA,
      map_loc:	new MapLocation(32, 5, 3), 
      graphic: "resources/images/characters/lanya.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.LANYA,
              "&#9834;&#9835;&#9834; &#9834;&#9835;&#9834; &#9834;&#9835;&#9834;"
              ),
            TextDialogMode.createFactory(
              "... It's best not to disturb her while she plays."
              )]
          }
        ],
        initial_orientation: MapState.RIGHT,
        interacts_with_player: false
 }),
    new Character( {
      label:	Labels.characters.LEE,
      map_loc:	new MapLocation(22, 7, 3), 
      graphic: "resources/images/characters/lee.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.LEE, 
              "Let me know if you want your picture taken!"
              )]
          }
        ]
 }),
    new Character( {
      label:	Labels.characters.LISA,
      map_loc:	new MapLocation(4, 4, 6), 
      graphic: "resources/images/characters/lisa.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.LISA, 
              "We're going to play the board game 'Betrayal at the House on the Hill'  later!",
              function(){}
              ),
            TextDialogMode.createCharacterTextFactory(
              Labels.characters.LISA,
              "... What?",
              function(){}
              ),
            TextDialogMode.createCharacterTextFactory(
              Labels.characters.LISA,
              "... Oh no, it's not about *this* house... At least I don't *think* so..."
              )]
          }
        ],
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.MARTHA,
      map_loc:	new MapLocation(11, 7, 5), 
      graphic: "resources/images/characters/martha.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.MARTHA, 
              "Welcome to the Haus!",
              function(){}
              ),
            TextDialogMode.createCharacterTextFactory(
              Labels.characters.MARTHA,
              "Be sure to try the Fortune Cake ... you might find something special."
              )]
          }
        ]
 }),
    new Character( {
      label:	Labels.characters.MIRI,
      map_loc:	new MapLocation(11, 11, 5), 
      graphic: "resources/images/characters/miri.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.MIRI, 
              "I'm glad I'm not sleeping in the living room after what happened last year!"
              )]
          }
        ],
        initial_orientation: MapState.RIGHT
 }),
    new Character( {
      label:	Labels.characters.OLIVIA,
      map_loc:	new MapLocation(22, 5, 6), 
      graphic: "resources/images/characters/olivia.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.OLIVIA, 
              "Try some of these tarts! I made them myself!"
              )]
          }
        ],
        initial_orientation: MapState.RIGHT
 }),
    new Character( {
      label:	Labels.characters.PRODUCE,
      name:   Labels.character_names.PRODUCE,
      map_loc:	new MapLocation(32, 10, 8), 
      graphic: "resources/images/characters/produce.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.character_names.PRODUCE, 
              "Come attend the ritual after dinner tonight!"
              )]
          }
        ],
        initial_orientation: MapState.RIGHT
 }),
    new Character( {
      label:	Labels.characters.SHERI,
      map_loc:	new MapLocation(103, 9, 6), 
      graphic: "resources/images/characters/sheri.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.SHERI, 
              "I'm trying my best to be gothic for halloween, but I can't resist a little pink!"
              )]
          }
        ],
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.SKYLAR,
      map_loc:	new MapLocation(22, 10, 5), 
      graphic: "resources/images/characters/skylar.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.SKYLAR, 
              "I'm excited for Sunday Nunday tomorrow!"
              )]
          }
        ],
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.SOPHIA,
      map_loc:	new MapLocation(12, 14, 10), 
      graphic: "resources/images/characters/sophia.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.SOPHIA, 
              "I'm a cat and I looove DDR! Meow!"
              )]
          }
        ],
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.TAI,
      map_loc:	new MapLocation(11, 8, 5), 
      graphic: "resources/images/characters/tai.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.TAI, 
              "We went for a walk in the woods this morning. It was very beautiful."
              )]
          }
        ]
 }),
    new Character( {
      label:	Labels.characters.TESS,
      map_loc:	new MapLocation(22, 9, 9), 
      graphic: "resources/images/characters/tess.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.TESS, 
              "Dinner will be ready soon~"
              )]
          }
        ]
 }),
    new Character( {
      label:	Labels.characters.TOLA,
      map_loc:	new MapLocation(11, 9, 6), 
      graphic: "resources/images/characters/tola.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.TOLA, 
              "Meet my new friend ch(BUDDY)! He's a little spooky."
              )]
          }
        ],
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.TORI,
      map_loc:	new MapLocation(11, 7, 9), 
      graphic: "resources/images/characters/tori.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.TORI, 
              "AHHH!",
              function(){}
              ),
            TextDialogMode.createCharacterTextFactory(
              Labels.characters.TORI,
              "... My throat hurts from all this yelling!"
              ) ]
          }
        ],
        initial_orientation: MapState.UP
 }),
    new Character( {
      label:	Labels.characters.VALERIE,
      map_loc:	new MapLocation(101, 8, 13), 
      graphic: "resources/images/characters/valerie.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.VALERIE, 
              "I heard there's a ghost in our room that keeps opening and closing the closet door."
              )]
          }
        ],
        initial_orientation: MapState.UP
 }),
    new Character( {
      label:	Labels.characters.XIAOWEN,
      map_loc:	new MapLocation(22, 1, 8), 
      graphic: "resources/images/characters/xiaowen.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.XIAOWEN, 
              "Whatever you do, don't talk to the ghosts!"
              )]
          }
        ],
        initial_orientation: MapState.RIGHT
 }),
    new Character( {
      label:	Labels.characters.XIAOYU,
      map_loc:	new MapLocation(22, 3, 8), 
      graphic: "resources/images/characters/xiaoyu.png",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.XIAOYU, 
              "... back-to-back ..."
              )]
          }
        ],
        initial_orientation: MapState.LEFT
 }),
  ]
}
