const jokeContainer = document.querySelector(".joke");
const btn = document.querySelector(".btn");

function renderJoke({ joke }) {
  const html = joke;
  jokeContainer.innerHTML = html;
}

async function handleFetch() {
  const header = {
    headers: {
      "Accept": "application/json"
    }
  };
  
  const response = await fetch("https://icanhazdadjoke.com/", header);
  const data = await response.json();
  renderJoke(data);
}

handleFetch();
btn.addEventListener("click", handleFetch);
