'use strict'

var app = (function app(app, w, d) {
    const form = d.getElementsByClassName('form')[0];
    const { email, password } = form.elements;
    const notify = d.getElementsByClassName('notify')[0];
    
    form.addEventListener('submit', handleSubmit);
    email.addEventListener('input', clearErrorIfEmpty);
    password.addEventListener('input', clearErrorIfEmpty);
    
    // **********************
    
    function handleSubmit(e) {
        e.preventDefault();
        const { email: emailInput, password: passwordInput } = e.target.elements;
        const email = emailInput.value;
        const password = passwordInput.value;

        app.IDBInterface.getUser([ email, password ]).then(function (response) {
            alert("Login realizado com sucesso!")
            w.location.pathname = '/home/';
        }).catch(function (err) {
            emailInput.classList.add('error');
            passwordInput.classList.add('error');
            notify.innerHTML = 'Ops, usuário ou senha inválidos. Tente novamente!';
        });
    }
    
    function clearErrorIfEmpty(e) {
        const input = e.target;
        const hasErrorClass = e.target.classList.contains('error');

        if (input.value.trim() == '' && hasErrorClass) {
            e.target.classList.remove('error');
            notify.innerHTML = '';
        }
    }

    return app;
})(app || {}, window, document);