
let expiryTime = localStorage.getItem("expiryTime");
if (!expiryTime) {
  expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000;
  localStorage.setItem("expiryTime", expiryTime);
}


let countdownInterval = setInterval(function() {
  let now = new Date().getTime();
  let timeLeft = expiryTime - now;

  if (timeLeft > 0) {
    let hours = Math.floor(timeLeft / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    if (timeLeft <= 12 * 60 * 60 * 1000) {
      document.getElementById("timer-warning").style.display = "block";
    }
  } else {
    clearInterval(countdownInterval);
    document.getElementById("main").style.display = "none"; 
    document.getElementById("expired").style.display = "block"; 
  }
}, 1000);
