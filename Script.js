const text = "Web Developer";
const speed = 100; // Speed in milliseconds
const repeatCount = 30; // Number of times to repeat the typing effect

let index = 0;
let repeat = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-effect").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else if (repeat < repeatCount - 1) {
        index = 0;
        repeat++;
        setTimeout(() => {
            document.getElementById("typing-effect").textContent = ""; // Clear the text for the next round
            typeWriter();
        }, speed);
    }
}

// Start the typing effect
typeWriter();