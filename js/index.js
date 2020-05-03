/** JS */
const isPlayedKey = "is-played-2";
const isPlayed = Boolean(localStorage.getItem(isPlayedKey));

window.addEventListener("load", () => {
  const video = document.querySelector("video");
  const btnPlay = document.querySelector(".btn-play");

  document.addEventListener("contextmenu", event => event.preventDefault());

  btnPlay.disabled = isPlayed;
  btnPlay.addEventListener("click", playVideo.bind(null, btnPlay, video));
});

function playVideo(btnPlay, video) {
  if (isPlayed) {
    return;
  }

  video.play();
  btnPlay.disabled = true;
  localStorage.setItem(isPlayedKey, true);
}
