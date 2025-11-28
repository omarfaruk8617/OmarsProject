// Function to load a random quote
async function loadQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    document.getElementById("quote").textContent = data.content;
  } catch (error) {
    console.error("Error fetching quote:", error);
    document.getElementById("quote").textContent = "Failed to load quote.";
  }
}

// Call the function immediately on page load
window.addEventListener("DOMContentLoaded", loadQuote);

// Optional alert on button click
document.getElementById("alertButton").addEventListener("click", () => {
  alert("hello world 🎉");
});

