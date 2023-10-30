"use strict";

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];
// Show new quote
function newQuote() {
  // pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // check if author field is blank and replace with 'unknown'
  if (quote.author == "Anonymous") {
    authorText.textContent = "Someone";
  } else {
    authorText.textContent = quote.author;
  }

  // check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.add("long-quote");
  }

  quoteText.textContent = quote.text;
}

// Getting my Quotes From API

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    apiQuotes = await fetch(apiUrl).then((apiQuotes) => apiQuotes.json());
    newQuote();
  } catch (error) {
    // Catching all my errors here
    console.log(error);
  }
}

// to tweet a quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//  event listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

//On load
getQuotes();
