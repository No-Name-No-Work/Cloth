// Retrieve expiry time from localStorage or set a new one if it doesn't exist
let expiryTime = localStorage.getItem("expiryTime");
if (!expiryTime) {
  expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
  localStorage.setItem("expiryTime", expiryTime);
}

// Countdown timer function
let countdownInterval = setInterval(function() {
  let now = new Date().getTime();
  let timeLeft = expiryTime - now;

  if (timeLeft > 0) {
    // Calculate hours, minutes, and seconds remaining
    let hours = Math.floor(timeLeft / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById("countdown").innerHTML = `${hours}h ${minutes}m ${seconds}s`;

    // Show warning if there are 12 hours or less remaining
    if (timeLeft <= 12 * 60 * 60 * 1000 && !document.getElementById("timer-warning").classList.contains("visible")) {
      document.getElementById("timer-warning").style.display = "block";
      document.getElementById("timer-warning").classList.add("visible");
    }
  } else {
    // When time expires
    clearInterval(countdownInterval);
    document.getElementById("main").style.display = "none";  // Hide the main content
    document.getElementById("expired").style.display = "block";  // Show the expired message
  }
}, 1000); // Update every second

// Optionally, reset the expiry time by user interaction (you can remove this part if you don't need it)
document.getElementById("resetExpiryButton").addEventListener("click", function() {
  expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000;
  localStorage.setItem("expiryTime", expiryTime);
  location.reload();  // Reload the page to reset the timer
});
