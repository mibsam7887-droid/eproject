
let songs = [
    // Taylor Swift
    { name: "Shake It Off", artist: "Taylor Swift", category: "Pop", img: "pop picture - Copy/Taylor_Swift_-_Blank_Space_(Official_Single_Cover).png", src: "Shake It Off.mp3" },
    { name: "Style", artist: "Taylor Swift", category: "Pop", img: "pop picture - Copy/Taylor_Swift_-_Style_(Official_Single_Cover).png", src: "pop songs/Style.mp3" },
    { name: "Look What You Made Me Do", artist: "Taylor Swift", category: "Pop", img: "pop picture - Copy/Taylor_Swift_Feat._Kendrick_Lamar_-_Bad_Blood_(Official_Single_Cover).png", src: "pop songs/Look What You Made Me Do.mp3" },
    { name: "Blank Space", artist: "Taylor Swift", category: "Pop", img: "pop picture - Copy/Taylor_Swift_-_Wildest_Dreams_(Official_Single_Cover).png", src: "pop songs/Blank Space.mp3" },
    { name: "Anti-Hero", artist: "Taylor Swift", category: "Pop", img: "pop picture - Copy/taylorrrrrrrrrrrrr.jpg", src: "pop songs/Anti-Hero.mp3" },
   
    // Queen
    { name: "We Are the Champions", artist: "Queen", category: "Rock", img: "rock picture/0x1900-000000-80-0-0 (1).jpg", src: "We Are The Champions (Remastered 2011).mp3" },
    { name: "We Will Rock You", artist: "Queen", category: "Rock", img: "rock picture/images (1).jfif", src: "We Will Rock You (Remastered 2011).mp3" },
    { name: "Bohemian Rhapsody", artist: "Queen", category: "Rock", img: "rock picture/ooooo.png", src: "Bohemian Rhapsody (Remastered 2011).mp3" },
    { name: "Another One Bites the Dust", artist: "Queen", category: "Rock", img: "rock picture/Queen-dont-stop-me-now-1979-6-s.jpg", src: "Another One Bites The Dust (Live).mp3" },
    { name: "Don't Stop Me Now", artist: "Queen", category: "Rock", img: "rock picture/Wearethechampions.jpg", src: "Don't Stop Me Now (Remastered 2011).mp3" },
    
    // Eminem
    { name: "Rap God", artist: "Eminem", category: "Rap", img: "rap picture - Copy/1900x1900-000000-80-0-0.jpg", src: "rap songs/Rap God.mp3" },
    { name: "The Real Slim Shady", artist: "Eminem", category: "Rap", img: "rap picture - Copy/Eminem_-_Without_Me_CD_cover.jpg", src: "rap songs/The Real Slim Shady (1).mp3" },
    { name: "Not Afraid", artist: "Eminem", category: "Rap", img: "rap picture - Copy/eminnn.jpg", src: "rap songs/Not Afraid.mp3" },
    { name: "Without Me", artist: "Eminem", category: "Rap", img: "rap picture - Copy/emmmmmmmmmmmmm.jpg", src: "rap songs/Without Me.mp3" },
    { name: "Lose Yourself", artist: "Eminem", category: "Rap", img: "rap picture - Copy/for-those-who-keep-crying-over-the-cover-remember-thats-a-v0-gcxlrzko7m3d1.jpg", src: "rap songs/Lose Yourself (From 8 Mile Soundtrack).mp3" },
    
    // Abida Parveen
    { name: "Dama Dam Mast Qalandar", artist: "Abida Parveen", category: "Classical", img: "classical picture/0x1900-000000-80-0-0 (1).jpg", src: "Dama Dam Mast Qalandar.mp3" },
    { name: "Tere Ishq Nachaya", artist: "Abida Parveen", category: "Classical", img: "classical picture/0x1900-000000-80-0-0 (2).jpg", src: "Tere Ishq Nachaya Kar Ke Thaiya Thaiya.mp3" },
    { name: "Yar Ko Humne Ja Baja Dekha", artist: "Abida Parveen", category: "Classical", img: "classical picture/class2.jpg", src: "Yar KO Hum Ne Ja Baja Dekha (1).mp3" },
    { name: "Mai Nara-e-Mastana", artist: "Abida Parveen", category: "Classical", img: "classical picture/Main-Nara-Mastana-Urdu-2004-20190911172349-500x500.jpg", src: "Main Nara-a-mastana [I927Wysv6eg].mp3" },
    { name: "Chaap Tilak", artist: "Abida Parveen", category: "Classical", img: "classical picture/classssssss.jpg", src: "Chaap Tilak.mp3" },
    
    // Miles Davis
    { name: "So What", artist: "Miles Davis", category: "Jazz", img: "jazz picture/5c3d71f5de9f8e4cf3b0c8dbaafdd9d5.jpg", src: "Miles Davis - So What (Official Audio).mp3" },
    { name: "All Blues", artist: "Miles Davis", category: "Jazz", img: "jazz picture/51x-IBXZs9L._SL500_.jpg", src: "All Blues.mp3" },
    { name: "Freddie Freeloader", artist: "Miles Davis", category: "Jazz", img: "jazz picture/cover-75.jpg", src: "jazz songs/Freddie Freeloader.mp3" },
    { name: "Milestones", artist: "Miles Davis", category: "Jazz", img: "jazz picture/miklllklklll.jpg", src: "jazz songs/Milestone (1).mp3" },
    { name: "Blue in Green", artist: "Miles Davis", category: "Jazz", img: "jazz picture/miles-davis-black-beauty-miles-davis-at-fillmore-west-Cover-Art.jpg", src: "Miles Davis - Blue In Green (Official Audio).mp3" }
];

