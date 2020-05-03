/** JS */

window.addEventListener("load", () => {
  const video = document.querySelector("video");
  const btnPlay = document.querySelector(".btn-play");

  const isPlayed = localStorage.getItem("is-played");

  if (isPlayed) {
    btnPlay.disabled = true;
  }

  document.addEventListener("contextmenu", event => event.preventDefault());

  btnPlay.addEventListener("click", () => {
    if (isPlayed) {
      return;
    }

    video.play();
    localStorage.setItem("is-played", true);
  });
});
