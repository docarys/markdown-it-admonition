'use strict';

var path = require('path');
var generate = require('markdown-it-testgen');

describe('markdown-it', function () {
    var markdown = require("markdown-it")({html: true})        
        .use(require("../index.js"));

  generate(path.join(__dirname, 'fixtures'), markdown);
});