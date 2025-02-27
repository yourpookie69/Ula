const slider = document.getElementById('slider');
const range = document.getElementById('range');
const statusText = document.getElementById('status');

slider.addEventListener('input', function() {
    const value = this.value;
    range.style.width = `${value}%`;

    if (value <= 25) {
        statusText.textContent = "Current Status: I'm fine for now";
    } else if (value > 25 && value <= 50) {
        statusText.textContent = "Current Status: Miss you a bit";
    } else if (value > 50 && value <= 75) {
        statusText.textContent = "Current Status: Need cuddles";
    } else {
        statusText.textContent = "Current Status: Death by no kisses";
    }
});
// script.js
const particlesContainer = document.querySelector('.particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 5000);
}

setInterval(createParticle, 300);