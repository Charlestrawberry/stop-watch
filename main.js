let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

let displayTime = document.querySelector(".displayTime");
let int = null;

document.querySelector(".startwatch").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);

  console.log(displayTimer);
});

document.querySelector(".stopwatch").addEventListener("click", () => {
  clearInterval(int);
});

document.querySelector(".resetwatch").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  displayTime.innerHTML = "00 : 00 : 00 : 000 ";
});

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  displayTime.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

// function mySpin() {
//   document.querySelector(".spin").innerHTML = (<i class="fa-solid fa-hourglass-start"></i>)
// }

// document.addEventListener("click", mySpin);

// console.log(spin);

