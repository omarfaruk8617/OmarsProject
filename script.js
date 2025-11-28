function sayHello() {
  alert("hello world 🎉");
function loadQuote() {
  fetch('https://dummyjson.com/quotes/random')
    .then(response => response.json())
    .then(data => {
      document.getElementById('quote').innerText = data.quote;
    })
    .catch(error => {
      document.getElementById('quote').innerText = "Could not load quote 😢";
      console.error("API error:", error);
    });
}

loadQuote();
