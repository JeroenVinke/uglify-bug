var UglifyJS = require("uglify-js");
var result = UglifyJS.minify("./input.js");
require('fs').writeFileSync('./output.js', result.code);