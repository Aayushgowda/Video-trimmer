const videoInput = document.getElementById('videoInput');
const videoPlayer = document.getElementById('videoPlayer');

videoInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    videoPlayer.src = url;
  }
});

const startInput = document.getElementById('startTime');
const endInput = document.getElementById('endTime');
const trimBtn = document.getElementById('trimBtn');

trimBtn.addEventListener('click', () => {
  const start = parseFloat(startInput.value);
  const end = parseFloat(endInput.value);

  videoPlayer.currentTime = start;
  videoPlayer.play();

  const interval = setInterval(() => {
    if (videoPlayer.currentTime >= end) {
      videoPlayer.pause();
      clearInterval(interval);
    }
  }, 200);
});