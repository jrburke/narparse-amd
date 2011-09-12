require({
        baseUrl: "./",
        paths: {
            'es5-shim': '../es5-shim'
        }
    },
    ["require", "../narparse", "../tools/text!simple-program.js"],
    function(require, narparse, text) {
        var parsed = narparse.parse(text);

        doh.register(
            "simple",
            [
                function simple(t){
                    t.is(42, parsed.type);
                }
            ]
        );

        doh.run();
    }
);
