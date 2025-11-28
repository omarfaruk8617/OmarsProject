async function loadQuote() {
  const quoteEl = document.getElementById("quote");
  quoteEl.textContent = "Loading quote...";

  try {
    // Fetch a random quote
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    quoteEl.textContent = `"${data.content}" — ${data.author}`;
  } catch (err) {
    console.error("Error fetching quote:", err);
    // Fallback quote if API fails
    quoteEl.textContent = `"Fashion is the armor to survive the reality of everyday life." — Bill Cunningham`;
  }
}

window.addEventListener("DOMContentLoaded", loadQuote);

// Optional alert button
document.getElementById("alertButton").addEventListener("click", () => {
  alert("hello world 🎉");
});


