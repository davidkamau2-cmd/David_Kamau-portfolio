const quotes = [
    "Code is like humor.When you have to explain it it's bad.",
    "Programming is 10% writing code and 90% figuring out why it doesn’t work.",
    "First, solve the problem. Then, write the code. Then, debug the code. Then, cry.",
    "Git happens.",
    "Real programmers count from 0.",
    "A programmer is just a tool that converts caffeine into code."
];
function showQuote( ) {
    const randomindex =Math.floor(Math.Random() * quotes.length);
    document.getElementById(quoteDisplay).textContent = quotes [randomindex];
}