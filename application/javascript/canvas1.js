const canvas = document.getElementById("ad_1_canvas");
const context = canvas.getContext("2d");

// Set canvas dimensions based on CSS values
function resizeCanvas() {
    const style = getComputedStyle(canvas);
    canvas.width = parseInt(style.width, 10);
    canvas.height = parseInt(style.height, 10);
}

resizeCanvas(); // Initial resize to match CSS

const particleArray = [];
class Particle {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 30;
        this.dx = (Math.random() - 0.5) * 2; // Adjust for horizontal drift
        this.dy = Math.random() * -3 - 1; // Ensure upward movement
        this.hue = Math.random() * 360; // Random hue for varied colors
    }

    // Draw circle
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
        context.stroke();

        const gradient = context.createRadialGradient(
            this.x,
            this.y,
            1,
            this.x + 0.5,
            this.y + 0.5,
            this.radius
        );

        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.3)");
        gradient.addColorStop(0.95, "#e7feff");

        context.fillStyle = gradient;
        context.fill();
    }

    // Move circle
    move() {
        this.x += this.dx;
        this.y += this.dy; // Move upwards
        if (this.y + this.radius < 0) {
            this.y = canvas.height + this.radius; // Reset to bottom when out of view
            this.x = Math.random() * canvas.width; // Randomize x position on reset
        }
    }
}

// Create initial bubbles
for (let i = 0; i < 15; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particleArray.push(new Particle(x, y));
}

const imgBackground = new Image();
imgBackground.src = "https://oscarswebsite.se/application/images/food-photographer-h7a8RsZFzgc-unsplash.jpg";

const imgForeground = new Image();
imgForeground.src = "https://oscarswebsite.se/application/images/ccc-cola.png";

function drawBackgroundImage() {
    context.drawImage(imgBackground, 0, 0, 300, 450);
}

function drawForegroundImage() {
    context.drawImage(imgForeground, 50, 50, 150, 100); // Adjust position and size as needed
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBackgroundImage(); // Draw the background image first

    particleArray.forEach((particle) => {
        particle.move();
        particle.draw();
    });

    drawForegroundImage(); // Draw the foreground image on top

    requestAnimationFrame(animate);
}

imgBackground.onload = function() {
    resizeCanvas();
    animate();
};

imgForeground.onload = function() {
    resizeCanvas();
    animate();
};

// Update canvas size on window resize
window.addEventListener("resize", () => {
    resizeCanvas();
});
