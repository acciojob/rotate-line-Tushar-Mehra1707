//your JS code here. If required.
const line = document.getElementById('line');

// Initialize the rotation angle
let angle = 0;

// Function to rotate the line
function rotateLine() {
    angle += 2; // Increase the angle by 2 degrees
    line.style.transform = `rotate(${angle}deg)`; // Apply the rotation
}

// Set an interval to rotate the line every 20 milliseconds
setInterval(rotateLine, 20);
