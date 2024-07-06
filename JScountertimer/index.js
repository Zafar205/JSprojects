const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const heading = document.querySelector('h1')
const inputs = document.querySelector(".inner-container")

function startTimer() {
    const enterDay = document.getElementById("day").value.padStart(2, "0");
    const enterMonth = document.getElementById("month").value.padStart(2, "0");
    const nowDate = new Date();
    const currentYear = nowDate.getFullYear();

    // Create a Date object for the target date
    let targetDate = new Date(`${currentYear}-${enterMonth}-${enterDay}T00:00:00`);

    // If the target date is in the past, set the target date to next year
    if (targetDate < nowDate) {
        targetDate.setFullYear(currentYear + 1);
    }

    function timerFunction() {
        const today = new Date().getTime();
        const timer = targetDate.getTime();
        console.log(today, timer)
        const diff = timer - today;

        const leftDay = Math.floor(diff / day);
        const leftHour = Math.floor((diff % day) / hour);
        const leftMin = Math.floor((diff % hour) / minute);
        const leftSecond = Math.floor((diff % minute) / second);

        days.innerHTML = leftDay;
        hours.innerHTML = leftHour;
        minutes.innerHTML = leftMin;
        seconds.innerHTML = leftSecond;

        if (diff <= 0){
          heading.innerHTML = "TIMES UP!"
          inputs.style.display = "none"
          clearInterval(intervalId)
        }
            


    }

    const intervalId = setInterval(timerFunction, 1000); // Use 1000ms for a proper interval
}
