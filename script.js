const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

const apiKey = "";

// Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
  VoiceRSS.speech({
    key: apiKey,
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// Get jokes from Joke API
async function getJoke() {
  let joke = "";
  const apiUrl = "https://v2.jokeapi.dev/joke/Programming";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = data.setup + " " + data.delivery;
    } else {
      joke = data.joke;
    }
    tellMe(joke);
    // Disable Button
    toggleButton();
  } catch (err) {
    console.log("Error occured", err);
  }
}

// Event listeners
button.addEventListener("click", getJoke);
audioElement.addEventListener("ended", toggleButton);