const artistDB = {
    "Taylor Swift": { 
        bio: "American singer-songwriter recognized for her musical versatility, artistic reinventions, and cultural impact.", 
        achievements: "14 Grammy Awards, 40 American Music Awards.", 
        events: "The Eras Tour (Global)", 
        release: "The Tortured Poets Department" 
    },
    "Queen": { 
        bio: "Legendary British rock band formed in London in 1970, known for their elaborate live performances and diverse musical style.", 
        achievements: "Rock and Roll Hall of Fame Inductees, Grammy Lifetime Achievement Award.", 
        events: "Queen + Adam Lambert Rhapsody Tour", 
        release: "Face It Alone (Single)" 
    },
    "Eminem": { 
        bio: "American rapper, songwriter, and record producer, widely considered one of the greatest and most influential hip hop artists of all time.", 
        achievements: "15 Grammy Awards, Academy Award for Best Original Song.", 
        events: "No upcoming tours currently.", 
        release: "The Death of Slim Shady" 
    },
    "Abida Parveen": { 
        bio: "Pakistani singer, composer and musician of Sufi music. She is widely revered as the 'Queen of Sufi music'.", 
        achievements: "Pride of Performance, Hilal-e-Imtiaz.", 
        events: "Sufi Music Festival, Lahore", 
        release: "Raqs-e-Bismil" 
    },
    "Miles Davis": { 
        bio: "American trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th-century music.", 
        achievements: "8 Grammy Awards, DownBeat Hall of Fame.", 
        events: "Jazz Fest Tribute in New Orleans", 
        release: "Kind of Blue (Legacy Edition)" 
    }
};

let audio = document.getElementById("audioPlayer");
let playBtn = document.getElementById("playBtn");
let currentIndex = null;

// Mobile Menu Toggle
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.getElementById('mobileOverlay').classList.toggle('active');
}

// Renders the Home page grouped by Categories & New Releases
function loadHome() {
    let container = document.getElementById("homeContainer");
    container.innerHTML = "";
    document.getElementById("homeView").style.display = "block";
    document.getElementById("artistView").style.display = "none";

    // New Releases Section
    let newReleases = [songs[4], songs[9], songs[14], songs[19], songs[24]].filter(Boolean);
    
    let newHtml = `<div class="category-section">
        <h2 class="section-title">🔥 New Releases</h2>
        <div class="songs-grid">`;
    
    newReleases.forEach(song => {
        let index = songs.indexOf(song);
        newHtml += generateCard(song, index);
    });
    
    newHtml += `</div></div>`;
    container.innerHTML += newHtml;

    const categories = ["Pop", "Rock", "Rap", "Classical", "Jazz"];
    
    categories.forEach(cat => {
        let catSongs = songs.filter(s => s.category === cat);
        if(catSongs.length === 0) return;

        let sectionHtml = `<div class="category-section">
            <h2 class="section-title">${cat}</h2>
            <div class="songs-grid">`;
        
        catSongs.forEach(song => {
            let index = songs.indexOf(song);
            sectionHtml += generateCard(song, index);
        });

        sectionHtml += `</div></div>`;
        container.innerHTML += sectionHtml;
    });
}

