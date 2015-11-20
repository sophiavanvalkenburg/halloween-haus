# Halloween Haus 2015 Commemorative Minigame

Basic 2D exploration game w/tiled maps + character interaction

### How to Run
```bash
$ npm install http-server -g
$ http-server .
```

### To-Do
- map design / pixel art
- character design / pixel art
- refactor story state events
  - some things should be in controller, etc
- add default input modes (right now once the state leaves "init", their input modes are gone)
  - instead of default, could be a list of modes that that input is used for
- story arc design
- add a removeCharacter function in map
- should some classes be singletons or static classes?
- create debug mode (using key combo ?)
  - toggle gridlines
  - mouseover coordinates
  - highlighted portal tiles
  - etc
- Testing!

