let second = 0,
    minute = 0,
    hour = 0,
    intervalId

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const heading = document.querySelector('h1')
const inputs = document.querySelector(".inner-container")

const start = () =>{    
    intervalId =  setInterval(() =>{
        if (second > 59){
            minute++
            second = 0
        }    
        else if (minute > 59){
            hour++
            minute = 0
        } else{
           second++
        }
        hours.innerHTML = String(hour).padStart(2, 0)
        minutes.innerHTML = String(minute).padStart(2, 0)
        seconds.innerHTML = String(second).padStart(2, 0)
    }
    , 1000)
}
const stop = () => {
        clearInterval(intervalId)
    }

const reset = () => {
      location.reload()
}    




