'use strict';

var app = (function app(app) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    function init() {
        const form = document.getElementById('sign-in-form');
        form.addEventListener('submit', handleSubmit);
    }

    app.init = init;

    return app;
})(app || {});