// Polyfills
// import 'es6-promise'
// import 'whatwg-fetch'

import analytics from './modules/analytics'
import domready from './modules/domready'
import global from './modules/global'
// import initRouter from './init/router'

analytics('UA-77889324-2')
// initRouter()

const runThroughDemo = () => {
  setTimeout(() => global.setAttr('intro', '1'), 1000)
  setTimeout(() => global.setAttr('intro', '2'), 2000)
  setTimeout(() => global.setAttr('intro', '3'), 3000)
  setTimeout(() => global.setAttr('intro', '4'), 4000)
  setTimeout(() => global.setAttr('intro', '5'), 5000)
  setTimeout(() => global.setAttr('intro', '6'), 9000)
  setTimeout(() => global.setAttr('intro', '7'), 11000)
  setTimeout(() => global.setAttr('intro', '8'), 15000)
  setTimeout(() => global.setAttr('intro', '9'), 19000)
  setTimeout(() => global.setAttr('intro', '10'), 23000)
  setTimeout(() => global.setAttr('intro', '5'), 27000)
  setTimeout(() => runThroughDemo(), 32000)
}

domready(() => {
  runThroughDemo()
})
