# Halloween Haus 2015 Commemorative Minigame

Basic 2D exploration game w/tiled maps + character interaction <a href="https://www.sophiaceleste.com/halloween-haus" target="_blank">Link</a>

<img src="https://github.com/sophiavanvalkenburg/halloween-haus/raw/master/resources/images/start-screen.png" height="200" /> <img src="https://github.com/sophiavanvalkenburg/halloween-haus/raw/master/resources/images/screenshot01.png" height="200" /> <img src="https://github.com/sophiavanvalkenburg/halloween-haus/raw/master/resources/images/screenshot02.png" height="200" /> <img src="https://github.com/sophiavanvalkenburg/halloween-haus/raw/master/resources/images/screenshot03.png" height="200" />

### How to Run
```bash
$ npm install http-server -g
$ http-server .
```

### Design To-Do

### Programming To-Do
  
### Nice-To-Haves
- ability to add sound to tile when walking over it (customize in map editor)
- add css class to tile / whole map (customize in map editor)
- bug: need a way to get out if player is trapped by an npc
- split out interactions into separate files instead of putting in haus_config / story
- special pixel art for ghost map
- character orientation sprites
- tile animation
- different player movement animation depending on location (e.g. swimming in pool)
- music/tile pre-loading
- import/export saved state
- create debug mode (using key combo ?)
  - toggle gridlines
  - mouseover coordinates
  - highlighted portal tiles
  - play state buttons
  - etc
- Testing!
- refactor with standard game engine practices (e.g. Entity Component Model)

