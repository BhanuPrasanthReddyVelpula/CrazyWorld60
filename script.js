const songs = [
  {
    id: 1,
    title: "Ammaayi Ammaayi",
    artist: "Crazy World",
    src: "assets/songs/Ammaayi Ammaayi.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 2,
    title: "Chasing Moonlight",
    artist: "Crazy World",
    src: "assets/songs/Chasing Moonlight (1).mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 3,
    title: "Nee Kosam Chasing Moonlight",
    artist: "Crazy World",
    src: "assets/songs/Chasing Moonlight.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 4,
    title: "Mystic Whispers",
    artist: "Crazy World",
    src: "assets/songs/Mystic Whispers.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 5,
    title: "Mystical Serenade",
    artist: "Crazy World",
    src: "assets/songs/Mystical Serenade.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 6,
    title: "Nee Choopule",
    artist: "Crazy World",
    src: "assets/songs/Nee Choopule.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 7,
    title: "Tiger Roaring Resurgence",
    artist: "Crazy World",
    src: "assets/songs/Roaring Resurgence (1).mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 8,
    title: "Lion Roaring Resurgence",
    artist: "Crazy World",
    src: "assets/songs/Roaring Resurgence.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 9,
    title: "Roaring Strikes",
    artist: "Crazy World",
    src: "assets/songs/Roaring Strikes.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 10,
    title: "Thana thandhana… thana thandhana… ",
    artist: "Crazy World",
    src: "assets/songs/Thana thandhana… thana thandhana… (1).mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 11,
    title: "Chasing for WiN",
    artist: "Crazy World",
    src: "assets/songs/Untitled.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 12,
    title: "Madhura Drushi",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 12.35.05_45bf06a1.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 13,
    title: "Oohala Kanneeti",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 12.35.06_b5078c6f.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 14,
    title: "Chirunavvule",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 12.35.06_e7ba3c61.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 15,
    title: "Nee Navvu Chinnari",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 12.36.58_6600a2d7.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 16,
    title: "Rise of the Forest Warrior",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 13.31.19_1f2c2a76.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 17,
    title: "The Hero's Call",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 13.31.19_5a1b72c0.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 18,
    title: "Chandamama Choodu",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-27 at 20.16.27_2ba30c59.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 19,
    title: "Naa Prama Lokam",
    artist: "Crazy World",
    src: "assets/songs/ఓడిపోయిన కలలు (Shattered Dreams) (1).mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 20,
    title: "Ninnu Choosthuna",
    artist: "Crazy World",
    src: "assets/songs/ఓడిపోయిన కలలు (Shattered Dreams).mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody" 
  },
  {
    id: 21, 
    title: "Under the lights",
    artist: "Crazy World",
    src: "assets/songs/WhatsApp Audio 2025-11-25 at 13.31.19_be18394d.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody"
  },
  {
    id: 22, 
    title: "Chai and Chatter",
    artist: "Crazy World",
    src: "assets/songs/new songs/Chai and Chatter.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody"
  },
  {
    id: 23, 
    title: "Endless Nights",
    artist: "Crazy World",
    src: "assets/songs/new songs/Endless Nights.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody"
  },
  {
    id: 24, 
    title: "The Socks I Lost",
    artist: "Crazy World",
    src: "assets/songs/new songs/The Socks I Lost.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody"
  },
  {
    id: 25, 
    title: "Dance All Night",
    artist: "Crazy World",
    src: "assets/songs/new songs/Title_ “Dance All Night” (1).mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody"
  },
  {
    id: 26, 
    title: "Neeye My Rhythm",
    artist: "Crazy World",
    src: "assets/songs/new songs/Title_ “Neeye My Rhythm”.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody"
  },
  {
    id: 27, 
    title: "Tiny Little Tale",
    artist: "Crazy World",
    src: "assets/songs/new songs/Title_ “Tiny Little Tale”.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody"
  },
  {
    id: 28, 
    title: "Who Am I",
    artist: "Crazy World",
    src: "assets/songs/new songs/Title_ “Who Am I_”.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody"
  },
  {
    id: 29, 
    title: "Why You Acting Funny Girl",
    artist: "Crazy World",
    src: "assets/songs/new songs/Title_ “Why You Acting Funny Girl”.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody"
  },
  {
    id: 30, 
    title: "Whispers of You",
    artist: "Crazy World",
    src: "assets/songs/new songs/Whispers of You.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody"
  },
  {
    id: 31, 
    title: "Dance This Night",
    artist: "Crazy World",
    src: "assets/songs/new songs/Title_ “Dance All Night”.mp3",
    cover: "assets/covers/cover1.jpg",
    genre:"Melody"
  }
];








