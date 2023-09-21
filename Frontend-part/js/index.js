const counter = document.querySelector(".counter-number");
let countValue;

async function updateCounter() {
    try {
        const response = await fetch("https://pljre3bfb2w2l7p3k3z2kp22ie0txdew.lambda-url.us-east-1.on.aws/Your-lambdaFunction-URL");
        
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
