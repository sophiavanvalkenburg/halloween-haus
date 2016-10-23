var Labels = {
  sounds: {
    /********* MUSIC ***************/
    OPENING: "opening",
    MAIN: "main",
    GHOST: "ghost",
    /******** EFFECTS **************/
    GET_ITEM: "get_item",
    MENU_NAV: "menu_nav",
    MENU_SELECT: "menu_select",
    ENTER_GHOST_MODE: "enter_ghost_mode",
    EXIT_GHOST_MODE: "exit_ghost_mode",
    RECEIVED_FORTUNE_BADGE: "received-fortune-badge",
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
    IN_FRONT_OF_GHOST_ALTAR: "in-front-of-ghost-altar",
    LOCKED_DOOR: "locked-door",
    LOCKED_DOOR_PORTAL: "locked-door-portal",
    BONES: "bones",
    HIDDEN_PORTAL: "hidden-portal",
    GHOST_POOL_LANDING: "ghost-pool-landing",
    GHOST_FOUNTAIN: "ghost-fountain"
  },
  items: {
    COIN: "coin",
    KEY: "key",
    MUSHROOM: "mushroom",
    BUTTON: "button",
    BONES: "bones",
    CREEPY_DOLL: "creepy-doll",
    MAP: "map",
    LOCK_OF_HAIR: "lock-of-hair",
    WINE: "wine",
    ANTIQUE_RING: "antique-ring",
    LIFE_PRESERVER: "life-preserver",
    WEDDING_RING: "wedding-ring",
    CORSAGE: "corsage",
    THIMBLE: "thimble",
    FORTUNE_BADGE: "fortune-badge"
  },
  item_names: {
    CREEPY_DOLL: "creepy doll",
    LOCK_OF_HAIR: "lock of hair",
    ANTIQUE_RING: "antique ring",
    LIFE_PRESERVER: "life preserver",
    WEDDING_RING: "wedding ring",
    FORTUNE_BADGE: "moss marchen fortune badge",
    CORSAGE: "pink corsage"
  },
  character_names: {
    PRODUCE:  "high priestess produce",

    GHOST: "ghost",
    BRIDE: "bride",
    GROOM: "groom",
    CHEF: "chef"
  },
  characters: {
    CALICO:   "calico",
    CALICO_GHOST: "calico_ghost",
    BUDDY_GHOST: "buddy_ghost",
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
    XIAOYU:   "xiaoyu",

    SARAH:   "sarah",
    KRISTA:   "krista",

    GHOST_01: "ghost_01",
    GHOST_02: "ghost_02",
    GHOST_03: "ghost_03",
    GHOST_04: "ghost_04",
    GHOST_05: "ghost_05",
    GHOST_06: "ghost_06",
    GHOST_07: "ghost_07",
    GHOST_08: "ghost_08",
    GHOST_09: "ghost_09",
    GHOST_10: "ghost_10",
    GHOST_11: "ghost_11",
    GHOST_12: "ghost_12",
    GHOST_13: "ghost_13",
    GHOST_14: "ghost_14",
    GHOST_15: "ghost_15",
    GHOST_16: "ghost_16",
    GHOST_17: "ghost_17",
    GHOST_18: "ghost_18",
    GHOST_19: "ghost_19",
    GHOST_20: "ghost_20",
    GHOST_21: "ghost_21",
    GHOST_22: "ghost_22",
    GHOST_23: "ghost_23",
    GHOST_24: "ghost_24",
    GHOST_25: "ghost_25",
    GHOST_26: "ghost_26",
    GHOST_27: "ghost_27",
    GHOST_28: "ghost_28",
    GHOST_29: "ghost_29",
    GHOST_30: "ghost_30",
    GHOST_31: "ghost_31",
    GHOST_32: "ghost_32",
    GHOST_33: "ghost_33",
    GHOST_34: "ghost_34",
    GHOST_35: "ghost_35",
    GHOST_36: "ghost_36",
    GHOST_37: "ghost_37",
    GHOST_38: "ghost_38",
    GHOST_39: "ghost_39",
    GHOST_40: "ghost_40",
  }
}

