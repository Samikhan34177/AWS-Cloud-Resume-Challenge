const counter = document.querySelector(".counter-number");
let countValue;

async function updateCounter() {
    try {
        const response = await fetch("https://437cfskspj.execute-api.us-east-1.amazonaws.com/endpoint");
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        countValue = data.views; // Assuming the data structure includes a 'views' property
        
        counter.innerHTML = `This page has ${countValue} Views!`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

updateCounter();
