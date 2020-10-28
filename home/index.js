'use strict'

var app = (function app(app, w, d) {
    const clock = d.getElementsByClassName('clock')[0];
    const textDate = d.getElementsByClassName('text--date')[0];
    const countdown = d.getElementsByClassName('seconds')[0];
    let timers = [];

    const buttons = d.getElementsByClassName('buttons')[0].children;
    const keepAlive = buttons[0];
    const logOut = buttons[1];

    w.addEventListener('load', init);

    keepAlive.addEventListener('click', handleRefresh);
    logOut.addEventListener('click', handleLogOut);

    // ***************************

    function handleLogOut(e) {
        e.preventDefault();
        w.location.pathname = '/';
    }

    function handleRefresh(e) {
        e.preventDefault();

        clearTimers();

        w.location.reload();
    }

    function init(e) {
        // insert time in clock     
        const { date, hours, min } = getTime();
        const session = 600;

        const options = {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            weekday: 'long',
        }

        clock.innerHTML = hours + ':' + (min <= 9 ? '0' + min : min);
        textDate.innerHTML = date.toLocaleDateString('pt-BR', options);
        countdown.innerHTML = '600';

        timers.push(setInterval((function setCountdown(seconds) {
            return function countToRefresh() {
                seconds -= 1;
                
                if (seconds == 0) {
                    clearTimers();
                    window.location.reload();
                }
                
                countdown.innerHTML = seconds;
            }
        })(session), 1e3));

        timers.push(setInterval(function setCountdown(minutes) {
            const { hours, min } = getTime();
            clock.innerHTML = hours + ':' + (min <= 9 ? '0' + min : min);
        }, 500));
    }

    function getTime() {
        const date = new Date();
        const hours = date.getHours();
        const min = date.getMinutes();

        return { date, hours, min };
    }

    function clearTimers() {
        timers.forEach(function clearTimer(id) {
           clearInterval(id); 
        });
    }

    return app;
})(app || {}, window, document);