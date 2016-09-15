var studyRequire = require.config({
    baseUrl: './src/js/',
    paths: {
        jquery: ['https://code.jquery.com/jquery-1.12.4.min', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min'],
        Spinner: 'https://cdnjs.cloudflare.com/ajax/libs/spin.js/2.3.2/spin.min'
    }
});
studyRequire(['main'], function(main){
    return main();
})();