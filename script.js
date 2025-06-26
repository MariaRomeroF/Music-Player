const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const muteBtn = document.getElementById('mute');
const progress = document.getElementById('progress');
const title = document.getElementById('title');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
<<<<<<< HEAD
=======
const cover = document.getElementById('cover'); // NUEVO
>>>>>>> 8d5443f (first commit)

const songs = [
  {
    title: "Circa 1983",
<<<<<<< HEAD
    src: "music/Circa 1983 - Freedom Trail Studio.mp3"
  },
  {
    title: "Excess",
    src: "music/Excess - Freedom Trail Studio.mp3"
  },
  {
    title: "Jumpy Pants",
    src: "music/Jumpy Pants - Freedom Trail Studio.mp3"
  },
  {
    title: "They Bop",
    src: "music/They Bop - Freedom Trail Studio.mp3"
=======
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
>>>>>>> 8d5443f (first commit)
  },
];

let songIndex = 0;

function loadSong(song) {
  title.textContent = song.title;
  audio.src = song.src;
<<<<<<< HEAD
=======
  cover.src = song.cover; // NUEVO
>>>>>>> 8d5443f (first commit)
}

function playSong() {
  audio.play();
  playBtn.textContent = '⏸️';
<<<<<<< HEAD
  playBtn.classList.add('playing'); // Añadido para animación
=======
  playBtn.classList.add('playing');
>>>>>>> 8d5443f (first commit)
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = '▶️';
<<<<<<< HEAD
  playBtn.classList.remove('playing'); // Quitamos animación
=======
  playBtn.classList.remove('playing');
>>>>>>> 8d5443f (first commit)
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
<<<<<<< HEAD
  if(songIndex > songs.length -1) {
=======
  if(songIndex > songs.length - 1) {
>>>>>>> 8d5443f (first commit)
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
});

muteBtn.addEventListener('click', () => {
<<<<<<< HEAD
  if(audio.muted) {
    audio.muted = false;
    muteBtn.textContent = '🔈';
  } else {
    audio.muted = true;
    muteBtn.textContent = '🔇';
  }
=======
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? '🔇' : '🔈';
>>>>>>> 8d5443f (first commit)
});

audio.addEventListener('timeupdate', () => {
  if(audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;

<<<<<<< HEAD
    // Actualizar tiempo actual y duración
=======
>>>>>>> 8d5443f (first commit)
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

<<<<<<< HEAD
// Cargar la primera canción al iniciar
=======
>>>>>>> 8d5443f (first commit)
loadSong(songs[songIndex]);
