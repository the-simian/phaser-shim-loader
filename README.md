#Phaser-Shim-Loader

A webpack loader, that allows you to use the npm version of phaser with a normal build process.


## Deprecation Notice!

As of version 1.3.x, this module is no longer necessary to make phaser operate correctly with webpack!

* [The quickest way to get running is to use the `slush-phaser-webpack` generator](https://www.npmjs.com/package/slush-phaser-webpack)

You can also include the correct build criteria yourself:

This can be achieved by simply including the dependencies that are necessary for Phaser to work:

```js
global.PIXI = require('pixi.js');
global.p2 = require('p2');
global.Phaser = require('phaser')

```

You will need to use the correct versions of both pixi and p2. At the imte of this writing, for `phaser@2.3.0` uses

```js
{
  "phaser": "2.3.x",
  "pixi.js": "2.x.x"
  "p2": "0.6.x",
}
```

Also be aware that the npm module [`pixi`](https://www.npmjs.com/package/pixi) is the *wrong module*, you want [`pixi.js`](https://www.npmjs.com/package/pixi.js), the official module


## How to use:
Currently compatible with phaser 2.2.x

Like any loader, you use it in your webpack.config file.


```js
var path = require('path');
var phaserWebpackLoader = path.join(__dirname, '/node_modules/phaser-shim-loader'),
  phaserWebpackDebugLoader = path.join(__dirname, '/node_modules/phaser-shim-loader/phaser=debug'),
  
  
//...
  module: {
    loaders: [
      {
        test: /phaser\.js$/i,
        loader: 'phaser-webpack-loader'
      },
      {
        test: /phaser-debug\.js$/i,
        loader: 'phaser-debug-webpack-loader'
      },
      {
        test: /\.frag$/i,
        loader: 'gl-fragment-loader'
      }
    ]
  },
  resolveLoader: {
    alias: {
      'phaser-webpack-loader': phaserWebpackLoader,
      'phaser-debug-webpack-loader': phaserWebpackDebugLoader,
      'gl-fragment-loader': glFragmentLoader
    }
  },
  
```


