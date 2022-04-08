function videoFunc() {
  const progressFirst = document.querySelector('.progress-first');
  const progressSecond = document.querySelector('.progress-second');

  progressSecond.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
  });

  const playButton = document.querySelector('#play-button'),
    playBtn = document.querySelector('#play-btn'),
    pauseBtn = document.querySelector('#pause'),
    video = document.querySelector('#video-player'),
    playBlock = document.querySelector('.video-content__controls-play');

  const progressVideo = document.querySelector('#progressVideo');

  const volume = document.querySelector('#volume'),
    mute = document.querySelector('#mute'),
    volumeBlock = document.querySelector('.video-content__controls-volume'),
    volumeCtrl = document.querySelector('#volume-ctrl');

  function playVideo() {
    playButton.classList.toggle('display-none');
    playBtn.classList.toggle('display-none');
    pauseBtn.classList.toggle('display-none');

    if (pauseBtn.classList.contains('display-none')) {
      video.pause();
    } else {
      video.play();
    }
  }

  function progressUpdate() {
    let d = video.duration;
    let c = video.currentTime;
    progressVideo.value = (c / d) * 100;
    progressFirst.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progressVideo.value}%, #C4C4C4 ${progressVideo.value}%, #C4C4C4 100%)`;

    if (progressVideo.value === d) {
      playButton.classList.toggle('display-none');
      playBtn.classList.toggle('display-none');
    }
  }

  function videoRewind() {
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o / w);
    video.play();
    progressFirst.style.background = `linear-gradient(to right, #710707 0%, #710707 ${this.value}%, #C4C4C4 ${this.value}%, #C4C4C4 100%)`
  }

  let v = 100;

  function videoVolume() {
    v = this.value;
    video.volume = v / 100;

    if (v == 0) {
      volume.classList.toggle('display-none');
      mute.classList.toggle('display-none');
    } else {
      volume.classList.remove('display-none');
      mute.classList.add('display-none');
    }
  }

  function videoVolumeOrMute() {
    volume.classList.toggle('display-none');
    mute.classList.toggle('display-none');

    if (volume.classList.contains('display-none')) {
      video.volume = 0;
    } else {
      video.volume = v / 100;
    }
  }

  window.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      event.preventDefault();

      playVideo()
    } else if (event.code === 'KeyM') {
      event.preventDefault();

      videoVolumeOrMute()
    } else if (event.code === 'Period' && event.shiftKey) {
      event.preventDefault();

      video.playbackRate = 2;
    }
    else if (event.code === 'Comma' && event.shiftKey) {
      event.preventDefault();

      video.playbackRate = 0.5;
    }
  });

  volumeCtrl.addEventListener('click', videoVolume);
  volumeBlock.addEventListener('click', videoVolumeOrMute);

  video.addEventListener('timeupdate', progressUpdate);

  progressVideo.addEventListener('click', videoRewind);


  playBlock.addEventListener('click', playVideo);
  playButton.addEventListener('click', playVideo);
  video.addEventListener('click', playVideo);
}

export default videoFunc;




