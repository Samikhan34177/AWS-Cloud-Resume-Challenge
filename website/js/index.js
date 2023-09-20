const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://pljre3bfb2w2l7p3k3z2kp22ie0txdew.lambda-url.us-east-1.on.aws/Your-lambdaFunction-URL");
    let data = await response.json();
    counter.innerHTML = ' This page has ${data} Views!';
}

updateCounter();