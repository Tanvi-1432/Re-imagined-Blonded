// NAVIGATION BAR

// selecting the whole section
let home = document.querySelector(".home");
let music = document.querySelector(".music");
let about = document.querySelector(".about-container");
let merch = document.querySelector(".merch-container");
let connect = document.querySelector(".connect");

// selecting individual nav element
let navMusic = document.querySelector(".nav-1");
let navHome = document.querySelector(".nav-3");
let navAbout = document.querySelector(".nav-2");
let navMerch = document.querySelector(".nav-4");
let navConnect = document.querySelector(".nav-5");

// selecting the whole of nav bar
let navigation = document.querySelectorAll(".nav");

let numberOfNav = document.querySelectorAll(".nav").length;

// looping through the nav bar
for (let i = 0; i < numberOfNav; i++) {
    navigation[i].addEventListener("click", function () {
        // selecting the inner content nav element
        navigationInnerHTML = this.innerHTML;
        navigationPage(navigationInnerHTML);
    });
}

// function to view only the nav content that has been selected and hide the rest
function navigationPage(nav) {
    switch (nav) {
        case "ABOUT":
            home.style.display = "none";
            music.style.display = "none";
            merch.style.display = "none";
            connect.style.display = "none";
            about.style.display = "block";
            navAbout.style.backgroundColor = "black";
            navAbout.style.color = "whitesmoke";
            navHome.style.backgroundColor = "transparent";
            navHome.style.color = "black";
            navMusic.style.backgroundColor = "transparent";
            navMusic.style.color = "black";
            navMerch.style.backgroundColor = "transparent";
            navMerch.style.color = "black";
            navConnect.style.backgroundColor = "transparent";
            navConnect.style.color = "black";
            // callback function to reset the music preview and the play/pause icon
            musicReset();
            break;
        case "MUSIC":
            home.style.display = "none";
            music.style.display = "block";
            merch.style.display = "none";
            connect.style.display = "none";
            about.style.display = "none";
            navAbout.style.backgroundColor = "transparent";
            navAbout.style.color = "black";
            navHome.style.backgroundColor = "transparent";
            navHome.style.color = "black";
            navMusic.style.backgroundColor = "black";
            navMusic.style.color = "whitesmoke";
            navMerch.style.backgroundColor = "transparent";
            navMerch.style.color = "black";
            navConnect.style.backgroundColor = "transparent";
            navConnect.style.color = "black";
            break;
        case "HOME":
            home.style.display = "block";
            music.style.display = "none";
            merch.style.display = "none";
            connect.style.display = "none";
            about.style.display = "none";
            navAbout.style.backgroundColor = "transparent";
            navAbout.style.color = "black";
            navHome.style.backgroundColor = "black";
            navHome.style.color = "whitesmoke";
            navMusic.style.backgroundColor = "transparent";
            navMusic.style.color = "black";
            navMerch.style.backgroundColor = "transparent";
            navMerch.style.color = "black";
            navConnect.style.backgroundColor = "transparent";
            navConnect.style.color = "black";
            musicReset();
            break;
        case "MERCH":
            home.style.display = "none";
            music.style.display = "none";
            merch.style.display = "block";
            connect.style.display = "none";
            about.style.display = "none";
            navAbout.style.backgroundColor = "transparent";
            navAbout.style.color = "black";
            navHome.style.backgroundColor = "transparent";
            navHome.style.color = "black";
            navMusic.style.backgroundColor = "transparent";
            navMusic.style.color = "black";
            navMerch.style.backgroundColor = "black";
            navMerch.style.color = "whitesmoke";
            navConnect.style.backgroundColor = "transparent";
            navConnect.style.color = "black";
            musicReset();
            break;
        case "CONNECT":
            home.style.display = "none";
            music.style.display = "none";
            merch.style.display = "none";
            connect.style.display = "block";
            about.style.display = "none";
            navAbout.style.backgroundColor = "transparent";
            navAbout.style.color = "black";
            navHome.style.backgroundColor = "transparent";
            navHome.style.color = "black";
            navMusic.style.backgroundColor = "transparent";
            navMusic.style.color = "black";
            navMerch.style.backgroundColor = "transparent";
            navMerch.style.color = "black";
            navConnect.style.backgroundColor = "black";
            navConnect.style.color = "whitesmoke";
            musicReset();
            break;
    }
}

// MUSIC

// function to pause and reset music preview
function musicReset() {
    nikeAudio.pause();
    nikeAudio.currentTime = 0;
    playPauseButton.innerHTML = "play_arrow";
}

// selecting the play/pause icon
let playPauseButton = document.querySelector(".material-symbols-outlined");
// audio constructor
let nikeAudio = new Audio(
    "./audio/nikes-audio.m4a"
);

// event listener to play or pause the audio when clicked on the play or pause icon and alternate between the play/pause icons
playPauseButton.addEventListener("click", function () {
    if (playPauseButton.innerHTML === "play_arrow") {
        nikeAudio.play();
        playPauseButton.innerHTML = "pause";
    } else {
        playPauseButton.innerHTML = "play_arrow";
        nikeAudio.pause();
    }
});

// event listener to revert back the pause icon to play when the audio ends 
nikeAudio.addEventListener("ended", function () {
    playPauseButton.innerHTML = "play_arrow";
});
