const pianokeys = document.querySelectorAll('.key');
const volumeSlider = document.querySelector('.volume-slider input');
const keyCheck = document.querySelector('.keys-check input');
let mapedKeys = [];
let audio = new Audio('/assets/tunes/a.wav');



const playTune = (key) => {
    audio.src = `/assets/tunes/${key}.wav`
    audio.play()

    const clickedkey = document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    
    setTimeout(() => {
        clickedkey.classList.remove("active");
    }, 150)
}

pianokeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
})

document.addEventListener('keydown', (e) => {
    if(mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
})

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

volumeSlider.addEventListener('input', handleVolume);

const showHideKeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

keyCheck.addEventListener('click', showHideKeys)