#Phaser-Shim-Loader

A webpack loader, that allows you to use the npm version of phaser with a normal build process.


## How to use:
Currently compatible with phaser 2.2.x

Like any loader, you use it in your webpack.config file.


```js
var phaserWebpackLoader = require('phaser-shim-loader'),
  phaserWebpackDebugLoader = require('phaser-shim-loader'),
  
  
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


