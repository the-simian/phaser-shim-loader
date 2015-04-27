'use strict';

/** phaser-debug-webpack-loader */
function phaserShimDebug(source) {
  this.cacheable && this.cacheable();

  source = source.replace(/(var\s+ui\s*=\s*require\('\.\/util\/ui'\))/, 'var Phaser = _Phaser; $1');
  source = '(function () { var _Phaser = require("phaser").Phaser;\n\n' + source + '\n\n}());';

  return source;
}

module.exports = phaserShimDebug;
