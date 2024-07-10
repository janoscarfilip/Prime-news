const welcomeBox = document.getElementById("welcomeBox");
const acceptBtn = document.querySelector(".welcomeButton");
const content = document.getElementById("content");
let logo = document.getElementById('logo_img');

acceptBtn.onclick = () => {
    welcomeBox.style.opacity = '0';
    welcomeBox.style.visibility = 'hidden';
    setTimeout(() => {
        welcomeBox.style.display = 'none';
    }, 500); // Match the duration of the CSS transition
    content.style.backgroundColor = "rgba(0, 0, 0, 0)";
    logo.style.opacity = "1";
}