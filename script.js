const quotes = [
    "Code is like humor.When you have to explain it it's bad.",
    "Programming is 10% writing code and 90% figuring out why it doesn’t work.",
    "First, solve the problem. Then, write the code. Then, debug the code. Then, cry.",
    "Git happens.",
    "Real programmers count from 0.",
    "A programmer is just a tool that converts caffeine into code."
];
function showQuote( ) {
    const randomindex =Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").textContent = quotes [randomIndex];
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");

    if (name === "" || email === "" || message === ""){
        formMsg.textContent = "Please fill in all the fields!";
        formMsg.style.color = "red"; 
    } else {
        formMsg.textContent = "Thank you, your message has been sent!";
        formMsg.style.color = "green";
        document.getElementById("contactForm").reset();
    }
});