/* ===========================================
  Crazy World — Music Player
  Simplified JS:
  - Auto-play next song
  - No shuffle or loop buttons
  - Remove songs from playlist, delete playlist
  - Liked songs, Genres, localStorage
=========================================== */

/* ----------------- Song Data ----------------- */
const songs12345678 = [
  { id:"s1", title:"Nee Kosam", artist:"Crazy World", src:"assets/song1.mp3", cover:"assets/cover1.jpg", genre:"Melody" },
  { id:"s2", title:"Chal Chalo", artist:"Crazy World", src:"assets/song2.mp3", cover:"assets/cover2.jpg", genre:"Mass" }
];

/* ----------------- LocalStorage Keys ---------------- */
const LS_LIKED="cw_liked";
const LS_PLAYLISTS="cw_playlists";

/* ----------------- State ---------------- */
let liked = JSON.parse(localStorage.getItem(LS_LIKED)||"[]");
let playlists = JSON.parse(localStorage.getItem(LS_PLAYLISTS)||"[]");

/* ----------------- UI References ---------------- */
const homeGrid=document.getElementById("homeGrid");
const likedGrid=document.getElementById("likedGrid");
const playlistsList=document.getElementById("playlistsList");
const genresList=document.getElementById("genresList");
const likedCount=document.getElementById("liked-count");
const pageTitle=document.getElementById("pageTitle");
const playlistTitle=document.getElementById("playlistTitle");
const playlistGrid=document.getElementById("playlistGrid");
const genreTitle=document.getElementById("genreTitle");
const genreGrid=document.getElementById("genreGrid");
const deletePlaylistBtn=document.getElementById("deletePlaylistBtn");
const resetDataBtn=document.getElementById("resetDataBtn");

/* Player */
const audio=document.getElementById("audio");
const playerCover=document.getElementById("playerCover");
const playerTitle=document.getElementById("playerTitle");
const playerArtist=document.getElementById("playerArtist");
const playBtn=document.getElementById("playBtn");
const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");
const progress=document.getElementById("progress");
const curTime=document.getElementById("curTime");
const durTime=document.getElementById("durTime");
const volume=document.getElementById("volume");
const playerLikeBtn=document.getElementById("playerLikeBtn");

/* Modals */
const createPlaylistModal=document.getElementById("createPlaylistModal");
const addPlaylistBtn=document.getElementById("addPlaylistBtn");
const newPlaylistName=document.getElementById("newPlaylistName");
const createPlaylistConfirm=document.getElementById("createPlaylistConfirm");
const createPlaylistCancel=document.getElementById("createPlaylistCancel");

/* ----------------- Player State ---------------- */
let playContext={type:"home",id:null};
let playQueue=[]; 
let queueIndex=0;
let currentSong=null;

/* ----------------- Initialization ---------------- */
function init(){
  updateLikedCount();
  renderAll();
  renderPlaylists();
  renderGenres();
  audio.volume=parseFloat(volume.value);
  buildQueue();
}
init();

