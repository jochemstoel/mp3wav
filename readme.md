This tiny module lets you play mp3 and wav files from Node (on Windows). It uses open source [cmdmp3.exe](https://github.com/jimlawless/cmdmp3) by [Jim Lawless](https://lawlessguy.wordpress.com/2015/06/27/update-to-a-command-line-mp3-player-for-windows/). There is also a command line version. [mp3wav-cli](https://www.npmjs.com/package/mp3wav-cli)

```js
let play = require('mp3wav')
play('sample.wav') // 186kb included in package
play('sample.mp3') // 20kb included in package
```
or run _npm test_.