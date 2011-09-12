
/*jslint */
/*global require: false, process: false, console: false */

'use strict';

var fs = require('fs'),
    path = require('path'),
    injectionStart = '//NARCISSUS PARSER START',
    injectionEnd = '//NARCISSUS PARSER END',
    nardir = process.argv[2],
    target = process.argv[3],
    contents = '',
    moduleContents, startIndex, endIndex;

//Print help
if (!nardir || !target) {
    console.log('Usage: node assemble.js directory/containing/narcissus outFile.js');
    process.exit(1);
}

moduleContents = fs.readFileSync(target, 'utf8');

nardir = path.join(nardir, 'lib');

//Build up the starting content
contents = injectionStart + '\n' +
            fs.readFileSync(path.join(nardir, 'jsdefs.js'), 'utf8') +
            fs.readFileSync(path.join(nardir, 'jslex.js'), 'utf8') +
            fs.readFileSync(path.join(nardir, 'jsparse.js'), 'utf8') +
            '\n' + injectionEnd;

//Downconvert to plain JS
contents = contents.replace(/const\s/g, 'var ');


//Find markers in the plugin file.
startIndex = moduleContents.indexOf(injectionStart);
endIndex = moduleContents.indexOf(injectionEnd);


//Inject CoffeeScript contents
moduleContents = moduleContents.substring(0, startIndex) +
                 contents +
                 moduleContents.substring(endIndex + injectionEnd.length, moduleContents.length);

fs.writeFileSync(target, moduleContents, 'utf8');