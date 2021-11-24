const mix = require('laravel-mix');
const path = require('path');
const mod = require('./module.mix');

require('laravel-mix-polyfill');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.options({
  hmrOptions: {
    host: 'localhost',
    port: process.env.HMR_PORT || 8080
  },
});
mix.webpackConfig((webpack) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve('resources/src'),
        '@lang': path.resolve('resources/lang'),
      }
    },
    output: {
      chunkFilename: 'js/[hash][name].bundle.js',
    },
    devServer: {
      proxy: {
        '*': 'http://0.0.0.0',
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      port: process.env.HMR_PORT || 8080
    },
    plugins:[
      new webpack.DefinePlugin({
        __INTLIFY_PROD_DEVTOOLS__ : 'false'
      })
    ]
  }
})
.vue({version: 3})
.disableNotifications()
.polyfill({
  enabled: true,
  useBuiltIns: "usage",
  targets: {"firefox": "50", "ie": 11}
})
// .sourceMaps(false);
// .sourceMaps(!mix.inProduction);
if (mix.inProduction()) {
  mix.version();
}

mod(mix);
