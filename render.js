const fs = require('fs')
const pug = require('pug')

const result = pug.renderFile('index.pug', {
  pretty: true,
  Mikan: require('mikanjs'),
})
fs.writeFileSync('index.html', result)
