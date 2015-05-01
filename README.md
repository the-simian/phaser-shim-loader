#Phaser-Shim-Loader

A webpack loader, that allows you to use the npm version of phaser with a normal build process.


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

Note: This doesn't work with 2.3.x - yet.

