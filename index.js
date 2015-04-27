'use strict';

/** phaser-webpack-loader */

function phaserShim(source) {
  this.cacheable && this.cacheable();

  source = source
    .replace(/"object"==typeof exports/, 'false')
    .replace(/(var\s+\w+\s*=\s*)Phaser(\s*\|\|\s*\{)/, 'var PIXI = exports.PIXI; $1Phaser$2')
    .replace(/typeof module !== 'undefined' && module\.exports/g, "false /* typeof module !== 'undefined' && module.exports */")
    .replace(/require\('nw\.gui'\)/g, "undefined /* require('nw.gui') */")
    .replace(/(p2\.Body\.prototype)/, 'var Phaser = require("Phaser").Phaser; var p2 = require("p2"); $1');

  source = 'var document = global.document;\n\n' + source;

  return source;
}

module.exports = phaserShim;
