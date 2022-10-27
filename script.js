// const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
// const apiUrl = "https://type.fit/api/quotes";

let apiQuotes = [];

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show New Quote
function newQuote() {
  showLoadingSpinner();
  // Pick a Random quote from apiQuotes array
  const randomIndex = Math.floor(Math.random() * apiQuotes.length);
  const quote = apiQuotes[randomIndex];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author || "Unknown";

  // Check quote length to determine styling
  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  removeLoadingSpinner();
}
// Get Quotes From API

async function getQuotes() {
  showLoadingSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
