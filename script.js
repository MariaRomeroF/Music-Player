const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const muteBtn = document.getElementById('mute');
const progress = document.getElementById('progress');
const title = document.getElementById('title');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const cover = document.getElementById('cover'); // Imagen del cover

const songs = [
  {
    title: "Circa 1983",
    src: "music/Circa 1983 - Freedom Trail Studio.mp3",
    cover: "images/circa1983.jpg"
  },
  {
    title: "Excess",
    src: "music/Excess - Freedom Trail Studio.mp3",
    cover: "images/excess.jpg"
  },
  {
    title: "Jumpy Pants",
    src: "music/Jumpy Pants - Freedom Trail Studio.mp3",
    cover: "images/jumpypants.jpg"
  },
  {
    title: "They Bop",
    src: "music/They Bop - Freedom Trail Studio.mp3",
    cover: "images/theybop.jpg"
  },
];

let songIndex = 0;

function loadSong(song) {
  title.textContent = song.title;
  audio.src = song.src;
  cover.src = song.cover;
}

function playSong() {
  audio.play();
  playBtn.textContent = '⏸️';
  playBtn.classList.add('playing');
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = '▶️';
  playBtn.classList.remove('playing');
}

function togglePlayPause() {
  if(audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playBtn.addEventListener('click', togglePlayPause);

prevBtn.addEventListener('click', () => {
  songIndex--;
  if(songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
});

nextBtn.addEventListener('click', () => {
  songIndex++;
  if(songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
});

muteBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? '🔇' : '🔈';
});

audio.addEventListener('timeupdate', () => {
  if(audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;

    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
});

progress.addEventListener('input', () => {
  if(audio.duration) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
});

audio.addEventListener('ended', () => {
  nextBtn.click();
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Cargar la primera canción al iniciar
loadSong(songs[songIndex]);
