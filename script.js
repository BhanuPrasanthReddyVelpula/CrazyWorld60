const songs = [
  {
    title: "Ammaayi Ammaayi",
    artist: "Crazy World",
    src: "assets/songs/Ammaayi Ammaayi.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Chasing Moonlight",
    artist: "Crazy World",
    src: "assets/songs/Chasing Moonlight (1).mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Nee Kosam Chasing Moonlight",
    artist: "Crazy World",
    src: "assets/songs/Chasing Moonlight.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Mystic Whispers",
    artist: "Crazy World",
    src: "assets/songs/Mystic Whispers.mp3",
    cover: "assets/covers/cover1.jpg"
  },{
    title: "Mystical Serenade",
    artist: "Crazy World",
    src: "assets/songs/Mystical Serenade.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Nee Choopule",
    artist: "Crazy World",
    src: "assets/songs/Nee Choopule.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Tiger Roaring Resurgence",
    artist: "Crazy World",
    src: "assets/songs/Roaring Resurgence (1).mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Lion Roaring Resurgence",
    artist: "Crazy World",
    src: "assets/songs/Roaring Resurgence.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Roaring Strikes",
    artist: "Crazy World",
    src: "assets/songs/Roaring Strikes.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Thana thandhana… thana thandhana… ",
    artist: "Crazy World",
    src: "assets/songs/Thana thandhana… thana thandhana… (1).mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Chasing for WiN",
    artist: "Crazy World",
    src: "assets/songs/Untitled.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Madhura Drushi",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 12.35.05_45bf06a1.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Oohala Kanneeti",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 12.35.06_b5078c6f.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Chirunavvule",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 12.35.06_e7ba3c61.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Nee Navvu Chinnari",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 12.36.58_6600a2d7.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Rise of the Forest Warrior",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 13.31.19_1f2c2a76.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "The Hero's Call",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 13.31.19_5a1b72c0.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Chandamama Choodu",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-27 at 20.16.27_2ba30c59.mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Naa Prama Lokam",
    artist: "Crazy World",
    src: "assets/songs/ఓడిపోయిన కలలు (Shattered Dreams) (1).mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Ninnu Choosthuna",
    artist: "Crazy World",
    src: "assets/songs/ఓడిపోయిన కలలు (Shattered Dreams).mp3",
    cover: "assets/covers/cover1.jpg"
  },
  {
    title: "Under the lights",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 13.31.19_be18394d.mp3",
    cover: "assets/covers/cover1.jpg"
  }
];

let current = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.src;
}

function playSong() {
  audio.play();
  playBtn.textContent = "⏸";
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) playSong();
  else pauseSong();
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % songs.length;
  loadSong(current);
  playSong();
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
  playSong();
});

// Song List
const songList = document.getElementById("songList");

songs.forEach((song, i) => {
  const div = document.createElement("div");
  div.className = "song";
  div.innerHTML = `
    <img src="${song.cover}">
    <div>
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
    </div>
  `;
  div.addEventListener("click", () => {
    current = i;
    loadSong(i);
    playSong();
  });
  songList.appendChild(div);
});

loadSong(0);
