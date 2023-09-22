const counter = document.querySelector(".counter-number");

async function updateCounter() {
    const response = await fetch("https://437cfskspj.execute-api.us-east-1.amazonaws.com/endpoint");
    const data = await response.json();
    counter.innerHTML = `This page has ${data} views!`;
}

updateCounter();
