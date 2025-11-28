function sayHello() {
  alert("hello world 🎉");


  async function loadQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  document.getElementById("quote").textContent = data.content;
}

loadQuote();

