# poi-preset-prerender-spa

Use prerender-spa-plugin to prerender in your build step

**NB:** This plugin uses the version 3 of prerender-spa-plugin which is still in beta

## Install

```bash
yarn add poi-preset-prerender-spa --dev
```

## Usage

This preset will add PrerenderSpaPlugin with [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin) for you

```js
// poi.config.js
module.exports = {
  presets: [require('poi-preset-prerender-spa')()]
}
```

Then it will prerender the html when you run `poi build`.

`PrerenderSpaPlugin(spaOptions, puppeteerOptions)`

It accepts two values the first of which is the options for[prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin/tree/v3):

```js
require('poi-preset-prerender-spa')({
  staticDir: path.join(__dirname, 'dist'),
  outputDir: path.join(__dirname, 'prerendered'),
  routes: ['/', '/about', '/some/deep/nested/route']
})
```

The second is for configuring the default added PuppeteerRenderer ([@prerenderer/renderer-puppeteer](https://github.com/Tribex/prerenderer)) shown on [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin/tree/v3):

```js
require('poi-preset-prerender-spa')(
  {},
  {
    renderAfterDocumentEvent: 'render-event'
  }
)
```

if no `puppeteerOptions` are set it defaults to `{renderAfterTime:500}` if you have issues with it not getting the page after the js import set the `puppeteerOptions` to `{renderAfterDocumentEvent: 'render-event'}` and add a `document.dispatchEvent(new Event('render-event'))` to fire when the javascript has populated

## Known Issues

* Isn't set up to work with the poi config option `homepage`. Likely solution is to setup poi.dist to be of the sort `dist/homepage`, set the spaOptions.staticDir to be `path.join(__dirname,'dist')` and set the spaOptions.routes to be `['/homepage']`

## License

MIT &copy; [darcnite3000](https://github.com/darcnite3000)
