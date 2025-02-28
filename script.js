
const slider = document.getElementById('slider');
const range = document.getElementById('range');
const statusText = document.getElementById('status');

slider.addEventListener('input', function() {
    const value = this.value;
    range.style.width = `${value}%`;

    let status = "";
    let color = "";

    if (value <= 25) {
        status = "I'm fine for now";
        color = "green"; // Green for "I'm fine for now"
    } else if (value > 25 && value <= 50) {
        status = "Miss you a bit";
        color = "limegreen"; // Lime green for "Miss you a bit"
    } else if (value > 50 && value <= 75) {
        status = "Need cuddles";
        color = "orange"; // Orange for "Need cuddles"
    } else {
        status = "Death by no kisses";
        color = "red"; // Red for "Death by no kisses"
    }

    statusText.innerHTML = `Current Status: <strong style="color: ${color};">${status} ꒰(˶• ᴗ •˶)꒱</strong>`;
});

// Particle and Heart creation code remains the same
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

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 1000);
