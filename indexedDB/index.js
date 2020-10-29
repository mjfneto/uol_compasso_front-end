'use strict';

var app = (function initDB(app, iDB) {
    const request = iDB.open('compasso_IndexedDB', 1);

    app.IDBInterface = {
        db: null,
        getByKey: null,
        addTo: null,
    };
    
    request.onupgradeneeded = function handleOnUpgradeNeeded(e) {
        const db = e.target.result;
        const usersObjStore = db.createObjectStore('users', { keyPath: ['email', 'password'] });
        usersObjStore.createIndex('email', 'email', { unique: true });
        usersObjStore.createIndex('password', 'password', { unique: true });
    }

    request.onsuccess = function handleOnUpgradeNeeded(e) {
        app.IDBInterface.db = e.target.result;
        app.IDBInterface.getUser = getUser;
        app.IDBInterface.storeUser = storeUser;
    }

    request.onerror = function handleOnUpgradeNeeded(e) {
        console.log(e.target.error);
    }

    // *****************************
    
    function getUser(keys) {
        const transaction = app.IDBInterface.db.transaction('users');
        const objectStore = transaction.objectStore('users');
        const request = objectStore.get(keys);
        
        return new Promise(function (resolve, reject) {
            request.onsuccess = function handleOnSuccess(e) {
                if (e.target.result) {
                    resolve(e.target.result);
                }

                reject();
            }

            request.onerror = function handleOnSuccess(e) {
                console.log(e.target.error);
                reject(e.target.error);
            }
        });
    }

    function storeUser(newObj) {
        const transaction = app.IDBInterface.db.transaction('users', 'readwrite');
        const objectStore = transaction.objectStore('users');
        const request = objectStore.add(newObj);

        return new Promise(function (resolve, reject) {
            request.onsuccess = function handleOnSuccess(e) {
                resolve();
            }

            request.onerror = function handleOnSuccess(e) {
                console.log(e.target.error);
                reject(e.target.error);
            }   
        });
    }

    return app;
})(app || {}, indexedDB);