function generateCard(song, index) {
    let animDelay = (index % 5) * 0.1;
    let safeArtistName = song.artist.replace(/'/g, "\\'"); 
    
    return `
    <div class="song-card" style="animation-delay: ${animDelay}s" onclick="showArtist('${safeArtistName}')">
        <div class="card-image-wrapper">
            <img src="${song.img}" onerror="this.src='https://ui-avatars.com/api/?name=Music&background=181818&color=fff&size=200'">
            <div class="card-controls">
                <button class="dl-btn" onclick="handleDownload(${index}, event)" title="Download Song">
                    <i class="fa-solid fa-download"></i>
                </button>
                <div class="play-overlay" onclick="playSong(${index}, event)">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
        </div>
        <h4>${song.name}</h4>
        <p>${song.artist}</p>
    </div>`;
}

// Play Logic
function playSong(index, e) {
    if (e) {
        e.stopPropagation(); 
        e.preventDefault();
    }

    currentIndex = index;
    let song = songs[index];
    audio.src = song.src;
    audio.play();

    document.getElementById("playerTitle").innerText = song.name;
    document.getElementById("playerCategory").innerText = song.artist;
    
    let coverImg = document.getElementById("playerCover");
    coverImg.src = song.img;
    coverImg.style.display = "block";
    document.getElementById("defaultIcon").style.display = "none";
    
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function togglePlay() {
    if (!audio.src) return; 
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function nextSong() {
    if (!audio.src || currentIndex === null) return;
    currentIndex = (currentIndex + 1) % songs.length;
    playSong(currentIndex, null);
}

function prevSong() {
    if (!audio.src || currentIndex === null) return;
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(currentIndex, null);
}

// Show Artist View
function showArtist(artistName) {
    document.getElementById("homeView").style.display = "none";
    document.getElementById("artistView").style.display = "block";

    document.getElementById("artistNameTitle").innerText = artistName;
    
    let details = artistDB[artistName] || {
        bio: `Explore the discography and latest hits of ${artistName}.`,
        achievements: "Multiple chart-topping hits and global recognition.",
        events: "Stay tuned for upcoming tour dates.",
        release: "Latest singles available now."
    };

    document.getElementById("artistBio").innerText = details.bio;
    document.getElementById("artistAchievements").innerText = details.achievements;
    document.getElementById("artistEvents").innerText = details.events;
    document.getElementById("artistRelease").innerText = details.release;

    let artistSongs = songs.filter(s => s.artist === artistName);
    if(artistSongs.length > 0) {
        document.getElementById("artistImage").src = artistSongs[0].img;
    }

    let container = document.getElementById("artistSongsContainer");
    container.innerHTML = "";
    artistSongs.forEach(song => {
        let index = songs.indexOf(song);
        container.innerHTML += generateCard(song, index);
    });
}

// Navigation / Filtering
function goHome() {
    loadHome();
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
    
    document.querySelectorAll(".nav-item")[0].classList.add("active"); 
    document.querySelectorAll(".cat")[0].classList.add("active"); 
    
    // Close sidebar on mobile after navigation
    if(window.innerWidth <= 768) toggleSidebar();
}

function filterCategory(cat, e) {
    document.getElementById("homeView").style.display = "block";
    document.getElementById("artistView").style.display = "none";
    
    document.querySelectorAll(".cat").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
    
    if (e && e.target) e.target.classList.add("active");

    // Close sidebar on mobile after clicking a category filter
    if(window.innerWidth <= 768) toggleSidebar();

    if (cat === "All") { 
        loadHome(); 
        return; 
    }

    let container = document.getElementById("homeContainer");
    let catSongs = songs.filter(s => s.category === cat);
    
    container.innerHTML = `<div class="category-section">
        <h2 class="section-title">${cat} Results</h2>
        <div class="songs-grid">
            ${catSongs.map(song => generateCard(song, songs.indexOf(song))).join('')}
        </div>
    </div>`;
}

// Search Logic
document.getElementById("searchInput").addEventListener("keyup", function() {
    let val = this.value.toLowerCase();
    let filtered = songs.filter(s => s.name.toLowerCase().includes(val) || s.artist.toLowerCase().includes(val));
    
    document.getElementById("homeView").style.display = "block";
    document.getElementById("artistView").style.display = "none";
    
    let container = document.getElementById("homeContainer");
    container.innerHTML = `<div class="category-section">
        <h2 class="section-title">Search Results</h2>
        <div class="songs-grid">
            ${filtered.map(song => generateCard(song, songs.indexOf(song))).join('')}
        </div>
    </div>`;
});


/* Download & Player Audio Logic */
function handleDownload(index, e) {
    if (e) { e.stopPropagation(); e.preventDefault(); }
    
    let user = localStorage.getItem("loggedInUser");
    if (!user) { alert("🔒 Please log in to download music."); openLogin(); return; }
    
    let song = songs[index];
    let a = document.createElement('a');
    a.href = song.src; a.download = song.name + '.mp3';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

function downloadCurrentSong() {
    if (currentIndex === null || !audio.src) { alert("Please select a song first."); return; }
    handleDownload(currentIndex, null);
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60); let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = "0" + sec; return `${min}:${sec}`;
}

// Player state variables
let isDragging = false;
let progressBar = document.getElementById("progressBar");

// Handle Time Update and Stop Glitching
audio.addEventListener("timeupdate", () => {
    // Only update automatically if the user isn't dragging the slider
    if (audio.duration && !isDragging) {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
        document.getElementById("currentTime").innerText = formatTime(audio.currentTime);
        document.getElementById("totalTime").innerText = formatTime(audio.duration);
    }
});

// Detect when user starts dragging
progressBar.addEventListener("mousedown", () => isDragging = true);
progressBar.addEventListener("touchstart", () => isDragging = true, {passive: true});

// Update the audio time only when the user releases the slider
progressBar.addEventListener("mouseup", function() {
    isDragging = false;
    if (audio.duration) audio.currentTime = (this.value / 100) * audio.duration;
});
progressBar.addEventListener("touchend", function() {
    isDragging = false;
    if (audio.duration) audio.currentTime = (this.value / 100) * audio.duration;
});

// Smoothly update the text timer while actively dragging
progressBar.addEventListener("input", function() {
    if (audio.duration) {
        document.getElementById("currentTime").innerText = formatTime((this.value / 100) * audio.duration);
    }
});

// Auto-play next song when current track ends
audio.addEventListener("ended", () => {
    nextSong();
});

document.getElementById("volumeBar").addEventListener("input", function() { audio.volume = this.value; });

/* AUTH SYSTEM */
function openLogin() { document.getElementById("loginModal").style.display = "flex"; }
function openSignup() { document.getElementById("signupModal").style.display = "flex"; }
function closeLogin() { document.getElementById("loginModal").style.display = "none"; }
function closeSignup() { document.getElementById("signupModal").style.display = "none"; }

window.onclick = function(e) {
    if (e.target == document.getElementById("loginModal")) closeLogin();
    if (e.target == document.getElementById("signupModal")) closeSignup();
}

function signupUser() {
    let u = document.getElementById("signupUser").value, p = document.getElementById("signupPass").value;
    if (u && p) { localStorage.setItem("user_" + u, p); alert("Account created!"); closeSignup(); openLogin(); }
}

function loginUser() {
    let u = document.getElementById("loginUser").value, p = document.getElementById("loginPass").value;
    if (localStorage.getItem("user_" + u) === p) { localStorage.setItem("loggedInUser", u); updateSession(); closeLogin(); } 
    else { alert("Invalid login."); }
}

function logout() { localStorage.removeItem("loggedInUser"); updateSession(); alert("Logged out."); }

function updateSession() {
    let u = localStorage.getItem("loggedInUser");
    if (u) {
        document.getElementById("guestButtons").style.display = "none";
        document.getElementById("userSection").style.display = "flex";
        document.getElementById("welcomeUser").innerText = u;
    } else {
        document.getElementById("guestButtons").style.display = "flex";
        document.getElementById("userSection").style.display = "none";
    }
}

// Initialization
updateSession();
loadHome();