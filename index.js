'use strict'

var app = (function app(app, w, d) {
    const form = d.getElementsByClassName('form')[0];
    
    form.addEventListener('submit', handleSubmit);
    
    // **********************
    
    function handleSubmit(e) {
        e.preventDefault();
        
        w.location.pathname = '/home/';
    }

    return app;
})(app || {}, window, document);