# narparse-amd

Expose just the parser part of [Narcissus](https://github.com/mozilla/narcissus)
as an [AMD module](https://github.com/amdjs/amdjs-api/wiki/AMD), for use in
[RequireJS](http://requirejs.org). Also try to get it to run in all the browsers
RequireJS supports, which includes IE6-8.

Testing has not been done in IE yet, still things to work out.

## Usage

Grab **narparse.js** and **es5-shim.js** in this directory and  put them in your
AMD-based project, for instance, a project using RequireJS.

**Important**: This project uses a modified es5-shim that includes a fix for
the defineProperty check done in IE8. Be sure to use the one in this project if
you want the unit tests to pass/have it run in IE8.

You can use the [text loader plugin](http://requirejs.org/docs/api.html#text)
to fetch text source of a JS file and parse it with the Narcissus parser:

    define(['narparse', 'text!example.js'], function (narparse, exampleText) {
        var parsed = narparse.parse(exampleText);
    });

The Narcissus **options** object is available off of narparse, so to use the
Narcissus parser in "harmony" mode, do the following:

    define(['narparse', 'text!example.js'], function (narparse, exampleText) {
        narparse.options.version = 'harmony';
        var parsed = narparse.parse(exampleText);
    });

## State of development

This is still very experimental. Use at your own risk.
