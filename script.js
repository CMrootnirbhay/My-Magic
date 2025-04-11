let count = 5;
const countdown = document.getElementById('countdown');

const timer = setInterval(() => {
  count--;
  countdown.textContent = count;

  if (count === 0) {
    clearInterval(timer);
    countdown.textContent = "See my magic 😈";

    setTimeout(() => {
      // Try to open Instagram app first
      window.location.href = "instagram://user?username=instagram";

      // Backup: open Instagram site after 2.5s (in case app doesn't open)
      setTimeout(() => {
        window.open("https://www.instagram.com", "_blank");
      }, 2500);
    }, 2000);
  }
}, 1000);
