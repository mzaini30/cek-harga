const fs = require('fs')
const { generateRoutes } = require('vue-route-generator')
const chokidar = require('chokidar');

const perintah = () => fs.writeFileSync('./src/routes.js', generateRoutes({
  pages: './src/pages',
  importPrefix: '/src/pages/'
}))

const watcher = chokidar.watch('./src/pages')
watcher.on('add', () => perintah())
watcher.on('unlink', () => perintah())