/* ----------------- Render Functions ---------------- */
function renderAll(){ renderHome(); renderLiked(); }
function renderHome(){ 
  homeGrid.innerHTML="";
  songs.forEach(s=>homeGrid.appendChild(makeCard(s,"home")));
}
function renderLiked(){
  likedGrid.innerHTML="";
  songs.filter(s=>liked.includes(s.id)).forEach(s=>likedGrid.appendChild(makeCard(s,"liked")));
  likedCount.textContent=liked.length;
}
function renderPlaylists(){
  playlistsList.innerHTML="";
  playlists.forEach(pl=>{
    const div=document.createElement("div");
    div.className="playlist-item";
    div.textContent=pl.name;
    div.addEventListener("click", ()=> {
      playContext={type:"playlist",id:pl.id};
      buildQueue();
      goToPage("playlistPage");
      playlistTitle.textContent=pl.name;
      renderPlaylistGrid(pl);
      queueIndex=0; loadQueueIndex(queueIndex); playAudio();
    });
    playlistsList.appendChild(div);
  });
}
function renderPlaylistGrid(pl){
  playlistGrid.innerHTML="";
  pl.songs.map(id=>songs.find(s=>s.id===id)).filter(Boolean).forEach(s=>{
    const div=makeCard(s,"playlist",pl);
    playlistGrid.appendChild(div);
  });
}
function renderGenres(){
  const set=new Set(songs.map(s=>s.genre));
  genresList.innerHTML="";
  Array.from(set).forEach(g=>{
    const div=document.createElement("div");
    div.className="genre-item"; div.textContent=g;
    div.addEventListener("click", ()=>{
      playContext={type:"genre",id:g};
      buildQueue();
      goToPage("genrePage");
      genreTitle.textContent=g;
      renderGenreGrid(g);
      queueIndex=0; loadQueueIndex(queueIndex); playAudio();
    });
    genresList.appendChild(div);
  });
}
function renderGenreGrid(g){
  genreGrid.innerHTML="";
  songs.filter(s=>s.genre===g).forEach(s=>genreGrid.appendChild(makeCard(s,"genre")));
}

/* ----------------- Cards ---------------- */
function makeCard(s,context,pl=null){
  const div=document.createElement("div");
  div.className="card";
  div.innerHTML=`<img src="${s.cover}"><h4>${s.title}</h4><p>${s.artist}</p>`;

  div.addEventListener("click", ()=>{
    if(context==="playlist" && pl){ playContext={type:"playlist",id:pl.id}; buildQueue(); }
    else if(context==="liked"){ playContext={type:"liked",id:null}; buildQueue(); }
    else if(context==="genre"){ playContext={type:"genre",id:s.genre}; buildQueue(); }
    else{ playContext={type:"home",id:null}; buildQueue(); }
    queueIndex=playQueue.findIndex(x=>x.id===s.id);
    loadQueueIndex(queueIndex);
    playAudio();
  });

  if(context!=="playlist"){
    const btn=document.createElement("button");
    btn.className="add-to-playlist"; btn.textContent="+";
    btn.addEventListener("click", e=>{
      e.stopPropagation();
      if(playlists.length===0){ if(confirm("No playlist exist. Create one?")) showCreatePlaylist(); return; }
      const names=playlists.map(p=>p.name).join("\n");
      const chosen=prompt("Enter playlist name:\n"+names);
      if(!chosen) return;
      const pl=playlists.find(p=>p.name.toLowerCase()===chosen.toLowerCase());
      if(!pl) return alert("Playlist not found");
      if(!pl.songs.includes(s.id)) pl.songs.push(s.id);
      savePlaylists(); alert("Added to "+pl.name); renderPlaylists();
    });
    div.appendChild(btn);
  }

  if(context==="playlist" && pl){
    const removeBtn=document.createElement("button");
    removeBtn.className="remove-from-playlist"; removeBtn.textContent="×";
    removeBtn.addEventListener("click", e=>{
      e.stopPropagation();
      if(confirm(`Remove "${s.title}" from playlist "${pl.name}"?`)){
        pl.songs=pl.songs.filter(id=>id!==s.id);
        savePlaylists(); renderPlaylistGrid(pl);
      }
    });
    div.appendChild(removeBtn);
  }

  return div;
}

/* ----------------- Navigation ---------------- */
document.querySelectorAll(".nav-item").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active"));
    b.classList.add("active");
    goToPage(b.dataset.page);
  });
});
function goToPage(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  document.getElementById(page).classList.remove("hidden");
  pageTitle.textContent=(page==="home")?"Home":(page==="liked")?"Liked Songs":pageTitle.textContent;
}

