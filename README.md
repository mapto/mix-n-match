# mix-n-match

A simple card matching game, developed as part of a Theory of Computer Games class at University of Veliko Tarnovo.

# Development

Due to the fact that the story is loaded dynamically and browser security, a local server is needed for development. To get it running you need to [install Node.js first](https://nodejs.org/en/download/).

Then to setup the project, go to the project root directory (where this README.md file is) and run

    npm install grunt

Then you're ready to go. Type:

    grunt

And you'll have the game run locally and opened in the browser. Whenever you make changes to the code, the server will update it automatically.

# Skinning

Other card sets (skins) can be added. To this end a two-character directory needs to be added in the root (see examples [gi](https://github.com/mapto/mix-n-match/tree/main/gi) and [mr](https://github.com/mapto/mix-n-match/tree/main/mr)). It needs to contain:

- card/parts images named "<ROW><COL>.<FORMAT>", where:
  - ROW and COL are consecutive single-digit numbers, starting from 1. ROW indicates the body part, and COL indicates the character
  - FORMAT is the file format extension
- a file index.json containing
  - `format` - file extension
  - `cardHeight` - an array with card proportions, typically this would be the image heights of each body part
  - `characters` - the number of characters
  - `licence` (optionally)

Once deployed, this card set can be assessed by adding a question mark and the two-character directory name at the end, e.g. http://mix-n-match.gamej.am/?mr