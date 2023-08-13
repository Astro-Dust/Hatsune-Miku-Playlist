const playBtn = document.getElementById("play-btn");

const audio = new Audio("assets/music/hm-1.6-out-of-gravity.mp3");

const previousBtn = document.getElementById("previous-btn");

const nextBtn = document.getElementById("next-btn");

const playlist = [

    {artist: "Hatsune Miku", title: "1/6 Out of Gravity", audioPath: "assets/music/hm-1.6-out-of-gravity.mp3", imagePath: "assets/images/1.6-out-of-gravity-cover.jpg"},

    {artist: "Hatsune Miku", title: "Hello World", audioPath: "assets/music/hm-hello-world.mp3", imagePath: "assets/images/hello-world-cover.png"},

    {artist: "Hatsune Miku", title: "Starduster", audioPath: "assets/music/hm-starduster.mp3", imagePath: "assets/images/starduster-cover.jpg"},

    {artist: "Hatsune Miku", title: "Tell Your World", audioPath: "assets/music/hm-tell-your-world.mp3", imagePath: "assets/images/tell-your-world-cover.jpg"},

    {artist: "Hatsune Miku", title: "Triple Baka", audioPath: "assets/music/hm-triple-baka.mp3", imagePath: "assets/images/triple-baka-cover.png"}

];

let currentSongIndex = 0;

function updateSongInfo() {
    
    // div song-info
    const currentSong = playlist[currentSongIndex];
    const songInfoElement = document.querySelector(".song-info");

    // trocando o nome do artista
    const artistElement = songInfoElement.querySelector("h5");
    artistElement.textContent = currentSong.artist;

    // trocando o nome do titulo da musica
    const titleElement = songInfoElement.querySelector("h3");
    titleElement.textContent = currentSong.title

}

function updateCoverImg() {

    const coverImage = document.getElementById("cover-image");
    coverImage.src = playlist[currentSongIndex].imagePath;

}

previousBtn.addEventListener("click", () => {

    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    updateSongInfo();
    updateCoverImg();
    audio.src = playlist[currentSongIndex].audioPath;

    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "<span class='material-symbols-sharp'>pause</span>";
    } else {
        audio.pause();
        playBtn.innerHTML = "<span class='material-symbols-sharp'>play_circle</span>";
    }

    audio.play();

});

nextBtn.addEventListener('click', () => {

    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    updateSongInfo();
    updateCoverImg()
    audio.src = playlist[currentSongIndex].audioPath;

    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "<span class='material-symbols-sharp'>pause</span>";
    } else {
        audio.pause();
        playBtn.innerHTML = "<span class='material-symbols-sharp'>play_circle</span>";
    }

    audio.play();

});

playBtn.addEventListener("click", () => {

    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = "<span class='material-symbols-sharp'>pause</span>";
    } else {
        audio.pause();
        playBtn.innerHTML = "<span class='material-symbols-sharp'>play_circle</span>";
    }

});