function getZero(num) { 
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function timer(timerSelector, deadLine) {
    function getTimeRemaining(endtime = deadLine) {
        const t = Date.parse(endtime) - Date.parse(new Date()), 
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor(t / (1000 * 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
            
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000); 

            updateClock(); 

            function updateClock() {
                const t = getTimeRemaining(endtime);

                if (t.total <= 0) { 
                    clearInterval(timeInterval);
                } else {
                    days.textContent = getZero(t.days);
                    hours.textContent = getZero(t.hours);
                    minutes.textContent = getZero(t.minutes);
                    seconds.textContent = getZero(t.seconds);
                }
            }
    }

    setClock(timerSelector, deadLine);
}

export default timer;
export {getZero};