var Config = {
  DEBUG: true,
  TIME_COUNTER: 1000,
  INITIAL_MAP: 0,
  INITIAL_MUSIC: Labels.sounds.OPENING,
  CREDITS: [
    "~~Credits~~",
    "Programming and graphics by Sophia", 
    "~Music~",
    "\"Pokemon Tower Theme\" - Pokemon",
    "\"This Is Halloween\" -  Nightmare Before Christmas (Gunday Monday Chiptune Version)",
    "\"Lavender Town Theme\" - Pokemon",
    "~Sound Effects~",
    "LittleRobotSoundFactory (freesound.org)"
  ], 
  HOW_TO: [
    "~~How To Play~~",
    "This game is best played on Google Chrome.",
    "Movement: Arrow Buttons",
    "Select / Object Interaction: `Enter` Button or `Z` Button",
    "Inventory: `Shift` Button or `I` Button",
    "Item pickup: The game will prompt you to pick up items.",
    "This is an exploration game. Talk to characters and objects to see if you can uncover the dark secrets of the Haus!"
  ],
  sounds: {
    channels: {
      MUSIC: { 
        label: Labels.channels.MUSIC,
        volume: 0.75,
      },
      EFFECTS: {
        label: Labels.channels.EFFECTS,
        volume: 0.4
      }
    },
    files: [
      /********* MUSIC ***************/
      { 
        label: Labels.sounds.MAIN, 
        src: "resources/sounds/music/Gunday Monday - This Is Halloween Chiptune.mp3",
        loop: true
      },
      { 
        label: Labels.sounds.OPENING, 
        src: "resources/sounds/music/132-pokemon-tower.mp3",
        loop: true
      },
      { 
        label: Labels.sounds.GHOST, 
        src: "resources/sounds/music/131-lavender-town-s-theme.mp3",
        loop: true
      },
      {
        label: Labels.sounds.GET_ITEM,
        src: "resources/sounds/effects/Collect_Point_00.mp3",
        loop: false
      },
      {
        label: Labels.sounds.MENU_NAV,
        src: "resources/sounds/effects/Menu_Navigate_03.mp3",
        loop:false
      },
      {
        label: Labels.sounds.MENU_SELECT,
        src: "resources/sounds/effects/Collect_Point_02.mp3",
        loop: false
      },
      {
        label: Labels.sounds.ENTER_GHOST_MODE,
        src: "resources/sounds/effects/LA_Dungeon_Teleport_Appear.mp3",
        loop: false
      },
      {
        label: Labels.sounds.EXIT_GHOST_MODE,
        src: "resources/sounds/effects/LA_GreatFairy_Vanish.mp3",
        loop: false
      },
      {
        label: Labels.sounds.RECEIVED_FORTUNE_BADGE,
        src: "resources/sounds/effects/Jingle_Achievement_01.mp3",
        loop: false
      }
    ]
  },
  preload: [
    "resources/images/icons/right-select-arrow.png",
  ],
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
    "resources/maps/ghost/map0.json", 
    "resources/maps/ghost/map1.json", 
    "resources/maps/ghost/map11.json", 
    "resources/maps/ghost/map12.json", 
    "resources/maps/ghost/map2.json", 
    "resources/maps/ghost/map21.json",
    "resources/maps/ghost/map22.json",
    "resources/maps/ghost/map23.json",
    "resources/maps/ghost/map24.json",
    "resources/maps/ghost/map31.json",
    "resources/maps/ghost/map32.json",
    "resources/maps/ghost/map33.json",
    "resources/maps/ghost/map4.json",
    "resources/maps/ghost/map5.json", 
    "resources/maps/ghost/map6.json",
    "resources/maps/ghost/map7.json",
    "resources/maps/ghost/map8.json",
    "resources/maps/ghost/map9.json",
    "resources/maps/ghost/map91.json",
    "resources/maps/ghost/map92.json",
    "resources/maps/ghost/map93.json",
    "resources/maps/ghost/map94.json",
    "resources/maps/ghost/map95.json",
    "resources/maps/ghost/map96.json",
    "resources/maps/ghost/map10.json",
    "resources/maps/ghost/map101.json",
    "resources/maps/ghost/map102.json",
    "resources/maps/ghost/map103.json",
    "resources/maps/ghost/map104.json",
    "resources/maps/ghost/map105.json",
    "resources/maps/ghost/map106.json",
    "resources/maps/ghost/map14.json",
    "resources/maps/ghost/map141.json",
    "resources/maps/ghost/map142.json",
    "resources/maps/ghost/map143.json",
    "resources/maps/ghost/map144.json",
    "resources/maps/ghost/map145.json",
    "resources/maps/ghost/map146.json",
    "resources/maps/ghost/map147.json",
    "resources/maps/ghost/map15.json",
    "resources/maps/ghost/map16.json",
    "resources/maps/ghost/map17.json",
    "resources/maps/ghost/map18.json",
    "resources/maps/ghost/map19.json",
    "resources/maps/ghost/map20.json",
    "resources/maps/ghost/map13.json",
  ],
  items: [
    new Item(
        {
          label: Labels.items.KEY,
          name: Labels.items.KEY,
          map_loc: new MapLocation(622, 15, 11),
          graphic: "resources/images/items/key.png"
        }
      ),
    new Item(
        {
          label: Labels.items.MUSHROOM,
          name: Labels.items.MUSHROOM,
          map_loc: new MapLocation(620, 13, 14),
          graphic: "resources/images/items/mushroom.png"
        }
      ),
    new Item(
        {
          label: Labels.items.LIFE_PRESERVER,
          name: Labels.item_names.LIFE_PRESERVER,
          map_loc: new MapLocation(68, 3, 6),
          graphic: "resources/images/items/life-preserver.png"
        }
    ),
    new Item(
        {
          label: Labels.items.COIN,
          name: Labels.items.COIN
        }
    ),
    new Item(
        {
          label: Labels.items.BUTTON,
          name: Labels.items.BUTTON
        }
    ),
    new Item(
        {
          label: Labels.items.BONES,
          name: Labels.items.BONES
        }
    ),
    new Item(
        {
          label: Labels.items.CREEPY_DOLL,
          name: Labels.item_names.CREEPY_DOLL
        }
    ),
    new Item(
        {
          label: Labels.items.FORTUNE_BADGE,
          name: Labels.item_names.FORTUNE_BADGE
        }
    ),
    new Item(
        {
          label: Labels.items.THIMBLE,
          name: Labels.items.THIMBLE
        }
    ),
    new Item(
        {
          label: Labels.items.CORSAGE,
          name: Labels.item_names.CORSAGE
        }
    ),
    new Item(
        {
          label: Labels.items.WEDDING_RING,
          name: Labels.item_names.WEDDING_RING
        }
    ),
    new Item(
        {
          label: Labels.items.ANTIQUE_RING,
          name: Labels.item_names.ANTIQUE_RING
        }
    ),
    new Item(
        {
          label: Labels.items.WINE,
          name: Labels.items.WINE
        }
    ),
    new Item(
        {
          label: Labels.items.LOCK_OF_HAIR,
          name: Labels.item_names.LOCK_OF_HAIR
        }
    ),
    new Item(
        {
          label: Labels.items.MAP,
          name: Labels.items.MAP
        }
    )
  ],
  player: new Character(
      {
        label:    Labels.characters.YOU,
        map_loc:  new MapLocation(0, 10, 7), 
        graphic:  "resources/images/characters/player-move.gif",
        is_player: true
      }
      ),
  characters: [
    new Character(
        {
          label:    Labels.characters.CALICO, 
          map_loc:  new MapLocation(0, 13, 4),
          graphic:  "resources/images/characters/cat-move.gif", 
          modes:    [
            {
              state: StoryStates.INIT, 
              modes: [TextDialogMode.createCharacterTextFactory(
                Labels.characters.CALICO, 
                "Meow!"
                )
              ]
            }
          ],
          initial_orientation:    MapState.DOWN,
          interacts_with_player:  false,
          animation: {
            loop: true,
            instructions: [
              { movement: { y: 1, x: -1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: -1, x: -1 } },
            ]
          }
        }
      ),

    new Character(
        {
          label:    Labels.characters.ABBY,
          map_loc:  new MapLocation(33, 11, 2), 
          graphic:  "resources/images/characters/abby-move.gif",
          modes:    [
              {
                state: StoryStates.INIT, 
                modes: [TextDialogMode.createCharacterTextFactory(
                  Labels.characters.ABBY, 
                  "...",
                  function(){}
                  ),
                  TextDialogMode.createCharacterTextFactory(
                    Labels.characters.ABBY,
                    "Drat! You made me lose points on love live!"
                  )
                    ]
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
          graphic:  "resources/images/characters/adel-move.gif",
          modes:  [
              {
                state: StoryStates.INIT, 
                modes: [TextDialogMode.createCharacterTextFactory(
                  Labels.characters.ADEL, 
                  "Check out the spooky details on this vest that ch(SHERI) made for me!"
                  )]
              }
            ],
          animation: {
            loop: true,
            instructions: [
              { orientation: MapState.LEFT },
              { movement: { x: -1 } },
              { wait: 1 },
              { orientation: MapState.RIGHT },
              { movement: { x: 1} },
              { wait: 1 },
              { movement: { x: 1} },
              { wait: 1 },
              { orientation: MapState.LEFT },
              { movement: { x: -1} },
              { orientation: MapState.DOWN },
              { wait: 3 },
              { movement: { y: 1} },
              { orientation: MapState.UP },
              { movement: { y: -1} },
              { wait: 3 }
            ]
          }
        }
      ),
    new Character(
        {
      label:	Labels.characters.ALEKS,
      map_loc:	new MapLocation(6, 5, 11), 
      graphic: "resources/images/characters/aleks-move.gif",
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
      graphic: "resources/images/characters/alice-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.ALICE, 
              "Noooo don't tell me any more spooky stories !!!",
              function(){}
              ), TextDialogMode.createCharacterTextFactory(
                  Labels.characters.ALICE,
                  "I could really use another drink right now ..."
                )]
          }
        ]
 }),
    new Character( {
      label:	Labels.characters.ALULA,
      map_loc:	new MapLocation(33, 13, 2), 
      graphic: "resources/images/characters/alula-move.gif",
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
      graphic: "resources/images/characters/amy-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.AMY, 
              "Hey...",
              function(){}
              ),
              TextDialogMode.createCharacterTextFactory(
                Labels.characters.AMY,
                "Are you following us??"
              )]
          }
        ],
      initial_orientation: MapState.LEFT,
      animation: {
            loop: true,
            instructions: [
              { movement: { x: -1 } },
              { movement: { x: -1 } },
              { orientation: MapState.DOWN },
              { wait: 2 },
              { movement: { y: 1} },
              { movement: { y: 1} },
              { movement: { y: 1} },
              { movement: { y: 1} },
              { movement: { y: 1} },
              { movement: { y: 1} },
              { orientation: MapState.RIGHT },
              { wait: 2 },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { orientation: MapState.UP },
              { wait: 2 },
              { movement: { y: -1} },
              { movement: { y: -1} },
              { movement: { y: -1} },
              { movement: { y: -1} },
              { movement: { y: -1} },
              { movement: { y: -1} },
              { orientation: MapState.LEFT },
              { wait: 2 },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
            ]
      }
 }),
    new Character( {
      label:	Labels.characters.ANGELICA,
      map_loc:	new MapLocation(11, 9, 8), 
      graphic: "resources/images/characters/angelica-move.gif",
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
      graphic: "resources/images/characters/bethany-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.BETHANY, 
              "Sometimes when I'm alone, I can hear footsteps outside my bedroom door ..."
              )]
          }
        ],
      initial_orientation: MapState.UP,
      animation: {
        loop: true,
        instructions: [
          { movement: { y: -1 } },
          { movement: { y: -1 } },
          { orientation: MapState.LEFT },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { orientation: MapState.DOWN },
          { movement: { y: 1 } },
          { movement: { y: 1 } },
          { movement: { y: 1 } },
          { movement: { y: 1 } },
          { orientation: MapState.RIGHT },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { orientation: MapState.UP },
          { movement: { y: -1 } },
          { movement: { y: -1 } },
        ]
      }
 }),
    new Character( {
      label:	Labels.characters.BROOKE,
      map_loc:	new MapLocation(32, 7, 15), 
      graphic: "resources/images/characters/brooke-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.BROOKE, 
              "I think the first floor bathroom is haunted ..."
              )]
          }
        ],
      initial_orientation: MapState.RIGHT,
      animation: {
        loop: true,
        instructions: [
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { orientation: MapState.LEFT },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { orientation: MapState.RIGHT },
        ]
      }
 }),
  new Character( {
      label:	Labels.characters.BUDDY,
      map_loc:	new MapLocation(11, 9, 7), 
      graphic: "resources/images/characters/buddy-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createFactory(
              "ch(BUDDY), a cute doll that is some combination of jack o'lantern, devil, and ghost.",
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
      graphic: "resources/images/characters/flo-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.FLO, 
              "I'm a RAVENCLAW. What's YOUR House??"
              )]
          }
        ],
      initial_orientation: MapState.LEFT,
      animation: {
        loop: true,
        instructions: [
          { orientation: MapState.DOWN },
          { movement: { y: 1 } },
          { wait: 5 },
          { orientation: MapState.UP },
          { movement: { y: -1} },
          { wait: 5 }
        ]
      }
 }),
    new Character( {
      label:	Labels.characters.JAE,
      map_loc:	new MapLocation(14, 11, 9), 
      graphic: "resources/images/characters/jae-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.JAE, 
              "Hi, I'm ch(JAE) from konbanwa."
              )]
          }
        ],
      initial_orientation: MapState.RIGHT,
      animation: {
        loop: true,
        instructions: [
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { orientation: MapState.DOWN },
          { movement: { y: 1 } },
          { orientation: MapState.LEFT },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { orientation: MapState.UP },
          { movement: { y: -1 } },
          { orientation: MapState.RIGHT },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
        ]
      }
 }),
    new Character( {
      label:	Labels.characters.LANYA,
      map_loc:	new MapLocation(32, 5, 3), 
      graphic: "resources/images/characters/lanya-move.gif",
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
      graphic: "resources/images/characters/lee-move.gif",
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
      graphic: "resources/images/characters/lisa-move.gif",
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
      initial_orientation: MapState.LEFT,
      animation: {
            loop: true,
            instructions: [
              { movement: { x: -1 } },
              { movement: { x: -1 } },
              { wait: 1 },
              { movement: { x: -1 } },
              { orientation: MapState.DOWN, movement: { y: 1 }},
              { movement: { y: 1} },
              { movement: { y: 1} },
              { movement: { y: 1} },
              { movement: { y: 1} },
              { movement: { y: 1} },
              { movement: { y: 1} },
              { wait: 1 },
              { movement: { y: 1} },
              { orientation: MapState.RIGHT, movement: { x: 1 } },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { movement: { x: 1} },
              { wait: 1 },
              { movement: { x: 1} },
              { orientation: MapState.UP, movement: {y: -1}},
              { movement: { y: -1} },
              { movement: { y: -1} },
              { movement: { y: -1} },
              { movement: { y: -1} },
              { movement: { y: -1} },
              { movement: { y: -1} },
              { wait: 1 },
              { movement: { y: -1} },
              { orientation: MapState.LEFT, movement: {x: -1}},
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
              { movement: { x: -1} },
            ]
      }
 }),
    new Character( {
      label:	Labels.characters.MARTHA,
      map_loc:	new MapLocation(11, 7, 5), 
      graphic: "resources/images/characters/martha-move.gif",
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
              "Did you see the " + Renderer.objectName("fortune cake") + " in the dining room?",
              function(){}
              ),
            TextDialogMode.createCharacterTextFactory(
              Labels.characters.MARTHA,
              "Unfortunately I'm missing the 5 " + Renderer.objectName("fortunes") + " that belong in the cake.",
              function(){}
              ),
            TextDialogMode.createCharacterTextFactory(
              Labels.characters.MARTHA,
              "The 5 items are a " + Renderer.objectName("coin") + ", a " + Renderer.objectName("key") + ", a " + Renderer.objectName("button") + ", a " + Renderer.objectName("thimble") + ", and an " + Renderer.objectName("antique ring") + ".",
              function(){}
            ),
            TextDialogMode.createCharacterTextFactory(
              Labels.characters.MARTHA,
              "If you can help me find them I will give you a small gift!"
              )]
          }
        ]
 }),
    new Character( {
      label:	Labels.characters.MIRI,
      map_loc:	new MapLocation(11, 11, 5), 
      graphic: "resources/images/characters/miri-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.MIRI, 
              "I'm glad I'm not sleeping in the living room after what happened last time!"
              )]
          }
        ],
        initial_orientation: MapState.UP,
      animation: {
        loop: true,
        instructions: [
          { movement: { y: -1 } },
          { wait: 5 },
          { orientation: MapState.LEFT },
          { orientation: MapState.DOWN },
          { movement: { y: 1} },
          { movement: { y: 1} },
          { movement: { y: 1} },
          { wait: 5 },
          { orientation: MapState.LEFT },
          { orientation: MapState.UP },
          { movement: { y: -1 } },
          { movement: { y: -1 } },
        ]
      }
 }),
    new Character( {
      label:	Labels.characters.OLIVIA,
      map_loc:	new MapLocation(22, 5, 6), 
      graphic: "resources/images/characters/olivia-move.gif",
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
      graphic: "resources/images/characters/produce-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.character_names.PRODUCE, 
              "Come attend the ritual after dinner tonight!",
              function(){}
              ), TextDialogMode.createCharacterTextFactory(
                Labels.character_names.PRODUCE,
                "There are lots of spooky things in the woods.",
                function(){}
              ), TextDialogMode.createCharacterTextFactory(
                Labels.character_names.PRODUCE,
                "If you find anything there, you can bring it to me and put it on the table!"
              )]
          }
        ],
        initial_orientation: MapState.RIGHT
 }),
    new Character( {
      label:	Labels.characters.SHERI,
      map_loc:	new MapLocation(103, 9, 6), 
      graphic: "resources/images/characters/sheri-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.SHERI, 
              "I'm trying my best to be gothic for halloween, but I can't resist a little pink!",
              function(){}
              ),
              TextDialogMode.createCharacterTextFactory(
                Labels.characters.SHERI,
                "I love all things PINK!"
              )]
          }
        ],
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.SKYLAR,
      map_loc:	new MapLocation(22, 10, 5), 
      graphic: "resources/images/characters/skylar-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.SKYLAR, 
              "Did you know ch(MARTHA) makes necklaces out of obj(LOCKS OF HAIR)?"
              )
            ]
          }
        ],
        initial_orientation: MapState.LEFT
 }),
    new Character( {
      label:	Labels.characters.SOPHIA,
      map_loc:	new MapLocation(12, 14, 10), 
      graphic: "resources/images/characters/sophia-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.SOPHIA, 
              "I'm a cat and I looove DDR! Meow!"
              )]
          }
        ],
      initial_orientation: MapState.LEFT,
      animation: {
        loop: true,
        instructions: [
          { movement: { y: -1} },
          { movement: { y: 1} },
        ]
      }
 }),
    new Character( {
      label:	Labels.characters.TAI,
      map_loc:	new MapLocation(11, 8, 5), 
      graphic: "resources/images/characters/tai-move.gif",
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
      graphic: "resources/images/characters/tess-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
                Labels.characters.TESS, 
                "Dinner will be ready soon~",
                function(){}
              ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.TESS,
                "The obj(MUSHROOMS) are my favorite!"
              )]
          }
        ],
      animation: {
        loop: true,
        instructions: [
          { wait: 1 },
          { movement: { x: -1 } },
          { wait: 1 },
          { movement: { x: -1 } },
          { wait: 1 },
          { movement: { x: -1 } },
          { wait: 1 },
          { movement: { x: -1 } },
          { wait: 1 },
          { movement: { x: 1 } },
          { wait: 1 },
          { movement: { x: 1 } },
          { wait: 1 },
          { movement: { x: 1 } },
          { wait: 1 },
          { movement: { x: 1 } },
        ]
      }
 }),
    new Character( {
      label:	Labels.characters.TOLA,
      map_loc:	new MapLocation(11, 9, 6), 
      graphic: "resources/images/characters/tola-move.gif",
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
      graphic: "resources/images/characters/tori-move.gif",
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
              "... I thought you were a ghost!"
              ) ]
          }
        ],
        initial_orientation: MapState.UP
 }),
    new Character( {
      label:	Labels.characters.VALERIE,
      map_loc:	new MapLocation(101, 9, 11), 
      graphic: "resources/images/characters/valerie-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.VALERIE, 
              "I heard there's a ghost in our room that keeps opening and closing the closet door."
              )]
          }
        ]
 }),
    new Character( {
      label:	Labels.characters.XIAOWEN,
      map_loc:	new MapLocation(22, 1, 8), 
      graphic: "resources/images/characters/xiaowen-move.gif",
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
      graphic: "resources/images/characters/xiaoyu-move.gif",
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
    new Character( {
      label: Labels.characters.GHOST_01,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(624, 4, 15),
      graphic: "resources/images/characters/ghost-fat.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "mmm ... tasty waist ties ..."
            )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_02,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(60, 5, 1),
      graphic: "resources/images/characters/ghost-happy.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "It was me!",
            function(){}
            ), TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "I blew open the living room windows last time."
            )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_03,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(60, 15, 5),
      graphic: "resources/images/characters/ghost-impish.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "Heeeere kitty kitty!"
          )]
        }
      ],
      animation: {
        loop: true,
        instructions: [
            { wait: 1},
            { movement: { x: -1 } },
            { movement: { y: -1, x: -1 } },
            { movement: { y: 1, x: -1 } },
            { movement: { y: -1, x: -1 } },
            { movement: { y: 1, x: -1 } },
            { movement: { y: -1, x: -1 } },
            { movement: { y: 1, x: -1 } },
            { movement: { x: -1 } },
            { wait: 1 },
            { movement: { y: 1 } },
            { movement: { y: 1, x: -1 } },
            { movement: { y: 1, x: 1 } },
            { movement: { y: 1, x: -1 } },
            { movement: { y: 1, x: 1 } },
            { movement: { y: 1 } },
            { wait: 1 },
            { movement: { x: 1 } },
            { movement: { y: 1, x: 1 } },
            { movement: { y: -1, x: 1 } },
            { movement: { y: 1, x: 1 } },
            { movement: { y: -1, x: 1 } },
            { movement: { y: 1, x: 1 } },
            { movement: { y: -1, x: 1 } },
            { movement: { x: 1 } },
            { wait: 1 },
            { movement: { y: -1 } },
            { movement: { y: -1, x: 1 } },
            { movement: { y: -1, x: -1 } },
            { movement: { y: -1, x: 1 } },
            { movement: { y: -1, x: -1 } },
            { movement: { y: -1 } },
         ]
      },
      interacts_with_player:  false
 }),
     new Character(
        {
          label:    Labels.characters.CALICO_GHOST, 
          map_loc:  new MapLocation(60, 13, 4),
          graphic:  "resources/images/characters/cat-move.gif", 
          modes:    [
            {
              state: StoryStates.INIT, 
              modes: [TextDialogMode.createCharacterTextFactory(
                Labels.characters.CALICO, 
                "...",
                function(){}
                ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.CALICO,
                "Don't you know? This place burned down 30 years ago ..."
                )
              ]
            }
          ],
          animation: {
            loop: true,
            instructions: [
              { movement: { y: 1, x: -1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: 1, x: 1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: -1, x: 1 } },
              { movement: { y: -1, x: -1 } },
              { movement: { y: 1, x: -1 } },
              { movement: { y: -1, x: -1 } },
            ]
          },
         interacts_with_player: false
}),
    new Character( {
      label: Labels.characters.GHOST_04,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(632, 11, 10),
      graphic: "resources/images/characters/ghost-cat.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "Welcome to the land of the dead! To return to the land of the living, just talk to the skull again."
          )]
        }
      ],
      interacts_with_player:  false
}),
    new Character( {
      label: Labels.characters.GHOST_05,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(632, 7, 4),
      graphic: "resources/images/characters/ghost-sad.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "This music reminds me of years long past..."
          )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_06,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(631, 15, 5),
      graphic: "resources/images/characters/ghost-bored.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "I wish I could carve pumpkins."
          )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_07,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(631, 16, 9),
      graphic: "resources/images/characters/ghost-angry.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "No!"
          ), TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "You are not allowed up there."
          )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_08,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(622, 5, 9),
      graphic: "resources/images/characters/ghost-fat.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "*buuuuurp*",
            function(){}
          ), TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "Wow, this wedding buffet is delicious!"
          )]
        }
      ],
      animation: {
        loop: true,
        instructions: [
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
        ]
      },
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_09,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(67, 5, 4),
      graphic: "resources/images/characters/ghost-bored.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "When I was alive, I would come to this fountain to pray."
          )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_10,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(67, 5, 6),
      graphic: "resources/images/characters/ghost-unimpressed.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "You want to know why these pillars are here?",
            function(){}
          ), TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "... Don't ask me, I'm just a ghost."
          )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_11,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(68, 12, 9),
      graphic: "resources/images/characters/ghost-tongue.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "BOO!"
          )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_12,
      name: Labels.character_names.GROOM,
      map_loc: new MapLocation(68, 11, 2),
      graphic: "resources/images/characters/ghost-groom.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GROOM,
            "We got married here 30 years ago."
          )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_13,
      name: Labels.character_names.BRIDE,
      map_loc: new MapLocation(68, 12, 2),
      graphic: "resources/images/characters/ghost-bride.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.BRIDE,
            "Unfortunately I lost the " + Renderer.objectName("wedding ring") + ". Can you help me find it?"
          )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_14,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(68, 7, 9),
      graphic: "resources/images/characters/ghost-sad.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "I told them I didn't know how to swim..."
          )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_15,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(64, 9, 4),
      graphic: "resources/images/characters/ghost-unimpressed.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "The hilltop glowed red and our anguished cries could be heard all the way down in the valley below."
          )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_16,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(66, 7, 8),
      graphic: "resources/images/characters/ghost-sad.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "I'm terrified of fire!!"
          )]
        }
      ],
      animation: {
        loop: true,
        instructions: [
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { y: 1 } },
          { movement: { y: 1 } },
          { movement: { y: 1 } },
          { movement: { y: 1 } },
          { movement: { y: 1 } },
          { movement: { y: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { y: -1 } },
          { movement: { y: -1 } },
          { movement: { y: -1 } },
          { movement: { y: -1 } },
          { movement: { y: -1 } },
          { movement: { y: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } }
        ]
      },
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_17,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(621, 9, 14),
      graphic: "resources/images/characters/ghost-fat.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "My favorite snack is chocopie!"
          )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_18,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(611, 8, 9),
      graphic: "resources/images/characters/ghost-impish.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "Someone should carve ME on a pumpkin!"
          )]
        }
      ],
      interacts_with_player:  false
 }),
    new Character( {
      label: Labels.characters.GHOST_19,
      name: Labels.character_names.CHEF,
      map_loc: new MapLocation(611, 5, 7),
      graphic: "resources/images/characters/ghost-chef.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.CHEF,
            "Go away! Shoo!",
            function(){}
          ), TextDialogMode.createCharacterTextFactory(
            Labels.character_names.CHEF,
            "I have to finish making the food for the wedding banquet before the guests arrive!"
          )]
        }
      ],
      animation: {
        loop: true,
        instructions: [
          { movement: { y: -1 } },
          { movement: { y: 1 } },
          { movement: { y: 1 } },
          { movement: { y: -1 } },
        ]
      },
      interacts_with_player:  false

 }),
  new Character( {
      label: Labels.characters.GHOST_20,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(612, 14, 11),
      graphic: "resources/images/characters/ghost-happy.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "My favorite game is Super Mario Bros!"
          )]
        }
      ],
      interacts_with_player:  false
 }),
  new Character( {
      label: Labels.characters.GHOST_21,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(612, 15, 8),
      graphic: "resources/images/characters/ghost-impish.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "I just bought a new NES!"
          )]
        }
      ],
      interacts_with_player:  false
 }),
  new Character( {
      label: Labels.characters.GHOST_22,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(612, 15, 10),
      graphic: "resources/images/characters/ghost-sad.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "c-come play with us..."
          )]
        }
      ],
      interacts_with_player:  false
 }),
  new Character( {
      label: Labels.characters.GHOST_23,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(633, 12, 3),
      graphic: "resources/images/characters/ghost-sad.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "I wish I could play too..."
          )]
        }
      ],
      interacts_with_player:  false
 }),
  new Character( {
      label: Labels.characters.GHOST_24,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(6101, 12, 13),
      graphic: "resources/images/characters/ghost-happy.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "The closet is where all my stuff is, so of course I need to open the door sometimes!"
          )]
        }
      ],
      interacts_with_player:  false
 }),
  new Character( {
      label: Labels.characters.GHOST_25,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(693, 5, 11),
      graphic: "resources/images/characters/ghost-bored.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "I have to go help my dad prepare the food downstairs..."
          )]
        }
      ],
      interacts_with_player:  false
 }),
  new Character( {
      label: Labels.characters.GHOST_26,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(691, 4, 4),
      graphic: "resources/images/characters/ghost-sleepy.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "...zZzZzZzZz..."
          )]
        }
      ],
      interacts_with_player: false
 }),
  new Character( {
      label: Labels.characters.GHOST_27,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(692, 6, 6),
      graphic: "resources/images/characters/ghost-sad.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "OUCH!",
            function(){}
          ), TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "The floor is HOT!!"
          )]
        }
      ],
      animation: {
        loop: true,
        instructions: [
          { movement: { y: 1 } },
          { movement: { y: -1 } },
        ]
      },
      interacts_with_player:  false

 }),
  new Character( {
      label: Labels.characters.GHOST_28,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(6141, 13, 6),
      graphic: "resources/images/characters/ghost-unimpressed.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "Don't look under the bed."
          )]
        }
      ],
      interacts_with_player:  false
 }),
  new Character( {
      label: Labels.characters.GHOST_29,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(6143, 4, 12),
      graphic: "resources/images/characters/ghost-sad.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "Have you seen my roommate?"
          )]
        }
      ],
      interacts_with_player:  false
 }),
  new Character( {
      label: Labels.characters.GHOST_30,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(614, 14, 8),
      graphic: "resources/images/characters/ghost-sad.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "They took me out of my room, and now I can't find my way back...If only I had a obj(MAP) to guide me."
          )]
        }
      ],
      interacts_with_player:  false
 }),
  new Character( {
      label: Labels.characters.GHOST_31,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(6105, 4, 7),
      graphic: "resources/images/characters/ghost-sad.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "Why won't you touch me?"
          )]
        }
      ],
      interacts_with_player:  false
 }),
  new Character( {
      label: Labels.characters.GHOST_32,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(6142, 4, 8),
      graphic: "resources/images/characters/ghost-bored.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "I died in this room.",
            function(){}
          ), TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "Was it ... 30 years ago already?"
          )]
        }
      ],
      interacts_with_player:  false
 }),
  new Character( {
      label: Labels.characters.GHOST_33,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(610, 3, 10),
      graphic: "resources/images/characters/ghost-sleepy.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "..."
          )]
        }
      ],
      interacts_with_player:  false

 }),
  new Character( {
      label: Labels.characters.GHOST_34,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(614, 10, 9),
      graphic: "resources/images/characters/ghost-sad.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "...",
            function(){}
          ), TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "Do you want to wear the red dress?"
          )]
        }
      ],
      animation: {
        loop: true,
        instructions: [
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: 1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
          { movement: { x: -1 } },
        ]
      },
      interacts_with_player:  false

 }),
  new Character( {
      label:	Labels.characters.BUDDY_GHOST,
      map_loc:	new MapLocation(611, 9, 7), 
      graphic: "resources/images/characters/buddy-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.BUDDY,
              "...",
              function(){}
              ), TextDialogMode.createCharacterTextFactory(
              Labels.characters.BUDDY,
              "Why hello, new friend ..."
              )]
          }
        ], 
        initial_orientation: MapState.LEFT
 }),
  new Character( {
      label: Labels.characters.GHOST_35,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(611, 4, 3),
      graphic: "resources/images/characters/ghost-cat.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "MEOW!"
          )]
        }
      ],
      interacts_with_player:  false
}),
  new Character( {
      label: Labels.characters.GHOST_36,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(6103, 11, 3),
      graphic: "resources/images/characters/ghost-cat.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "nya~"
          )]
        }
      ],
      interacts_with_player:  false
}),
  new Character( {
      label: Labels.characters.GHOST_37,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(694, 12, 8),
      graphic: "resources/images/characters/ghost-cat.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "nya~"
          )]
        }
      ],
      interacts_with_player:  false
}),
  new Character( {
      label: Labels.characters.GHOST_38,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(6141, 10, 7),
      graphic: "resources/images/characters/ghost-sad.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "HELP! Have you seen my " + Renderer.objectName("dolly") + "?"
          )]
        }
      ],
      interacts_with_player:  false
}),
  new Character( {
      label: Labels.characters.GHOST_39,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(614, 16, 14),
      graphic: "resources/images/characters/ghost-angry.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "No!"
          ), TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "You are not allowed down there."
          )]
        }
      ],
      interacts_with_player:  false
}),
  new Character( {
      label: Labels.characters.GHOST_40,
      name: Labels.character_names.GHOST,
      map_loc: new MapLocation(6104, 4, 11),
      graphic: "resources/images/characters/ghost-happy.gif",
      modes: [
        {
          state: StoryStates.INIT,
          modes: [TextDialogMode.createCharacterTextFactory(
            Labels.character_names.GHOST,
            "You found me! Now it's your turn to hide."
          )]
        }
      ],
      interacts_with_player:  false
}),
  new Character( {
      label:	Labels.characters.SARAH,
      map_loc:	new MapLocation(613, 8, 9), 
      graphic: "resources/images/characters/sarah-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.SARAH, 
              "She used to place her pretty arms about my neck, draw me to her...",
              function(){}
            ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.SARAH,
                "...and laying her cheek to mine, murmur with her lips near my ear...",
                function(){}
            ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.SARAH,
                "'Dearest, your little heart is wounded...",
                function(){}
            ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.SARAH,
                "...think me not cruel because I obey the irresistible law of my strength and weakness...",
                function(){}
            ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.SARAH,
                "...if your dear heart is wounded, my wild heart bleeds with yours...",
                function(){}
            ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.SARAH,
                "In the rapture of my enormous humiliation I live in your warm life...",
                function(){}
            ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.SARAH,
                "...and you shall die--die, sweetly die--into mine.'"
            )]
          }
        ],
 }),
  new Character( {
      label:	Labels.characters.KRISTA,
      map_loc:	new MapLocation(613, 9, 9), 
      graphic: "resources/images/characters/krista-move.gif",
      modes:	[
          {
            state: StoryStates.INIT, 
            modes: [TextDialogMode.createCharacterTextFactory(
              Labels.characters.KRISTA, 
              "She used to place her pretty arms about my neck, draw me to her...",
              function(){}
            ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.KRISTA,
                "...and laying her cheek to mine, murmur with her lips near my ear...",
                function(){}
            ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.KRISTA,
                "'Dearest, your little heart is wounded...",
                function(){}
            ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.KRISTA,
                "...think me not cruel because I obey the irresistible law of my strength and weakness...",
                function(){}
            ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.KRISTA,
                "...if your dear heart is wounded, my wild heart bleeds with yours...",
                function(){}
            ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.KRISTA,
                "In the rapture of my enormous humiliation I live in your warm life...",
                function(){}
            ), TextDialogMode.createCharacterTextFactory(
                Labels.characters.KRISTA,
                "...and you shall die--die, sweetly die--into mine.'"
            )]
          }
      ],
 }),
  ]
}
