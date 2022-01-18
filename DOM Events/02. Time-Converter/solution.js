function attachEventsListeners() {

    let radios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, init) {
        let inDays = value / radios[init];

        return {
            days: inDays,
            hours: inDays * radios.hours,
            minutes: inDays * radios.minutes,
            seconds: inDays * radios.seconds
        };
    }

    let daysElement = document.getElementById("days");
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);
    

    function onConvert(e) {
        const input = e.target.parentElement.querySelector('input[type="text"]');

        const time = convert(Number(input.value), input.id);
        daysElement.value = time.days;
        hoursElement.value = time.hours;
        minutesElement.value = time.minutes;
        secondsElement.value = time.seconds;
    }
}