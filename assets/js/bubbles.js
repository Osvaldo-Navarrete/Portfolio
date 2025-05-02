
const canvas = document.getElementById('bubbles');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Crear hexágonos
const bubbles = [];
const numBubbles = 10;

for (let i = 0; i < numBubbles; i++) {
  bubbles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: 20 + Math.random() * 90,
    speed: 0.2 + Math.random() * 0.2,
    drift: (Math.random() - 0.5) * 0.3,
    rotation: Math.random() * Math.PI * 2,       // Rotación inicial
    rotationSpeed: (Math.random() - 0.5) * 0.01   // Velocidad de rotación
  });
}

// Dibujar hexágono rotado
function drawHexagon(x, y, radius, rotation) {
  const sides = 6;
  const angleStep = (Math.PI * 2) / sides;

  ctx.beginPath();
  for (let i = 0; i <= sides; i++) {
    const angle = i * angleStep + rotation;
    const px = x + radius * Math.cos(angle);
    const py = y + radius * Math.sin(angle);
    if (i === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.closePath();
  ctx.fillStyle = '#BADFD7';
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const b of bubbles) {
    b.y -= b.speed;
    b.x += b.drift;
    b.rotation += b.rotationSpeed;

    if (b.y + b.radius < 0) {
      b.y = canvas.height + b.radius;
      b.x = Math.random() * canvas.width;
      b.rotation = Math.random() * Math.PI * 2;
    }

    drawHexagon(b.x, b.y, b.radius, b.rotation);
  }

  requestAnimationFrame(animate);
}

animate();