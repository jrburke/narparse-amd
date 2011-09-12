require({
        baseUrl: "./",
        paths: {
            'es5-shim': '../../es5-shim'
        }
    },
    ["require", "../../narparse", "../../tools/text!modules1.js"],
    function(require, narparse, text) {
        narparse.options.version = 'harmony';

        var parsed = narparse.parse(text);

        doh.register(
            "modules",
            [
                function modules(t){
                    t.is(42, parsed.type);
                }
            ]
        );

        doh.run();
    }
);
