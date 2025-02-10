let expiryTime = new Date().getTime() + 48 * 60 * 60 * 1000;
    let countdownInterval = setInterval(function() {
      let now = new Date().getTime();
      let timeLeft = expiryTime - now;
      if (timeLeft > 0) {
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 48)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
        if (timeLeft <= 24 * 60 * 60 * 1000 && timeLeft > 0) {
          document.getElementById("timer-warning").style.display = "block";
        }
      }
     else {
        clearInterval(countdownInterval);
        document.getElementById("main").style.display = "none"; 
        document.getElementById("expired").style.display = "block"; 
      }
    }, 1000);