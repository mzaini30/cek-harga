const fs = require('fs')
const { generateRoutes } = require('vue-route-generator')

const code = generateRoutes({
  pages: './src/pages',
  importPrefix: '/src/pages/'
})

fs.writeFileSync('./src/routes.js', code)