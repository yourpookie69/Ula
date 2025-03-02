const range = document.getElementById('range');
const statusText = document.getElementById('status');

// Set the range to 100% permanently
range.style.width = '25%';

// Set the status to "OVERLOAD! CATCHING FIRE!" (you can change this to something else if you want)
statusText.innerHTML = `Current Status: <strong style="color: darkred;">Miss you a bit</strong>`;
