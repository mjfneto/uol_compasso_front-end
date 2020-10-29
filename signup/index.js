'use strict';

var app = (function app(app, w, d) {
    const form = d.getElementsByClassName('form')[0];
    const notify = d.getElementsByClassName('notify')[0];
    
    form.addEventListener('submit', handleSubmit);
    
    // **********************
    
    function handleSubmit(e) {
        e.preventDefault();
        const { email: emailInput, password: passwordInput } = e.target.elements;
        const email = emailInput.value;
        const password = passwordInput.value;

        app.IDBInterface.storeUser({ id: app.uuid(), email, password }).then(function (response) {
            alert('Cadastro realizado com sucesso!');
            w.location.pathname = '/';
        }).catch(function (error) {
            console.log(error);
            notify.innerHTML = 'E-mail/Senha já cadastrado';
            emailInput.classList.add('error');
            passwordInput.classList.add('error');
        });

        // w.location.pathname = '/';
    }

    return app;
})(app || {}, window, document);