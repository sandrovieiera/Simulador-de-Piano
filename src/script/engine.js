const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = []
let audio = new Audio("../src/tunes/src_tunes_a.wav")
const playTune = (key) => {
    audio.src = `../src/tunes/src_tunes_${key}.wav`;
    audio.play();

    console.log(mapedKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
   
    key.addEventListener("click",() => playTune (key.dataset.key));
    mapedKeys.push(key.dataset.key);
    
});
const handleVolume = (e) => {
   audio.volume = e.target.value;
};

const showHidekeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
};
document.addEventListener("keydown",
    (e) => {
        if(mapedKeys.includes(e.key)) {
            playTune(e.key);
        }
    });



    volumeSlider.addEventListener("input", handleVolume);

    keysCheck.addEventListener("click", showHidekeys)
