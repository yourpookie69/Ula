const range = document.getElementById('range');
const statusText = document.getElementById('status');
const fireEmojis = document.getElementById('fire-emojis');
const particles = document.querySelector('.particles');

// Set the range to 100% permanently
range.style.width = '100%';

// Set the status to "OVERLOAD! CATCHING FIRE!" and show the fire emojis
statusText.innerHTML = `Current Status: <strong style="color: darkred;">OVERLOAD! CATCHING FIRE! 🔥</strong>`;
fireEmojis.innerHTML = '🔥🔥🔥'; // Add fire emojis

// Function to create fire emojis with random animation
function createFireEmojis() {
    const fire = document.createElement('span');
    fire.textContent = '🔥';
    fire.style.position = 'absolute';
    fire.style.left = `${Math.random() * 100}%`; // Random horizontal position
    fire.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Random animation speed
    fireEmojis.appendChild(fire);

    setTimeout(() => {
        fire.remove();
    }, 2000); // Remove fire emoji after 2 seconds
}

// Continuously create fire emojis
setInterval(createFireEmojis, 300);

// Add a flickering effect to the background
setInterval(() => {
    particles.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity for flickering effect
}, 200);