/* ----------------- Audio Controls ---------------- */
function loadQueueIndex(i){
  currentSong=playQueue[i];
  if(!currentSong) return;
  audio.src=currentSong.src;
  playerCover.src=currentSong.cover;
  playerTitle.textContent=currentSong.title;
  playerArtist.textContent=currentSong.artist;
  updateLikeBtn();
}
function playAudio(){ audio.play(); playBtn.textContent="⏸"; }
function pauseAudio(){ audio.pause(); playBtn.textContent="▶"; }
playBtn.addEventListener("click", ()=> audio.paused?playAudio():pauseAudio());
prevBtn.addEventListener("click", ()=>{
  queueIndex=(queueIndex-1+playQueue.length)%playQueue.length;
  loadQueueIndex(queueIndex); playAudio();
});
nextBtn.addEventListener("click", ()=>{
  queueIndex=(queueIndex+1)%playQueue.length;
  loadQueueIndex(queueIndex); playAudio();
});
audio.addEventListener("ended", ()=>{
  // Auto-play next song
  queueIndex=(queueIndex+1)%playQueue.length;
  loadQueueIndex(queueIndex); playAudio();
});
audio.addEventListener("timeupdate", ()=>{
  if(audio.duration){ progress.value=(audio.currentTime/audio.duration)*100; curTime.textContent=formatTime(audio.currentTime); durTime.textContent=formatTime(audio.duration);}
});
progress.addEventListener("input", ()=>{ audio.currentTime=(progress.value/100)*audio.duration; });
volume.addEventListener("input", ()=>{ audio.volume=parseFloat(volume.value); });

function formatTime(t){ const m=Math.floor(t/60); const s=Math.floor(t%60); return m+":"+String(s).padStart(2,'0'); }

/* ----------------- Like ---------------- */
playerLikeBtn.addEventListener("click", ()=>{
  if(!currentSong) return;
  if(liked.includes(currentSong.id)) liked=liked.filter(x=>x!==currentSong.id);
  else liked.push(currentSong.id);
  saveLiked(); updateLikeBtn(); renderLiked();
});
function updateLikeBtn(){ if(!currentSong) return; playerLikeBtn.textContent=liked.includes(currentSong.id)?"♥":"♡"; updateLikedCount();}
function updateLikedCount(){ likedCount.textContent=liked.length; }
function saveLiked(){ localStorage.setItem(LS_LIKED,JSON.stringify(liked)); }

/* ----------------- Playlists ---------------- */
function showCreatePlaylist(){ createPlaylistModal.classList.remove("hidden"); newPlaylistName.value=""; }
addPlaylistBtn.addEventListener("click", showCreatePlaylist);
createPlaylistCancel.addEventListener("click", ()=> createPlaylistModal.classList.add("hidden"));
createPlaylistConfirm.addEventListener("click", ()=>{
  const name=newPlaylistName.value.trim();
  if(!name) return alert("Enter name");
  const id="pl"+Date.now();
  playlists.push({id,name,songs:[]});
  savePlaylists(); renderPlaylists(); createPlaylistModal.classList.add("hidden");
});
deletePlaylistBtn.addEventListener("click", ()=>{
  if(playContext.type!=="playlist") return;
  const pl=playlists.find(p=>p.id===playContext.id);
  if(!pl) return;
  if(confirm(`Delete entire playlist "${pl.name}"?`)){
    playlists=playlists.filter(p=>p.id!==pl.id);
    savePlaylists(); renderPlaylists(); goToPage("home"); playContext={type:"home",id:null}; buildQueue();
  }
});
resetDataBtn.addEventListener("click", ()=>{
  if(confirm("Reset all data? This will remove playlists, liked songs, and settings.")){
    localStorage.removeItem(LS_LIKED);
    localStorage.removeItem(LS_PLAYLISTS);
    location.reload();
  }
});
function savePlaylists(){ localStorage.setItem(LS_PLAYLISTS,JSON.stringify(playlists)); }

/* ----------------- Queue Build ---------------- */
function buildQueue(){
  if(playContext.type==="home") playQueue=[...songs];
  else if(playContext.type==="liked") playQueue=songs.filter(s=>liked.includes(s.id));
  else if(playContext.type==="playlist"){
    const pl=playlists.find(p=>p.id===playContext.id);
    if(pl) playQueue=pl.songs.map(id=>songs.find(s=>s.id===id)).filter(Boolean);
  }
  else if(playContext.type==="genre") playQueue=songs.filter(s=>s.genre===playContext.id);
}
