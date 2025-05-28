 window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("birthdayMusic");
  const button = document.getElementById("playButton");

  // Try to autoplay
  music.play().catch(() => {
    // If autoplay fails, show the play button
    button.style.display = "inline-block";
  });

  button.addEventListener("click", () => {
    music.play();
    button.style.display = "none";
  });
});
