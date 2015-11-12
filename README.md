# Halloween Haus 2015 Commemorative Minigame

Basic 2D exploration game w/tiled maps + character interaction

### Prototypal Structure
- Controller
- Haus
- Canvas
- Character
  - NonPlayerCharacter
  - PlayerCharacter
- Dialog
- Map
- MapLocation
- Tile
  - InteractiveTile
  - PortalTile

### To-Do
- create story.js with methods/variables related to the details of the game "story" state
- add a removeCharacter function in map
- Read map configuration from a file instead of hardcoding it (this will also abstract it away from haus.js)
  - At the very least, map config should probably be encapsulated in an object
- Should Tile, Dialog, and Character all fall under an InteractiveObject prototype?
- Canvas can be a singleton or static?
- Testing!

