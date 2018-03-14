const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer
module.exports = (
  spaOptions = {},
  puppeteerOptions = { renderAfterTime: 500 }
) => poi => {
  const rendererOptions = Object.assign({}, puppeteerOptions)
  const options = Object.assign(
    {
      staticDir: path.join(__dirname, poi.options.dist),
      routes: ['/'],
      renderer: new Renderer(rendererOptions)
    },
    spaOptions
  )
  poi.extendWebpack('production', config => {
    config.plugin('prerender-spa').use(PrerenderSpaPlugin, [options])
  })
}
