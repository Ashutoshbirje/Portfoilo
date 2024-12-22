const text = "Web Developer";
const speed = 100;
const repeatCount = 30; 

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


typeWriter();

function downloadFile() {
    const fileUrl = 'https://drive.google.com/uc?export=download&id=1uwHqM9Ei5PYr5BH3D_oToq--m6OCKNhs';
    window.location.href = fileUrl; 
}


document.querySelector(".menu").addEventListener("click", function () {
    const nav = document.querySelector(".B_nav");
    nav.classList.toggle("active"); 
});

